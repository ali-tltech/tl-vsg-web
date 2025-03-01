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
        console.error("Error fetching privacy policy:", error);
      }
    };

    fetchPolicy();
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
      cleanedContent = cleanedContent.replace(headerRegex, "");
    }

    // Match and remove <p>Last Updated: [date]</p>
    const dateRegex = /<p[^>]*>\s*Last Updated:\s*([\w\s,]+)\s*<\/p>/i;
    const dateMatch = cleanedContent.match(dateRegex);
    if (dateMatch) {
      extractedDate = dateMatch[1].trim();
      cleanedContent = cleanedContent.replace(dateRegex, "");
    }

    return { extractedHeader, extractedDate, cleanedContent };
  };

  if (!policyData) {
    return <p className="text-center mt-10 text-gray-600">Loading Privacy Policy...</p>;
  }

  return (
    <div className="p-5 text-gray-800 leading-relaxed " style={{ padding: "20px", color: "#333", lineHeight: "1.8", maxWidth: "1200px", margin: "auto" }}>
      <h2 className="text-center text-blue-600 mb-3 mt-20">
        {headerTitle || (policyData.title === "PRIVACY" && "Privacy Policy")}
      </h2>

      {/* Show extracted "Last Updated" date */}
      <p className="text-sm text-center italic text-gray-600">
        Last Updated: {lastUpdated}
      </p>

      <section className="mt-5">
        {/* Render HTML content safely without the extracted header and Last Updated */}
        <div
          className="prose prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sanitizedContent) }}
        />
      </section>
    </div>
  );
}
