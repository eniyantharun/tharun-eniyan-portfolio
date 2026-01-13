import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cognigennxt,
  zeepium,
  veetee,
  duoinformatics,
  tracxn,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Mobile App Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Front End Developer",
    company_name: "Cogni Gen Nxt",
    icon: cognigennxt,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Leading development of scalable, high-performance web applications using React, TypeScript, and Redux for enterprise clients.",
      "Architecting reusable component libraries and implementing best practices for code quality, testing, and maintainability.",
      "Mentoring junior developers and conducting comprehensive code reviews to ensure adherence to coding standards.",
      "Collaborating with cross-functional teams to deliver innovative solutions that meet business requirements and enhance user experience.",
    ],
  },
  {
    title: "Founder",
    company_name: "Zeepium",
    icon: zeepium,
    iconBg: "#E6DEDD",
    date: "February 2020 - February 2024",
    points: [
      "Founded and led a technology startup, managing end-to-end product development from conception to deployment.",
      "Developed multiple mobile and web applications using React Native, React, and Firebase, serving diverse client needs.",
      "Built and managed a team of developers, designers, and project managers to deliver high-quality software solutions.",
      "Gained hands-on experience in solving real-world problems under constraints, dealing with uncertainty, and adapting to rapid market changes.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "VeeTee Technologies",
    icon: veetee,
    iconBg: "#383E56",
    date: "July 2018 - January 2020",
    points: [
      "Built responsive web applications using React and Redux, and developed Android applications using Java.",
      "Developed Currentia ERP system with 3-tier architecture, REST APIs, and modern HTML5/ReactJS frontend.",
      "Created Doctor Plus healthcare application with Alexa integration for voice-controlled patient data management.",
      "Wrote efficient, maintainable, and reusable code following industry best practices and design patterns.",
    ],
  },
  {
    title: "Junior Android Developer",
    company_name: "Duo Informatics",
    icon: duoinformatics,
    iconBg: "#E6DEDD",
    date: "June 2017 - July 2018",
    points: [
      "Designed, built, and maintained high-performance native Android applications using Java and Android SDK.",
      "Developed GamerZ app enabling users to create, discover, and participate in sports activities using location-based services.",
      "Implemented Google Maps API integration for real-time location tracking and activity discovery features.",
      "Ensured optimal application performance, quality, and responsiveness while identifying and fixing bugs promptly.",
    ],
  },
  {
    title: "Data Research Executive",
    company_name: "Tracxn Technologies",
    icon: tracxn,
    iconBg: "#383E56",
    date: "August 2016 - June 2017",
    points: [
      "Conducted comprehensive research and analysis of technology companies, startups, and market trends for investment intelligence.",
      "Maintained and updated extensive databases with accurate company information, funding data, and industry insights.",
      "Collaborated with analytics teams to provide data-driven insights supporting strategic investment decisions.",
      "Developed proficiency in SQL and data management tools for efficient information retrieval and database operations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Tharun's expertise in React Native helped us launch our mobile app ahead of schedule. His attention to detail and problem-solving skills are exceptional.",
    name: "Rajesh Kumar",
    designation: "Product Manager",
    company: "Tech Solutions Inc",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Working with Tharun at Zeepium was a great experience. His ability to build scalable applications and lead a team is remarkable.",
    name: "Priya Sharma",
    designation: "CTO",
    company: "Digital Ventures",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Tharun delivered our healthcare application with Alexa integration flawlessly. His technical skills and dedication to quality stand out.",
    name: "Michael Chen",
    designation: "CEO",
    company: "HealthTech Solutions",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "Currentia ERP",
    description:
      "Responsive enterprise resource planning system designed for fast and easy-to-use business operations. Features 3-tier architecture with REST API and modern HTML5/ReactJS/Redux frontend, providing high scalability and flexibility for companies in industry and trade.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Doctor Plus App",
    description:
      "Healthcare application with centralized server for patient data management including vital information, medicine intake logs, appointments, and prescriptions. Features Alexa skill integration for voice-controlled health management and automated notifications to doctors when vital levels are abnormal.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "alexa-sdk",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "GamerZ",
    description:
      "Android application enabling users to create, discover, and participate in sports activities within their immediate location. Features location-based services with Google Maps API integration for real-time activity discovery and social connectivity among sports enthusiasts.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "google-maps",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tharuneniyan/",
    icon: "linkedin",
    color: "#0077B5",
  },
  {
    name: "GitHub",
    url: "https://github.com/eniyantharun/",
    icon: "github",
    color: "#333333",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/tharun_eniyan/",
    icon: "leetcode",
    color: "#FFA116",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/916380641542",
    icon: "whatsapp",
    color: "#25D366",
  },
];

export const contactInfo = {
  email: "tharuneniyan@gmail.com",
  phone: "+91 6380641542",
  location: "Chennai, India",
};

export { services, technologies, experiences, testimonials, projects };
