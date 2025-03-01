import dynamic from 'next/dynamic';

const CookieConsent = dynamic(() => require('./Cookie-concent'), {
  ssr: false,
});

export default CookieConsent;