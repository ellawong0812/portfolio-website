import React, { useState } from "react";
import "./Projects.css";
import mobile from "../Assets/mobile.png";
import USElection from "../Assets/USElection.png";
import tictactoe from "../Assets/tictactoe.png";
import extractFileInfo from "../Assets/extractFileInfo.png";
import ToDoList from "../Assets/ToDoList.png";
import ShootingGame from "../Assets/ShootingGame.png";
import onlineShop from "../Assets/onlineShop.png";
import TypingGame from "../Assets/TypingGame.png";
import AYI from "../Assets/AYI.png";
import volunteerTogether from "../Assets/volunteertogether.png";
import SearchEngine from "../Assets/COMP search engine.png";
import ML from "../Assets/ML.png";
import FinTech from "../Assets/FinTech.png";
import mood from "../Assets/mood.png";
import eat from "../Assets/smartEat.png";

const projects = [
  {
    title: "Customer Churn Prediction",
    programmingLanguage: ["Python"],
    library: [""],
    description:
      "Predict customer churn using machine learning to help businesses identify at-risk customers and improve retention strategies. We approach it as a binary classification problem using models like logistic regression and decision trees on a bank customer dataset. ",
    image: ML,
    githubUrl: "https://github.com/ellawong0812/BusinessAnalysis",
    liveDemoUrl: null,
  },
  {
    title: "Stock Prediction Analysis",
    programmingLanguage: ["Python"],
    library: [
      "Numpy, Pandas, Scikit-learn, Requests-html, Pytorch, Transformers, yfinance, Matplotlib, Tensorflow, Keras",
    ],
    description:
      "The model leverages news sentiment analysis and historical stock data to predict S&P 500 stock prices. ",
    image: FinTech,
    githubUrl: "https://github.com/ellawong0812/SearchEngine",
    liveDemoUrl: "https://youtu.be/9pis_ANCQcI?si=Gx_j9n28ebapCMuR",
  },
  {
    title: "Search Engine",
    programmingLanguage: ["Java, HTML, CSS"],
    library: [""],
    description:
      "This project is a web search engine developed using Java. It includes a web interface hosted on an Apache Tomcat server.",
    image: SearchEngine,
    githubUrl: "https://github.com/ellawong0812/SearchEngine",
    liveDemoUrl: "https://youtu.be/7kT7Tma2G3Q",
  },
  {
    title: "Typing Game",
    programmingLanguage: ["JavaScript, HTML, CSS"],
    library: [""],
    description:
      "Developed a dynamic typing game using HTML, CSS, and JavaScript, featuring customizable modes, real-time scoring, and a competitive leaderboard.",
    image: TypingGame,
    githubUrl: "https://github.com/ellawong0812/TypingGame",
    liveDemoUrl:
      "https://drive.google.com/file/d/1uAWe1DCmjO_tmi8tAoooQ7Gz5zrBLnV5/view?usp=sharing",
  },
  {
    title: "Web Application for Visualizing 2022 U.S. House Election Results",
    programmingLanguage: ["Python"],
    library: ["BeautifulSoup, Selenium, Dash, Pandas, Plotly"],
    description:
      "Using BeautifulSoup and Selenium to do Web Scraping and Web Automation for extracting the US 2022 Election results. Also, using Dash, a Python framework for building analytical web applications, visualizing the results with various components",
    image: USElection,
    githubUrl: "https://github.com/ellawong0812/USElectionAnalysis",
    liveDemoUrl:
      "https://drive.google.com/file/d/14DFR8s5RwZhT8uGqf4SktMRzzp-TCtH9/view?usp=sharing",
  },
  {
    title: "File Information Extractor",
    programmingLanguage: ["JavaScript"],
    library: [],
    description:
      "It allows users to extract file names and dates from a selected folder efficiently. The application provides an option to download the extracted data as a CSV file for further analysis.",
    image: extractFileInfo,
    githubUrl: "https://github.com/ellawong0812/extract-file-YingKe-",
    liveDemoUrl:
      "https://drive.google.com/file/d/1He0ft1xyij3XCFHPuKnKb6AZduC0JcS6/view?usp=sharing",
  },
  {
    title: "Kuma E-commerce Store",
    programmingLanguage: ["JavaScript"],
    library: ["React, React Bootstrap"],
    description:
      "A dynamic online retail platform that built using React.js, offering customers a seamless shopping experience to purchase a wide range of products.  Implemented a streamlined and intuitive user interface, enabling customers to easily browse through the product catalog, search for items, and make purchases.",
    image: onlineShop,
    githubUrl: "https://github.com/ellawong0812/online-shop",
    liveDemoUrl:
      "https://drive.google.com/file/d/1VuyFyfWW0kN9bOShs89MFvlMVzTSR0ms/view?usp=sharing",
  },
  {
    title: "AI vs Humans: Tic Tac Toe Showdown",
    programmingLanguage: ["JavaScript"],
    library: ["React"],
    description:
      "The interface includes a grid-based layout to represent the Tic Tac Toe board and interactive buttons for player moves. Developed an AI opponent using the minimax algorithm, providing an engaging and challenging gameplay experience.",
    image: tictactoe,
    githubUrl: "https://github.com/ellawong0812/TicTacToe",
    liveDemoUrl:
      "https://drive.google.com/file/d/1Mz1t8VgI3WOHjjAzG9ngpeMhCxjfewE-/view?usp=sharing",
  },

  {
    title: "Rilakkuma Mobile App",
    programmingLanguage: ["JavaScript"],
    library: ["React Native"],
    description:
      "The Rilakkuma Mobile App is a React Native application designed for people to explore and learn more about my favorite characters. This mobile app offers various features, including comment sections, Q&A, and some descriptions about Rilakkuma.",
    image: mobile,
    githubUrl: "https://github.com/ellawong0812/rilakkuma",
    liveDemoUrl:
      "https://drive.google.com/file/d/18IyYbtcoYCMi11l5gHYeobnKcWQ4qdSs/view?usp=sharing",
  },
  {
    title: "To Do List",
    programmingLanguage: ["JavaScript"],
    library: ["React"],
    description:
      "Developed a user-friendly To-Do List application enabling seamless input of tasks and activities.",
    image: ToDoList,
    githubUrl: "https://github.com/ellawong0812/ToDoList",
    liveDemoUrl:
      "https://drive.google.com/file/d/1BNWBqO1unlC3wQeYoagF0CRLwLgvasrK/view?usp=sharing",
  },
  {
    title: "Ace Your Interview",
    programmingLanguage: ["JavaScript"],
    library: ["React"],
    description:
      "Using React to build a website such that user to get expert guidance and support to boost their career.",
    image: AYI,
    githubUrl: "https://github.com/ellawong0812/AceYourInterview",
    liveDemoUrl:
      "https://drive.google.com/file/d/1unGK3DvZLxiJq3pzuTE3hM1E9a3avWpL/view?usp=sharing",
  },
  {
    title: "Shooting Game",
    programmingLanguage: ["Java"],
    library: [],
    description:
      "The game features three challenging levels, with the highest difficulty level presenting moving spaceships that posed a significant challenge for players to successfully attack. Implemented a feature to store the game records in a text file after each session, allowing players to track their progress and review their cumulative records.",
    image: ShootingGame,
    githubUrl: "https://github.com/ellawong0812/ShootingGame",
    liveDemoUrl:
      "https://drive.google.com/file/d/1vspQqG54rbaOEdOeaq1amv7gFOYsSgxn/view?usp=sharing",
  },
  {
    title: "Volunteer Together",
    programmingLanguage: ["Python"],
    library: [],
    description:
      "Volunteer-Together is a platform designed to connect teenagers with volunteer opportunities, requiring registration for access where they can easily browse, search, bookmark, and enroll in activities with clearly defined restrictions and track their enrollment history. Managers oversee the system by maintaining activity details, monitoring operations via an informative dashboard with analytics, and reviewing member feedback, while administrators manage roll calls, handle activity cancellations, and update member participation statuses.",
    image: volunteerTogether,
    githubUrl: "https://github.com/ellawong0812/Volunteer-Together",
    liveDemoUrl: null,
  },
  {
    title: "Smart Eat System",
    programmingLanguage: ["JavaScript, SQLite"],
    library: ["Node.js, Express.js"],
    description:
      "The Smart Eat System is a nutrition management application designed to help users track their daily nutritional intake while providing administrative tools for generating reports and managing food data. This system empowers individuals to monitor their dietary habits and allows administrators to oversee and analyze user data effectively.",
    image: eat,
    githubUrl: "https://github.com/ellawong0812/SmartEatSystem",
    liveDemoUrl: null,
  },
  {
    title: "Mood Recipe Web",
    programmingLanguage: ["JavaScript, SQLite"],
    library: ["Node.js, Express.js"],
    description:
      "A simple web application that allows users to generate and download recipes based on their mood. Admins can add, edit, and manage recipes. The app provides role-based access control (User/Admin) for different functionalities.",
    image: mood,
    githubUrl: "https://github.com/ellawong0812/MoodRecipeWeb",
    liveDemoUrl: "https://youtu.be/l3feiETRWvg",
  },
];

const Projects = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);

    if (language === "") {
      // If no language is selected, show all projects
      setFilteredProjects(projects);
    } else {
      // Filter projects based on the selected language
      const filtered = projects.filter((project) =>
        project.programmingLanguage.includes(language)
      );
      setFilteredProjects(filtered);
    }
  };

  const handleImageHover = (index) => {
    const updatedProjects = [...filteredProjects];
    updatedProjects[index].isHovered = !updatedProjects[index].isHovered;
    setFilteredProjects(updatedProjects);
  };

  return (
    <div className="projects-container">
      <br />
      <br />
      <h1 style={{ color: "#1a73e8" }}>Projects❤️️</h1>
      <div className="language-dropdown">
        <label htmlFor="language-select">Select a Programming Language:</label>
        <select
          id="language-select"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="">All</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              // className="project-image"
              className={`project-image ${project.isHovered ? "expanded" : ""}`}
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={() => handleImageHover(index)}
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <div className="programming-language">
                {project.programmingLanguage}
              </div>

              <div>
                <span key={index} className="library-box">
                  {project.library}
                </span>
              </div>

              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
                <br />
                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo Video
                  </a>
                ) : (
                  <span className="text-muted">Demo Not Available</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
