import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { getTerms } from "src/api/webapi";

const TermsOfUsePolicy = () => {
  const [termsData, setTermsData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("N/A"); // Store Last Updated separately
  const [sanitizedContent, setSanitizedContent] = useState(""); // Store modified content
  const [headerTitle, setHeaderTitle] = useState(""); // Store extracted header title

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await getTerms();
        if (response?.data?.document) {
          const documentData = response.data.document;
          setTermsData(documentData);

          // Extract and remove both the first header and "Last Updated" from content
          const { extractedHeader, extractedDate, cleanedContent } = extractAndCleanContent(documentData.content);

          if (extractedHeader) {
            setHeaderTitle(extractedHeader);
          }
          if (extractedDate) {
            setLastUpdated(extractedDate);
          }

          // Set modified content without the extracted header and "Last Updated"
          setSanitizedContent(cleanedContent);
        }
      } catch (error) {
        console.error("Error fetching terms and conditions:", error);
      }
    };

    fetchTerms();
  }, []);

  // Function to extract and remove the first <h2> and "Last Updated" line from HTML content
  const extractAndCleanContent = (htmlContent) => {
    let extractedHeader = "";
    let extractedDate = "N/A";
    let cleanedContent = htmlContent;

    // Match and remove the first <h2> (header title)
    const headerRegex = /<h2[^>]*>(.*?)<\/h2>/i;
    const headerMatch = cleanedContent.match(headerRegex);
    if (headerMatch) {
      extractedHeader = headerMatch[1].trim();
      cleanedContent = cleanedContent.replace(headerRegex, ""); // Remove the <h2> tag from content
    }

    // Match and remove <p>Last Updated: [date]</p>
    const dateRegex = /<p[^>]*>\s*Last Updated:\s*([\w\s,]+)\s*<\/p>/i;
    const dateMatch = cleanedContent.match(dateRegex);
    if (dateMatch) {
      extractedDate = dateMatch[1].trim();
      cleanedContent = cleanedContent.replace(dateRegex, ""); // Remove the "Last Updated" <p> tag
    }

    return { extractedHeader, extractedDate, cleanedContent };
  };

  if (!termsData) {
    return <p className="text-center mt-10 text-gray-600">Loading Terms and Conditions...</p>;
  }

  return (
    <div style={{ padding: "20px", color: "#333", lineHeight: "1.8", maxWidth: "900px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", color: "#007BFF", marginBottom: "10px", marginTop: "80px" }}>
        {headerTitle || "Terms and Conditions & Disclaimer"}
      </h2>

      {/* Show extracted "Last Updated" date */}
      <p style={{ fontSize: "14px", textAlign: "center", fontStyle: "italic", color: "#666" }}>
        Last Updated: {lastUpdated}
      </p>

      <section className="mt-5">
        {/* Render sanitized HTML content without the extracted header and Last Updated */}
        <div
          className="prose prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sanitizedContent) }}
        />
      </section>
    </div>
  );
};

export default TermsOfUsePolicy;
