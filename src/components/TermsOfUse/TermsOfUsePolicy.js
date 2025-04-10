import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { getTerms } from "src/api/webapi";

const TermsOfUsePolicy = () => {
  const [termsData, setTermsData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("N/A");
  const [sanitizedContent, setSanitizedContent] = useState("");
  const [headerTitle, setHeaderTitle] = useState("");

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await getTerms();

        if (response?.data?.document) {
          const documentData = response.data.document;
          setTermsData(documentData);

          const { extractedHeader, extractedDate, cleanedContent } = extractAndCleanContent(documentData.content);

          if (extractedHeader) setHeaderTitle(extractedHeader);
          if (extractedDate) setLastUpdated(extractedDate);

          setSanitizedContent(cleanedContent);
        }
      } catch (error) {
        console.error("Error fetching terms and conditions:", error);
      }
    };

    fetchTerms();
  }, []);

  const decodeHtmlEntities = (text) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };

  const extractAndCleanContent = (htmlContent) => {
    let extractedHeader = "";
    let extractedDate = "N/A";
    let cleanedContent = htmlContent;

    const headerRegex = /<h2[^>]*>(.*?)<\/h2>/i;
    const headerMatch = cleanedContent.match(headerRegex);
    if (headerMatch) {
      extractedHeader = decodeHtmlEntities(headerMatch[1].trim());
      cleanedContent = cleanedContent.replace(headerRegex, "");
    }

    const dateRegex = /<p[^>]*>\s*<em>\s*Last Updated:\s*([\w\s\d,]+)\s*<\/em>\s*<\/p>/i;
    const dateMatch = cleanedContent.match(dateRegex);
    if (dateMatch) {
      extractedDate = dateMatch[1].trim();
      cleanedContent = cleanedContent.replace(dateRegex, "");
    }

    cleanedContent = decodeHtmlEntities(cleanedContent);

    return { extractedHeader, extractedDate, cleanedContent };
  };

  if (!termsData) {
    return <p className="text-center mt-10 text-gray-600">Loading Terms and Conditions...</p>;
  }

  return (
    <div style={{ padding: "20px", color: "#333", lineHeight: "1.8", maxWidth: "1200px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", color: "#007BFF", marginBottom: "10px", marginTop: "80px" }}>
        {headerTitle || "Terms and Conditions & Disclaimer"}
      </h2>

      <p style={{ fontSize: "14px", textAlign: "center", fontStyle: "italic", color: "#666" }}>
        Last Updated: {lastUpdated}
      </p>

      <section className="mt-5">
        <div
          className="prose prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sanitizedContent) }}
        />
      </section>
    </div>
  );
};

export default TermsOfUsePolicy;
