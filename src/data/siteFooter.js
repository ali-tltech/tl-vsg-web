import logo from "@/images/resources/logo-1.png";
import bg from "@/images/shapes/site-footer-shape-1.png";

const message = "Hello, I'm interested in VS GenX Solutions HR services. Could you share more details?";  
const phoneHref= "+919000334512"

const footerData = {
  bg,
  logo,
  aboutText: "Great Experience for Building Customers & Businesses",
  socials: [
    {
      id: 1,
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/company/vs-genx-solutions/",
    },
    {
      id: 2,
      icon: "fab fa-youtube",
      href: "https://www.youtube.com/@VSGenXSolutions",
    },
    {
      id: 3,
      icon: "fab fa-facebook",
      href: " https://www.facebook.com/share/18TnFLMZo3/",
    },
    {
      id: 4,
      icon: "fab fa-instagram",
      href: "https://www.instagram.com/vsgenxsolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      id: 4,
      icon: "fab fa-whatsapp",
      href: `https://wa.me/${phoneHref}?text=${encodeURIComponent(message)}`,
    },
  ],
  links: [
    {
      id: 1,
      text: "About Us",
      href: "/about",
    },
    {
      id: 2,
      text: "Services",
      href: "/services",
    },
    {
      id: 3,
      text: "Case Studies",
      href: "/cases",
    },
    {
      id: 4,
      text: "Blogs",
      href: "/blog",
    },
    {
      id: 5,
      text: "Faqs",
      href: "/faq",
    },
    {
      id: 6,
      text: "Contact",
      href: "/contact",
    },
    {
      id: 7,
      text: "Terms & conditions",
      href: "/terms-of-use",
    },
    {
      id: 8,
      text: "Privacy policy",
      href: "/privacy-policy",
    },
    {
      id: 9,
      text: "Testimonials",
      href: "/testimonials",
    },
  ],
  newsletterText: "Subscribe for our upcoming latest articles and resources",
  addressLine1: "102, Shaili Gardenia ",
  addressLine2: " Water Tank Rd, Shaili Gardens,",
  addressLine3: "Yapral, Secunderabad,",
  addressLine4: " Hyderabad, Telangana - 500087",
  phone: "+91 9000334512",
  phoneHref: "+919000334512",
  email: "enablement@vsgenxsolutions.com ",
  author: "TL Technologies Private Limited",
  year: "2020-2025",
};

export default footerData;
