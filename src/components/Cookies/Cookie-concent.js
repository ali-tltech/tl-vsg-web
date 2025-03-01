// import { useState, useEffect } from 'react';

// export default function CookieConsent() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     // Check if user has already accepted cookies
//     const hasAccepted = localStorage.getItem('cookieConsent');
    
//     // Only show popup if user hasn't accepted
//     if (!hasAccepted) {
//       const timer = setTimeout(() => {
//         setVisible(true);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   const handleAccept = () => {
//     localStorage.setItem('cookieConsent', 'true');
//     setVisible(false);
//   };

//   const handleClose = () => {
//     setVisible(false);
//   };

//   return (
//    // Outer container - add flex-col for mobile
// <div className={cookie-popup fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white z-50 ${visible ? 'show' : ''}}>
  
//   {/* // Container div - modify for mobile stack */}
//   <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
    
//     {/* // Text paragraph - adjust width and text alignment */}
//     <p className="text-sm text-center sm:text-left w-full sm:w-auto mb-4 sm:mb-0">
//       We use cookies on this site to enhance your user experience. By clicking the Accept button, you agree to us doing so.
//     </p>
    
//     {/* // Button container - modify for mobile stack */}
//     <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
      
//       {/* // Buttons - add full width on mobile */}
//       <button 
//         onClick={handleAccept} 
//         className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
//         Accept
//       </button>
      
//       <button 
//         onClick={handleClose} 
//         className="w-full sm:w-auto bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
//         Close
//       </button>
//     </div>
//   </div>
// </div>
//   );
// }