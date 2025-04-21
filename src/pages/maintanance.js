import React from 'react';
import { Clock, AlertCircle, Calendar, Mail } from 'lucide-react';

export default function Maintenance() {
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "5rem",
        boxSizing: "border-box"
      }}
    >
      <div style={{
        maxWidth: "700px",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "bold", 
          color: "#333" 
        }}>🚧 Site Under Maintenance</h1>
        
        <p style={{ 
          fontSize: "1.25rem", 
          marginTop: "1rem", 
          color: "#555" 
        }}>
          We&apos;re performing some updates. Please check back soon!
        </p>
        
        <div style={{
          marginTop: "3rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "1.5rem",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
         
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            textAlign: "left"
          }}>
         
            
           
            
          
            
         <div style={{
  display: "flex",
  alignItems: "flex-start"
}}>
  <Mail style={{ marginRight: "0.75rem", color: "#3b82f6", flexShrink: 0 }} size={24} />
  <div>
    <h3 style={{ fontWeight: "500", color: "#333" }}>Questions?</h3>
    <p style={{ color: "#555" }}>Contact our support team at <a 
      href="mailto:enablement@vsgenxsolutions.com"
      style={{
        color: "#3b82f6",
        textDecoration: "none", 
        fontWeight: "500",
        transition: "color 0.2s ease, borderBottom 0.2s ease",
        borderBottom: "1px solid #3b82f6"
      }}
      onMouseOver={(e) => {
        e.target.style.color = "#1e40af";
        e.target.style.borderBottom = "1px solid #1e40af";
      }}
      onMouseOut={(e) => {
        e.target.style.color = "#3b82f6";
        e.target.style.borderBottom = "1px solid #3b82f6";
      }}
    >enablement@vsgenxsolutions.com</a></p>
  </div>
</div>
          </div>
        </div>
        
        <div style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "rgba(219, 234, 254, 0.8)",
          borderRadius: "0.5rem",
          display: "inline-block"
        }}>
          <p style={{ color: "#1e40af" }}>
            We appreciate your patience as we work to improve your experience.
          </p>
        </div>
      </div>
    </div>
  );
}