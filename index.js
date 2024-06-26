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
      title: "Full Stack Development",
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
        "Developing conversational agent with AI using Unity & Inworld.",
        "Engineering Obstetric Emergency Simulation: Improve Obstetrics Using Immersive XR Technologies, provide first responders with realistic and dynamic training simulations.", 
        "Experience with version control to collaborate and track programs with the team.",
        "XR, AR, & VR product testing.",
      ],
    },
    {
      title: "What's next?",
      company_name: "Microsoft & CyborgMobile New Tech Intern",
      icon: ktp,
      iconBg: "#212e52",
      date: "Present",
      points: [
        "I'll be interning this summer as a new technologist for Microsoft and Cyborg Mobile in Seattle working as a Software Engineer.",
        "From bringing forth women's empowerment in KTP, I have had the amazing opportunity to change roles as a director of technical operations, managing the website & communication channels.",
        "I enjoy reading and creative designing, trying to bring forth the benefits with my physical art (hyperlink to portfolio in progress).",
        "Participating in coding challenges and seeing where the tech journey takes me.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I paint, draw, and create otehr forms of art.",
      name: "a",
      designation: "aa",
      company: "aa",
      //image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Web developer",
      name: "a",
      designation: "a",
      company: "a",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Foil-painting-landscape&psig=AOvVaw2uk07nkE93xx2FTrIeJOb1&ust=1710788152163000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCrvtL8-4QDFQAAAAAdAAAAABAE",
    },
    {
      testimonial:
        "",
      name: "a",
      designation: "a",
      company: "a",
      //image: "https://randomuser.me/api/portraits/women/6.jpg",
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
  