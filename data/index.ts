export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const skills = [
  {
    title: "TypeScript",
    type: "language",
  },
  {
    title: "JavaScript",
    type: "language",
  },
  {
    title: "HTML",
    type: "language",
  },
  {
    title: "CSS",
    type: "language",
  },
  {
    title: "React",
    type: "framework",
  },
  {
    title: "Shadcn",
    type: "framework",
  },
  {
    title: "NextJS",
    type: "framework",
  },
  {
    title: "Express",
    type: "framework",
  },
  {
    title: "Node.js",
    type: "framework",
  },
  {
    title: "Tailwind",
    type: "framework",
  },
  {
    title: "AWS S3",
    type: "tools",
  },
  {
    title: "AWS EC2",
    type: "tools",
  },
  {
    title: "AWS RDS",
    type: "tools",
  },
  {
    title: "Appwrite",
    type: "tools",
  },
  {
    title: "Cloudinary",
    type: "tools",
  },
  {
    title: "MongoDB",
    type: "database",
  },
  {
    title: "MySQL",
    type: "database",
  },
  {
    title: "Prisma",
    type: "database",
  },
  {
    title: "BootStrap",
    type: "library",
  },
  {
    title: "Framer-Motion",
    type: "library",
  },
  {
    title: "Material-UI",
    type: "library",
  },
  {
    title: "Radix-UI",
    type: "library",
  },
  {
    title: "Git",
    type: "other",
  },
  {
    title: "GitHub",
    type: "other",
  },
  {
    title: "twilio",
    type: "other",
  },
  {
    title: "Linux",
    type: "other",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full top-0",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Currently learning Data Structures and Algorithms",
    description: "The Inside Scoop",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b5.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Food Ordering App",
    des: "Built a dynamic food ordering application with Next.js, MongoDB, Tailwind CSS, Amazon S3, and Google Authentication. Features include user authentication, menu browsing, cart management, and order processing. Demonstrated proficiency in full-stack development, RESTful API integration, and deployment.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714972797/projects/food-app_fydlxj.png",
    iconLists: ["/react.svg", "/tail.svg", "/ts.svg"],
    link: "https://food-app-sable.vercel.app/",
  },
  {
    id: 2,
    title: "Stox - Inventory Management App",
    des: "Engineered an inventory management webapp using TypeScript, Node.js, PostgreSQL, AWS, and Recharts, with dashboards for inventory, users, and product tracking, showcasing expertise in full-stack development, cloud deployment, and data visualization.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1726136494/Stox_uz09js.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://main.d3qd0kbkm6xmo5.amplifyapp.com/",
  },
  {
    id: 3,
    title: "Airbnb clone",
    des: "Engineered a feature-rich Airbnb clone, leveraging HTML, CSS, JavaScript, MongoDB, Node.js, and Express with MVC architecture, showcasing adeptness in full-stack development, database integration, and system design.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714991378/projects/airlust_new_p2idmx.png",
    iconLists: ["/react.svg", "/tail.svg", "/ts.svg"],
    link: "https://airlust-project.onrender.com/listings",
  },
  {
    id: 4,
    title: "Car Showcase Website",
    des: "Engineered a car showcase website using Next.js, TypeScript, Tailwind CSS, and car APIs, featuring dynamic car listings and responsive design, demonstrating expertise in full-stack development, API integration, and modern UI/UX design.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1719927625/projects/car-deals.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://car-deals-ruddy.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Development",
    desc: "Proficient in developing web applications using modern frameworks and languages such as Next.js, React.js, TypeScript, Node.js, and Express.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Back-End Development",
    desc: "Skilled in building robust server-side architectures with Node.js, Express.js, and implementing RESTful APIs for seamless client-server communications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Database Management",
    desc: "Experience in handling both NoSQL (MongoDB) and SQL (PostgreSQL) databases, utilizing tools like Prisma for efficient data modeling and management.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Cloud & Deployment",
    desc: "Expertise in deploying applications on AWS (EC2, S3, RDS, API Gateway), integrating cloud services like Amazon S3 for storage, and using Appwrite for back-end management.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
