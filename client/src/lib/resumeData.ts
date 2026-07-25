export const resumeData = {
  personal: {
    name: "Rujiwat",
    surname: "Pithaksiripan",
    title: "Software Engineer",
    email: "rujiwatpt@gmail.com",
    phone: "089-527-4355",
    location: "Bangkok, Thailand",
    github: "https://github.com/rujiwatpt",
    linkedin: "https://www.linkedin.com/in/rujiwatpt",
    profile:
      "Software engineer with a backend and e-commerce/integrations background, now building across the stack with applied AI/LLM, data science, and IoT projects.",
  },

  skills: {
    backend: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "GraphQL",
      "REST APIs",
      "Serverless framework",
      "Python",
    ],
    database: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Prisma",
      "SQLite",
    ],
    frontend: [
      "React.js",
      "Next.js",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
    ],
    aiAndData: [
      "LLM integration",
      "OpenAI API",
      "pandas / NumPy",
      "scikit-learn",
      "CatBoost",
      "OpenCV",
    ],
    iot: [
      "Arduino (UNO Q / Nano 33)",
      "Web Serial",
      "BLE",
      "Signal processing (FFT)",
      "NeuroSky EEG",
    ],
    tools: [
      "Git/GitHub",
      "Docker",
      "AWS",
      "Jest",
      "Playwright",
      "Jira / Linear",
    ],
  },

  experience: [
    {
      title: "Software engineer",
      company: "Hubql",
      duration: "May 2025 - Present",
      responsibilities: [
        "Building backend services for an AI-assisted campaign management platform (Node.js, TypeScript, serverless).",
        "Integrating large language models (LLMs) into automated lead-engagement workflows.",
        "Built the front-end 3D model viewer for a 3D/BIM collaboration platform using React and Three.js (react-three-fiber / drei).",
      ],
    },
    {
      title: "Senior associate software engineer",
      company: "Pomelo Fashion",
      duration: "November 2023 - April 2025",
      responsibilities: [
        "Developed product review and style gallery features to improve customer engagement.",
        "Integrated a third-party shipping management system to streamline logistics operations",
        "Implemented QR payment by integrating a payment gateway, enhancing user experience and checkout efficiency",
      ],
    },
    {
      title: "Software engineer",
      company: "Brikl",
      duration: "February 2022 - September 2023",
      responsibilities: [
        "Built integrations for US and Canadian tax calculations.",
        "Designed and maintained integrations between the Brikl e-commerce platform and third-party systems",
        "Develop and maintain graphQL endpoints to integrated with dashboard and storefront",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Tonic",
      duration: "August 2021 - November 2021",
      responsibilities: [
        "Develop dashboard, subscription and payment page for web application",
        "Develop RESTful API for web application",
      ],
    },
  ],

  projects: [
    {
      name: "EEG + Posture Wellness Dashboard",
      type: "Team Hackathon",
      description:
        "Real-time wellness dashboard on a NeuroSky TGAM EEG sensor and an Arduino UNO Q. A Web Serial bridge streams raw EEG to a Python backend that runs FFT band analysis, blink detection, and KNN posture classification, with SQLite persistence and a 20-20-20 eye-rest timer.",
      stack: ["Python", "Web Serial", "Arduino UNO Q", "BLE", "NumPy / FFT", "SQLite"],
    },
    {
      name: "Time-Series Demand Forecasting",
      type: "Team Hackathon",
      description:
        "Multi-step sales/demand forecasting pipeline using gradient-boosted trees with recursive and 2-step strategies, feature engineering, and backtesting.",
      stack: ["Python", "CatBoost", "pandas", "scikit-learn", "statsmodels"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science",
      field: "Information and Communication Technology",
      major: "Computer Science",
      school: "Sukhothai Thammathirat Open University",
      duration: "2018 - 2021",
    },
    {
      degree: "Doctor of Veterinary Medicine",
      field: "",
      major: "",
      school: "Chulalongkorn University",
      duration: "2009 - 2015",
    },
  ],

  learning: [
    {
      title: "The Complete 2021 Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      platform: "Udemy",
    },
  ],

  additionalExperience: [
    {
      title: "Freelance Tester",
      company: "Testlio",
      duration: "July 2021 - February 2022",
      description: "Manual testing web and mobile applications",
    },
    {
      title: "Grab Partner",
      company: "Grab",
      duration: "2018 - 2019",
      description: "",
    },
    {
      title: "Veterinarian",
      company: "Department of livestock development",
      duration: "2016 - 2018",
      description: "",
    },
  ],
};
