// // components/FaviconUpdater.js
// import { useEffect, useState } from 'react';
// import { organization } from 'src/api/api';

// const FaviconUpdater = () => {
//   const [organizationDetails, setOrganizationDetails] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const contactData = await organization();
//         if (contactData?.data?.data) {
//           console.log(contactData.data.data);
          
//           const fullAddress = contactData.data.data.location;
//           // Split the address after every two commas while keeping the commas
//           const addressParts = fullAddress.split(/(.*?,.*?,)/g).filter(Boolean);
          
//           setOrganizationDetails({
//             ...contactData.data.data,
//             formattedAddress: addressParts,
//           });
          
//           // Update favicon links if the API returns favicon URLs
//           if (contactData.data.data.favicon) {
//             updateFavicons(contactData.data.data.favicon);
//           }
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
    
//     fetchData();
//   }, []);
  
//   const updateFavicons = (faviconUrl) => {
//     // Update regular favicon
//     const shortcutIcon = document.getElementById('fav-shortcut');
//     const favIcon = document.getElementById('fav-icon');
//     const appleIcon = document.getElementById('apple-touch-icon');
//     const favicon32 = document.getElementById('favicon-32');
//     const favicon16 = document.getElementById('favicon-16');
    
//     if (shortcutIcon) shortcutIcon.href = faviconUrl;
//     if (favIcon) favIcon.href = faviconUrl;
    
//     // If you have different sizes for different icons, you would need those URLs from the API
//     // For now assuming same URL for all icons
//     if (appleIcon) appleIcon.href = faviconUrl;
//     if (favicon32) favicon32.href = faviconUrl;
//     if (favicon16) favicon16.href = faviconUrl;
//   };
  
//   // This component doesn't render anything visible
//   return null;
// };

// export default FaviconUpdater;