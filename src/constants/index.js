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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    hackathonworking,
    geodash,
    microsoft,
    codeninjas,
    ktp,
    manatee,
    csharp,
    xr
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
      title: "Creative Designer",
      icon: web,
    },
    {
      title: "Web Development",
      icon: mobile,
    },
    {
      title: "Game Development",
      icon: backend,
    },
    {
      title: "Critical Thinker",
      icon: backend,
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
      name: "C#",
      icon: csharp,
    },
    {
      name: "React JS",
      icon: reactjs,
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
    
  ];
  
  const experiences = [
    {
      title: "Coding Instructor",
      company_name: "Code Ninjas",
      icon: codeninjas,
      iconBg: "#fafbfc",
      date: "March 2023 - August 2023",
      points: [
        "Developing web applications using HTML/Css and other related technologies.",
        "Collaborating with other programmers to develop games.",
        "Implementing strategies to collaborate with students and bestow fundamentals of game development.",
        "Teaching languages such as Javascript, Lua, C#, Python.",
      ],
    },
    {
      title: "CS Teaching Assistant",
      company_name: "Microsoft TEALS",
      icon: microsoft,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Present",
      points: [
        "Connecting with students to break down fundamentals of AP Computer Science A in Java.",
        "Mentoring students and preparing them for careers in technology.",
        "Providing constructive feedback to students and brainstorming ideas for improvement.",
      ],
    },
    {
      title: "Data Science Research Assistant",
      company_name: "Miami Affect Neuroscience And Translational Experimental Enterprise (MANATEE) Lab",
      icon: manatee,
      iconBg: "#fafbfc",
      date: "Dec 2023 - Present",
      points: [
        "Visualizing & analyzing large data sets in R Programming.",
        "Implemented Google Cloud APIs in research process for the lab using Javascript.",
        "Problem solving, logically and creatively thinking with the research team.",
      ],
    },
    {
      title: "XR Junior Developer",
      company_name: "Institute of Data Science & Computing",
      icon: xr,
      iconBg: "#FFFFFF",
      date: "Present",
      points: [
        "Engineering conversational agent with AI using Unity & Inworld.",
        "Experience with version control to collaborate and track programs with the team.",
        "XR, AR, & VR product testing.",
      ],
    },
    {
      title: "What's next?",
      company_name: " ",
      icon: ktp,
      iconBg: "#212e52",
      date: "Present",
      points: [
        "Along with bringing forth women's empowerment in KTP, I enjoy reading and creative designing.",
        "Dabbling into blender, and trying to bring forth the benefits with my physical art (hyperlink to portfolio in progress).",
        "Participating in coding challenges and seeing where the tech journey takes me.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ETHMiami 'Finza'",
      description:
        "Hackathon protoyped extension of Propy (Crypto Based Real Estate), built with Solidity + Web3 tools to access mortgage loans through blockchain with crvotocurrencv."
        ,
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Figma",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/danyagomezcantu/Finza",
    },
    {
      name: "PolyRun",
      description:
        "Unity developed game in C#, geometry dash using 2D development.",
      tags: [
        {
          name: "Csharp",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Unity",
          color: "pink-text-gradient",
        },
      ],
      image: geodash,
      source_code_link: "https://github.com/pkr20/polyrun",
    },
    {
      name: "3D TicTacToe",
      description:
        "3D tictactoe in Unity"
        ,
      tags: [
        {
          name: "Csharp",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "Unity",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/pkr20/updatedtictactoe",
    },
    {
      name: "3DObby",
      description:
        "3D Obby in Unity, scripts with C#"
        ,
      tags: [
        {
          name: "Csharp",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/pkr20/3DObby",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  