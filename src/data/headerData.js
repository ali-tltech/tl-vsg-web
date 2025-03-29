import logo from "@/images/resources/logo-1.png";

const home = {
  id: 1,
  name: "Home",
  href: "/",
};



export const servicesSubNavItems = [
  // { id: 1, name: "Services", href: "/services" },
  // { id: 2, name: "Services Two", href: "/services-2" },
  // { id: 3, name: "Services Three", href: "/services-3" },
  // { id: 4, name: "Consumer Product", href: "/consumer-product" },
  // { id: 5, name: "Audit Marketing", href: "/audit-marketing" },
  // { id: 6, name: "Banking Advising", href: "/banking-advising" },
  // { id: 7, name: "Business Growth", href: "/business-growth" },
  // { id: 8, name: "Financial Advice", href: "/financial-advice" },
  // { id: 9, name: "Marketing Rules", href: "/marketing-rules" },
];

export const navItems = [
  home,
  {
    id: 2,
    name: "About Us",
    href: "/about",
  },
  {
    id: 3,
    name: "Services",
    href: "/services",
    // subNavItems: servicesSubNavItems,
  },
  {
    id: 3,
    name: "FAQs",
    href: "/faq",

  },
  {
    id: 4,
    name: "Testimonials",
    href: "/testimonials",

  },
  {
    id: 5,
    name: "Cases",
    href: "/cases",
    // Custom property to indicate "Coming Soon"

  },
  {
    id: 6,
    name: "Blog",
    href: "/blog",
    // Custom property to indicate "Coming Soon"
    },
  {
    id: 7,
    name: "Contact",
    href: "/contact",
  },
];


const message = "Hello, I'm interested in VS GenX Solutions HR services. Could you share more details?";  
const phoneHref= "+919000334512"
// provide social media links here
const socials = [
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
];

const headerData = {
  logo,
  navItems,
  callText: "Need help? Talk to an expert",
  phone: "+91 9000334512",
  phoneHref: "+919000334512",
  email: "enablement@vsgenxsolutions.com ",
  socials,
};

export default headerData;
