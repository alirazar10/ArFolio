import { FiBriefcase, FiLinkedin } from "react-icons/fi";
import { AiFillFile, AiOutlineProfile } from "react-icons/ai";
import { Md3P, MdContactMail } from "react-icons/md";

export const MENU_ITEM = [
  { label: "About", value: "about", icon: <Md3P size={32} /> },
  { label: "Experience", value: "experience", icon: <FiBriefcase size={32} /> },
  { label: "Work", value: "work", icon: <AiOutlineProfile size={32} /> },
  { label: "Contact", value: "contact", icon: <MdContactMail size={32} /> },
];

export const SOCIAL_LINKS = {
  facebook: { label: "Facebook", link: "https://www.facebook.com/aliraza.r01" },
  twitter: { label: "Twitter", link: "https://twitter.com/AlirazaR10" },
  linkedin: {
    social_account: "LinkedIn",
    link: "https://www.linkedin.com/in/alireza-r10/",
  },
  github: { social_account: "GitHub", link: "https://github.com/alirazar10" },
  instagram: {
    social_account: "Instagram",
    link: "https://www.instagram.com/aliraza.r10/",
  },
};

export const skills = [
  {
    name: "JavaScript",
    rate: 5,
  },
  {
    name: "Next.js",
    rate: 4,
  },
  {
    name: "React.js",
    rate: 4,
  },
  {
    name: "PHP",
    rate: 5,
  },
  {
    name: "Laravel",
    rate: 5,
  },
  {
    name: "Node.js",
    rate: 4,
  },
  {
    name: "MySQL",
    rate: 5,
  },
  {
    name: "PostgreSQL",
    rate: 4,
  },
  {
    name: "TailwindCss",
    rate: 5,
  },
  {
    name: "Bootstrap",
    rate: 5,
  },
  {
    name: "HTML, CSS",
    rate: 5,
  },
  {
    name: "AJAX",
    rate: 5,
  },
  // {
  //   name: "JSON",
  //   rate: 5,
  // },
  {
    name: "Python",
    rate: 4,
  },

  {
    name: "Flask",
    rate: 3,
  },
  {
    name: "Flutter",
    rate: 3,
  },
  // {
  //   name: "C, C++, C#, JAVA, Dart",
  //   rate: 2,
  // },
  // {
  //   name: "Android",
  //   rate: 2,
  // },
  {
    name: "MS SQL Server",
    rate: 3,
  },

  // {
  //   name: "Windows OS",
  //   rate: 5,
  // },
  // {
  //   name: "Linux OS",
  //   rate: 4,
  // },
  {
    name: "Docker",
    rate: 2,
  },
  // {
  //   name: "SSH",
  //   rate: 4,
  // },
  {
    name: "Git, GitHub",
    rate: 5,
  },
  // {
  //   name: "MS Office",
  //   rate: 5,
  // },
  {
    name: "SEO",
    rate: 3,
  },
  {
    name: "Adobe XD",
    rate: 4,
  },
  {
    name: "Figma",
    rate: 4,
  },
  {
    name: "WordPress",
    rate: 4,
  },
  // {
  //   name: "Octoparse",
  //   rate: 3,
  // },
  // {
  //   name: "Tableau",
  //   rate: 3,
  // },
];

