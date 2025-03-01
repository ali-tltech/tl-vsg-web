// src/components/Cookies/CookieConsent.js
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    
    // Only show popup if user hasn't accepted
    if (!hasAccepted) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  // Don't render anything during SSR
  if (!mounted) return null;

  return (
    <div className={`cookie-popup fixed-bottom bg-dark text-white p-3 ${visible ? 'show' : 'd-none'}`} style={{zIndex: 1050}}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-auto text-center text-sm-start mb-3 mb-sm-0">
            <p className="small mb-0">
              We use cookies on this site to enhance your user experience. By clicking the Accept button, you agree to us doing so.
            </p>
          </div>
          <div className="col-12 col-sm-auto">
            <div className="d-flex flex-column flex-sm-row gap-2">
              <button 
                onClick={handleAccept} 
                className="btn btn-success">
                Accept
              </button>
              <button 
                onClick={handleClose} 
                className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}