import image1 from "@/images/services/service-details-img-1.jpg";
import image3 from "@/images/services/service-details-img-2.jpg";
import image6 from "@/images/services/service-details-img-3.jpg";
import image4 from "@/images/services/service-details-img-4.jpg";
import image2 from "@/images/services/service-details-img-5.jpg";
import image5 from "@/images/services/service-details-img-6.jpg";
import { faqs } from "./fAQsPage";
import { servicesSubNavItems } from "./headerData";

export const servicesOne = {
  tagline: "Our Services",
  title: "Our Core HR Services",
  services: [
    {
      id: 1,
      title: "HR Foundations Accelerator",
      image: "services-1-1.jpg",
      icon: "icon-creative",
      href: "/hr-foundations",
      text: "Establish robust HR foundations with comprehensive policies, compliance measures, and employee handbooks for sustainable organizational growth.",
    },
    {
      id: 2,
      title: "Talent Edge Solutions",
      image: "services-1-2.jpg",
      icon: "icon-business",
      href: "/talent-edge-solutions",
      text: "Connect underrepresented talent with tailored recruitment strategies, seamless onboarding processes, and dynamic employer branding solutions exceptionally.",
    },
    {
      id: 3,
      title: "Leadership Horizon Hub",
      image: "services-1-3.jpg",
      icon: "icon-global",
      href: "/leadership-horizon-hub",
      text: "Develop inclusive leaders through innovative coaching programs, strategic skill enhancement, and transformative leadership development workshops effectively.",
    },
    {
      id: 4,
      title: "Cultural Transformation Studio",
      image: "services-1-4.jpg",
      icon: "icon-mobile-analytics",
      href: "/cultural-transformation-studio",
      text: "Create engaging organizational cultures with dynamic team-building, interactive workshops, cultural audits, and inclusive community initiatives effectively.",
    },
    {
      id: 5,
      title: "Smart HR Solutions",
      image: "services-1-5.jpg",
      icon: "icon-analysis",
      href: "/smart-hr-solutions",
      text: "Integrate advanced HR automation tools with digital dashboards, streamlined payroll systems, and data-driven decision frameworks seamlessly.",
    },
    {
      id: 6,
      title: "Employee Engagement Catalyst",
      image: "services-1-6.jpg",
      icon: "icon-creative-1",
      href: "/employee-engagement-catalyst",
      text: "Boost team morale and productivity through innovative engagement strategies, continuous feedback mechanisms, and performance recognition programs.",
    },
  ],
};



export const serviceDetailsSidebar = {
  navItems: servicesSubNavItems.slice(3),
  title: "Contact with \n us for any \n advice",
  phoneIcon: "icon-phone-call",
  text: "Need help? Talk to an expert",
  phone: "+91 9000334512",
  phoneHref: "+919000334512",
};



