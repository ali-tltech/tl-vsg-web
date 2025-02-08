import bg from "@/images/shapes/contact-one-shape.png";

export const inputs = [
  {
    name: "name",
    type: "text",
    placeholder: "Full name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email address",
    required: true,
  },
  {
    name: "phone",
    type: "text",
    placeholder: "Phone",
    required: false,
  },
  {
    name: "subject",
    type: "text",
    placeholder: "Subject",
    required: false,
  },
];

const common = {
  phone: "+91 9000334512",
  phoneHref: "+919000334512",
  email: "vsgenxsolutions@gmail.com ",
};

// export const contactOne = {
//   bg,
//   tagline: "contact with us",
//   title: "We are Here to Help You & Your Business",
//   text: "Pellentesque ultricies quam dui, id portt tor leo \n iaculis nec. Phasellus ac neque.",
//   timeRange: "8:00 am - 6:00 pm",
//   inputs,
//   bottomTitle: "Visit Our Office",
//   contacts: [
//     {
//       id: 1,
//       title: "Austin",
//       text: "22 Texas West Hills",
//       ...common,
//     },
//     {
//       id: 2,
//       title: "Boston",
//       text: "22 Texas West Hills",
//       ...common,
//     },
//     {
//       id: 3,
//       title: "New York",
//       text: "22 Texas West Hills",
//       ...common,
//     },
//     {
//       id: 4,
//       title: "Dubai",
//       text: "22 Texas West Hills",
//       ...common,
//     },
//   ],
// };

export const contactPage = {
  tagline: "Contact with us",
  title: "Have Any Question?",
  title2: "Write a Message",
  inputs,
};

export const contactDetails = {
  title: "Get in Touch with VSG",
  text: "At VSG, we're dedicated to your success and ready to help you every step of the way. Whether you have a question, need support, or want to discuss our services, our team is here to assist you with prompt and personalized care.",
  address1: "102, Shaili Gardenia ",
  address2: " Water Tank Rd, Shaili Gardens,",
  address3: "Yapral, Secunderabad,",
  address4: " Hyderabad, Telangana - 500087",
  contactIcon: "icon-phone1",
  ...common,
};
