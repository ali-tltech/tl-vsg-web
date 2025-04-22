import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { getPrivacyPolicy } from "src/api/webapi";

export default function PrivacyPolicy() {
  const [policyData, setPolicyData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("N/A");
  const [sanitizedContent, setSanitizedContent] = useState("");
  const [headerTitle, setHeaderTitle] = useState("");

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await getPrivacyPolicy();
        if (response?.data?.document) {
          const documentData = response.data.document;
          setPolicyData(documentData);

          const { extractedHeader, extractedDate, cleanedContent } =
            extractAndCleanContent(documentData.content);

          if (extractedHeader) {
            setHeaderTitle(extractedHeader);
          }

          if (extractedDate) {
            setLastUpdated(extractedDate);
          }

          setSanitizedContent(cleanedContent);
        }
      } catch (error) {
        console.error("Error fetching privacy policy:", error);
      }
    };

    fetchPolicy();
  }, []);

  // Function to extract and clean HTML content
  const extractAndCleanContent = (htmlContent) => {
    let extractedHeader = "";
    let extractedDate = "N/A";
    let cleanedContent = htmlContent?.trim() || "";

    // Match and remove the first <h1> to <h6>
    const headerRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/i;
    const headerMatch = cleanedContent.match(headerRegex);
    if (headerMatch && headerMatch[1].trim() !== "") {
      extractedHeader = headerMatch[1].trim();
      cleanedContent = cleanedContent.replace(headerRegex, "");
    }

    // Match and remove <p>Last Updated: ...</p>
    const dateRegex = /<p[^>]*>\s*Last Updated:\s*([\w\s,]+)\s*<\/p>/i;
    const dateMatch = cleanedContent.match(dateRegex);
    if (dateMatch && dateMatch[1].trim() !== "") {
      extractedDate = dateMatch[1].trim();
      cleanedContent = cleanedContent.replace(dateRegex, "");
    }

    // Clean up any leftover <br> or empty tags at the top
    cleanedContent = cleanedContent
      .replace(/^(<br\s*\/?>|\s|&nbsp;)+/i, "")
      .trim();
    
    // Remove empty paragraph tags
    cleanedContent = cleanedContent
      .replace(/<p>\s*(&nbsp;)*\s*<\/p>/gi, "")
      .replace(/<p><br\s*\/?><\/p>/gi, "");
    
    // Fix excessive spacing between sections
    cleanedContent = cleanedContent
      .replace(/(<\/[^>]+>)\s*(<[^>]+>)/g, "$1$2")
      .replace(/>\s+</g, "> <");

    return { extractedHeader, extractedDate, cleanedContent };
  };

  const configureStyles = () => {
    // Create a style configuration object to improve section spacing
    return {
      container: {
        padding: "20px",
        color: "#333",
        lineHeight: "1.8",
        maxWidth: "1200px",
        margin: "auto",
      },
      section: {
        marginBottom: "1.5rem",
      },
      heading: {
        marginTop: "1.5rem",
        marginBottom: "1rem",
      },
      paragraph: {
        marginBottom: "1rem",
      }
    };
  };

  const styles = configureStyles();

  if (!policyData) {
    return (
      <p className="text-center mt-10 text-gray-600">
        Loading Privacy Policy...
      </p>
    );
  }

  // Configure DOMPurify to retain specific styles we want
  const purifyConfig = {
    ADD_ATTR: ['style'],
    ADD_TAGS: ['section']
  };

  return (
    <div className="p-5 text-gray-800 leading-relaxed" style={styles.container}>
      {/* Render extracted header or fallback */}
      <h2 className="text-center text-blue-600 mb-3 mt-20">
        {headerTitle || "Privacy Policy"}
      </h2>

      {/* Render extracted "Last Updated" date */}
      <p className="text-sm text-center italic text-gray-600 mb-8">
        Last Updated: {lastUpdated}
      </p>

      {/* Render the main sanitized content */}
      {sanitizedContent?.trim() ? (
        <section className="mt-5">
          <div
            className="prose prose-blue max-w-none"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(sanitizedContent, purifyConfig),
            }}
          />
        </section>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No privacy policy available at the moment.
        </p>
      )}
    </div>
  );
}