export const HrFoundationDetails = {
  icon: "icon-global",
  text: "Our HR Foundations Accelerator is the cornerstone of modern HR management, engineered to build a resilient and future-ready HR framework for your organization. We craft comprehensive policies, robust compliance guidelines, and detailed employee handbooks that serve as the backbone of effective HR operations.",
  text2: "We develop detailed standards and procedures designed to ensure full compliance with industry regulations and operational excellence. Our policies provide clarity and consistency, empowering your team with clear direction and best practices.",
  text3: "With a proven track record of driving success across various industries, our HR Foundations Accelerator has transformed HR practices for organizations by building a strong, compliant, and adaptable HR infrastructure. Discover how our strategic approach can set the stage for sustainable growth, improve operational efficiency, and empower your workforce to thrive in today’s dynamic business environment.",
  contents: [
    "Comprehensive Policies & Guidelines: Ensuring compliance and operational excellence.",
    "Scalable Strategic Support: Flexible HR solutions that evolve with your business.",
  ],
};
export const TalentEdgeSolutionsDetails = {
  icon: "icon-global",
  text: "Our Talent Edge Solutions connects underserved talent with the opportunities they deserve through tailored recruitment strategies, seamless onboarding processes, and dynamic employer branding that fuels growth and innovation. We believe that unlocking the potential of diverse talent is key to driving sustainable success, and our approach is designed to align your organization’s culture with the right candidates.",
  text2: "Our targeted approach leverages data-driven insights and market expertise to attract diverse, high-caliber talent that perfectly fits your company’s values and requirements. We refine candidate sourcing and screening to ensure that each hire contributes to your strategic goals and enhances your competitive edge.",
  text3: "With a proven track record in transforming talent acquisition practices, our service not only bridges the gap between potential and opportunity but also fosters an environment of continuous growth and innovation. Experience a transformative approach to talent acquisition that drives sustainable growth, enriches your workforce, and empowers your business to thrive in today’s competitive landscape.",
  contents: [
    "Tailored Recruitment Strategies: Data-driven hiring for high-caliber talent.",
    "Seamless Onboarding & Branding: Strong employer branding and integration.",
  ],
};
export const LeadershipHorizonHubDetails = {
  icon: "icon-global",
  text: "Our Leadership Horizon Hub is dedicated to developing inclusive leaders who drive excellence through innovative coaching, comprehensive training programs, and targeted performance enhancement initiatives. We believe that effective leadership is the cornerstone of organizational success, and our approach is designed to equip every leader with the skills and confidence to guide their teams to new heights.",
  text2: "Unlock your leadership potential with expert guidance, personalized mentoring, and continuous development. Our coaching methodologies empower leaders to make strategic decisions, foster collaboration, and navigate complex challenges with ease.",
  text3: "Experience transformative leadership development that inspires excellence, nurtures growth, and builds a resilient future. Discover how our Leadership Horizon Hub can elevate your organization's leadership capabilities and foster a culture of continuous innovation and success.",
  contents: [
    "Innovative Coaching: Personalized mentoring and expert guidance.",
    "Comprehensive Training & Enhancement: Practical tools for leadership growth.",
  ],
};
export const CulturalTransformationStudioDetails = {
  icon: "icon-global",
  text: "Our Cultural Transformation Studio redefines workplace culture by crafting engaging, forward-thinking environments where creativity and inclusion thrive. We believe that a vibrant culture is the cornerstone of sustainable success, and our approach transforms traditional workplace dynamics into innovative ecosystems that empower every individual.",
  text2: "Our tailored team-building exercises are designed to strengthen collaboration, build trust, and foster a sense of unity among team members. Through interactive and experiential activities, we break down silos and create a shared purpose that energizes your workforce.",
  text3: "Discover how our strategic approach can transform your organization’s culture into a vibrant, inclusive community that inspires excellence, nurtures growth, and fuels sustainable success.",
  contents: [
    "Dynamic Team-Building: Strengthening collaboration and trust.",
    "Interactive Workshops & Cultural Audits: Assess, improve, and innovate workplace culture.",
  ],
};
export const SmartHRSolutionsDetails = {
  icon: "icon-global",
  text: "Our Smart HR Solutions harness cutting-edge automation technology to streamline HR operations and empower data-driven decision-making. We integrate advanced digital dashboards with streamlined payroll systems and decision frameworks to boost efficiency, clarity, and overall organizational performance. Our innovative approach replaces manual processes with automated systems, enabling your HR team to focus on strategic initiatives that drive growth.",
  text2: "Seamlessly automate routine HR tasks—from attendance tracking and leave management to benefits administration—enhancing productivity and reducing the risk of errors. Our automation solutions free up valuable time and resources, allowing you to focus on high-impact, strategic HR activities.",
  text3: "Experience enhanced operational efficiency and strategic empowerment with our Smart HR Solutions, designed to transform your HR department into a dynamic, tech-enabled powerhouse that supports sustainable success in today’s competitive landscape.",
  contents: [
    "Advanced HR Automation: Streamlining routine tasks for efficiency and accuracy.",
    "Integrated Digital Dashboards: Real-time insights for data-driven decision-making.",
  ],
};
export const EmployeeEngagementCatalystDetails = {
  icon: "icon-global",
  text: "Our Employee Engagement Catalyst is designed to boost team morale and productivity through innovative engagement strategies, continuous feedback mechanisms, and performance recognition programs. We believe that a highly engaged workforce is the cornerstone of organizational success, transforming everyday interactions into opportunities for growth and empowerment.",
  text2: "We implement creative initiatives that energize your workforce and build a dynamic team culture. Our approach includes interactive workshops, collaborative challenges, and motivational events designed to inspire innovation and foster open communication.",
  text3: "Experience a transformative approach to employee engagement that not only elevates performance but also nurtures lasting commitment. With our Employee Engagement Catalyst, you empower your team to reach its full potential, driving both individual growth and organizational excellence.",
  contents: [
    "Innovative Engagement Strategies: Energizing teams through interactive initiatives.",
    "Continuous Feedback & Recognition: Encouraging growth and celebrating success.",
  ],
};






export const HrFoundation = {
  image: image1,
  title: "HR Foundations Accelerator",
  ...HrFoundationDetails,
};

export const TalentEdgeSolution = {
  image: image2,
  title: "Talent Edge Solutions",
  ...TalentEdgeSolutionsDetails,
};

export const LeadershipHorizonHubs = {
  image: image3,
  title: "Leadership Horizon Hub",
  ...LeadershipHorizonHubDetails,
};

export const SmartHRSolutionsDetail = {
  image: image4,
  title: "Smart HR Solutions",
  ...SmartHRSolutionsDetails,
};

export const EmployeeEngagementCatalysts = {
  image: image5,
  title: "Employee Engagement Catalyst",
  ...EmployeeEngagementCatalystDetails,
};

// export const marketingRules = {
//   image: image6,
//   title: "Marketing Rules",
//   ...HrFoundationDetails,
// };