export const EXPERIENCE = [
  {
    title: "Full Stack Developer",
    company: "Fund",
    link: "http://fundevolve.com",
    employment_type: "Full-time",
    start_date: "Dec 2022",
    end_date: "Present",
    location: "Vancouver, British Columbia, Canada",
    description:
      "As a Full Stack Developer, I bring expertise in CSS (Tailwind), React, NextJS, and Material UI (MUI). Currently, I am working in a remote capacity, leveraging my technical skills to deliver user-centered and visually appealing web experiences.",
    skills: [
      "Next.js",
      "Strapi",
      "Git",
      "Bootstrap",
      "CSS",
      "SASS",
      "JSON",
      "VS Code",
      "HTML",
      "JavaScript",
      "React.js",
    ],
  },
  {
    title: "Co-organizer",
    company: "ICPC Afghanistan",
    link: false,
    employment_type: "Full-time",
    start_date: "Aug 2017",
    end_date: "Oct 2021",
    location: "Kabul, Afghanistan",
    description:
      "As a co-organizer of the International Collegiate Programming Contest (ICPC), I honed my skills in communication, networking, teamwork, leadership, and adaptability. I was also a member of the technical team responsible for setting up the contest network using Cisco switches and PC2 software, as well as developing the contest website and management system.",
    skills: ["Network Switches", "PHP", "VS Code", "HTML", "php", "JavaScript"],
  },
  {
    title: "Web Scraper and Data analyst",
    company: "Mustafa Group",
    link: false,
    employment_type: "Full-time",
    start_date: "Apr 2021",
    end_date: "Sep 2021",
    location: "Kabul, Kabul Province, Afghanistan",
    description:
      "Designed an online shopping store using WordPress. Experienced in data collection, organization, and analysis using Python, BeautifulSoup, Octoparse, and Tableau. Skilled in web scraping and visualizing data insights. Knowledgeable in database management.",
    skills: [
      "Python",
      "BeautifulSoup",
      "Octoparse",
      "Tableau",
      "Web Scraping",
      "Database Management",
    ],
  },
  {
    title: "Web Application Developer",
    company: "RPG (Reliance Power Group)",
    link: false,
    employment_type: "Full-time",
    start_date: "Jun 2021",
    end_date: "Aug 2021",
    location: "Kabul, Afghanistan",
    description:
      "As a full-stack developer, I played a key role in developing an RPG Management Information System (MIS). I was responsible for designing the database and defining the system architecture. Additionally, I provided support to the front-end developer to ensure a seamless implementation of the project.",
    skills: [
      "Git",
      "Flask",
      "Bootstrap",
      "CSS",
      "SASS",
      "AJAX",
      "JSON",
      "GitHub",
      "VS Code",
      "Python",
      "HTML",
      "JavaScript",
      "MySQL",
      "SQL",
      "jQuery",
    ],
  },
  {
    title: "Web Application Developer",
    company: "Kateb University",
    link: false,
    employment_type: "Full-time",
    start_date: "Sep 2018",
    end_date: "Nov 2019",
    location: "Kabul, Kabul Province, Afghanistan",
    description:
      "Full-stack developer with a proven track record of leading a team of four developers. Proficient in both back-end and front-end, with a strong focus on database and system design. Skilled coordinator with a successful history of delivering products on time and to a high standard.",
    skills: [
      "PHP",
      "Git",
      "Bootstrap",
      "CSS",
      "AJAX",
      "JSON",
      "GitHub",
      "VS Code",
      "Laravel",
      "HTML",
      "php",
      "JavaScript",
      "MySQL",
      "SQL",
      "jQuery",
    ],
  },
  // {
  //     "title": "Researcher",
  //     "company": "Kateb University, Kateb Research Center",
  //     "link": false,
  //     "employment_type": "Full-time",
  //     "start_date": "Sep 2018",
  //     "end_date": "Sep 2019",
  //     "location": "Kabul, Afghanistan",
  //     "description": false,
  //     "skills": [
  //         "PHP",
  //         "Git",
  //         "Bootstrap",
  //         "CSS",
  //         "JSON",
  //         "Laravel",
  //         "HTML",
  //         "php",
  //         "JavaScript",
  //         "MySQL",
  //         "SQL",
  //         "jQuery"
  //     ]
  // },
  {
    title: "Web Developer",
    company: "Kateb University",
    link: false,
    employment_type: "Full-time",
    start_date: "Jun 2016",
    end_date: "Aug 2017",
    location: "Kabul, Afghanistan",
    description:
      "Web developer with duties in website testing, development planning, and leading teams. Adept at converting mock-ups into functional web apps, overseeing technical issues and troubleshooting, maintaining and deploying applications to production, designing and implementing databases, and testing and debugging code.",
    skills: [
      "PHP",
      "Git",
      "Bootstrap",
      "CSS",
      "AJAX",
      "JSON",
      "GitHub",
      "Laravel",
      "HTML",
      "php",
      "JavaScript",
      "MySQL",
      "SQL",
      "jQuery",
    ],
  },
  {
    title: "IT Technician",
    company: "Friends Internet Networking and Net Club",
    link: false,
    employment_type: "Full-time",
    start_date: "Jan 2010",
    end_date: "Jan 2012",
    location: "Quetta, Baluchistan, Pakistan",
    description:
      "Experienced network technician with a strong background in establishing, repairing, and optimizing networks. Skilled in setting up hardware and software configurations, investigating and correcting problems with peripheral devices, collaborating with vendors to resolve issues, installing and managing software, and assisting users with technology equipment.",
    skills: [
      "Network Switches",
      "Technical Support",
      "Subnetting",
      "Cabling",
      "Troubleshooting",
      "Wireless Technologies",
      "Network Administration",
    ],
  },
];

