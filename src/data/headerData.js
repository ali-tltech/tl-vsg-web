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
    href: "#",
    comingSoon: true, // Custom property to indicate "Coming Soon"

  },
  {
    id: 6,
    name: "Blog",
    href: "#",
    comingSoon: true, // Custom property to indicate "Coming Soon"
    },
  {
    id: 7,
    name: "Contact",
    href: "/contact",
  },
];


// provide social media links here
const socials = [
  // {
  //   id: 1,
  //   icon: "fab fa-linkedin",
  //   href: "https://www.linkedin.com/in/venkatesans/",
  // },
 
];

const headerData = {
  logo,
  navItems,
  callText: "Need help? Talk to an expert",
  phone: "+91 9000334512",
  phoneHref: "+919000334512",
  email: "vsgenxsolutions@gmail.com ",
  socials,
};

export default headerData;