export const projects = [
  {
    title: "Hesab Ketab",
    date: "Sep 2020 - Present",
    description:
      'The "Hesab Ketab" app simplifies monthly electricity and water bill calculation between neighbors and helps keep track of bills in Afghanistan. Utilized Google Flutter Framework as the mobile technology, PHP Laravel as the backend, RestAPI as the medium between client and server, and MySQL for data storage.',
    image: "/hesab-ketab.jpg",
    technologies: ["Flutter", "PHP Laravel", "RestAPI", "MySQL"],
    playstore_link:
      "https://play.google.com/store/apps/details?id=com.imor.hesab_ketab",
    github_link: "",
    website_link: "",
  },
  {
    title: "PARAS - REFUGEES GUIDE",
    date: "Sep 2021 - Sep 2021",
    description:
      "The PARAS - REFUGEES GUIDE app is designed to aid refugees in finding the humanitarian services available to them in their host country. Developed using the Flutter Framework, this app has been localized in five languages, including English, Burmese, Bhutanese, Persian, and Pashto, for easy access and understanding by a wider audience.",
    image: "/paras-refugees-guide.jpg",
    technologies: ["Flutter"],
    playstore_link:
      "https://play.google.com/store/apps/details?id=com.thepanialliance.app_paras",
    github_link: "",
    website_link: "",
  },
  {
    title: "Hair and beauty salon MIS and website",
    date: "Sep 2020 - Oct 2020",
    description:
      "The goal of this project was to create an automated solution for beauty and haircut salons, to improve their management processes, and to promote their products. The result was a software solution that streamlined day-to-day operations and provided an effective platform for advertising.",
    image: "/hair-and-beauty-salon.jpg",
    technologies: ["PHP Laravel", "MySQL", "HTML5", "Bootstrap 4", "AJAX"],
    playstore_link: null,
    github_link: "",
    website_link: "",
  },
  {
    title: "Corona virus Afghanistan",
    date: "Jan 2020 - Mar 2020",
    description:
      "This Project is built to keep track of every corona incident in Afghanistan, and has some predictions ability to predict the covid19 overall in Afghanistan.",
    image: "/corona-virus-afghanistan.jpg",
    technologies: ["Python Flask", "HTML5", "Bootstrap 4"],
    playstore_link: null,
    github_link: "",
    website_link: "",
  },
  {
    title: "Silk Hotel Website and booking",
    date: "Sep 2015 - Dec 2015",
    description:
      "This is a website for a hotel and it has a room and car booking system.",
    image: "/silk-hotel.jpg",
    technologies: [],
    playstore_link: null,
    github_link: "",
    website_link: "",
  },
];
