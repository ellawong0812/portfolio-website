import React, { useState } from "react";
import "./Projects.css";
//import cake1 from '../Assets/cake1.png';
import cake2 from "../Assets/cake2.png";
import USElection from "../Assets/USElection.png";
import tictactoe from "../Assets/tictactoe.png";
import extractFileInfo from "../Assets/extractFileInfo.png";
import ToDoList from "../Assets/ToDoList.png";
import ShootingGame from "../Assets/ShootingGame.png";
import onlineShop from "../Assets/onlineShop.png";

const projects = [
  {
    title: "Web Application for Visualizing 2022 U.S. House Election Results",
    programmingLanguage: ["Python"],
    library: ["BeautifulSoup, Selenium, Dash, Pandas, Plotly"],
    description:
      "Using BeautifulSoup and Selenium to do Web Scraping and Web Automation for extracting the US 2022 Election results. Also, using Dash, a Python framework for building analytical web applications, visualizing the results with various components",
    image: USElection,
    githubUrl: "https://github.com/wongella123/USElectionAnalysis",
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
    githubUrl: "https://github.com/wongella123/extract-file-YingKe-",
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
    githubUrl: "https://github.com/wongella123/TicTacToe",
    liveDemoUrl:
      "https://drive.google.com/file/d/1Mz1t8VgI3WOHjjAzG9ngpeMhCxjfewE-/view?usp=sharing",
  },

  {
    title: "Rilakkuma Mobile App",
    programmingLanguage: ["JavaScript"],
    library: ["React Native"],
    description:
      "The Rilakkuma Mobile App is a React Native application designed for people to explore and learn more about my favorite characters. This mobile app offers various features, including comment sections, Q&A, and some descriptions about Rilakkuma.",
    image: cake2,
    githubUrl: "https://github.com/wongella123/rilakkuma",
    liveDemoUrl:
      "https://drive.google.com/file/d/1l909aD7O7azjLFazdNlzJVqUAKrGV9gG/view?usp=sharing",
  },
  {
    title: "To Do List",
    programmingLanguage: ["JavaScript"],
    library: ["React"],
    description:
      "Developed a user-friendly To-Do List application enabling seamless input of tasks and activities.",
    image: ToDoList,
    githubUrl: "https://github.com/wongella123/ToDoList",
    liveDemoUrl:
      "https://drive.google.com/file/d/1BNWBqO1unlC3wQeYoagF0CRLwLgvasrK/view?usp=sharing",
  },
  {
    title: "Shooting Game",
    programmingLanguage: ["Java"],
    library: [],
    description:
      "The game features three challenging levels, with the highest difficulty level presenting moving spaceships that posed a significant challenge for players to successfully attack. Implemented a feature to store the game records in a text file after each session, allowing players to track their progress and review their cumulative records.",
    image: ShootingGame,
    githubUrl: "https://github.com/wongella123/ShootingGame",
    liveDemoUrl:
      "https://drive.google.com/file/d/1vspQqG54rbaOEdOeaq1amv7gFOYsSgxn/view?usp=sharing",
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

  return (
    <div className="projects-container">
      <h1>Projects❤️️</h1>
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
              className="project-image"
            />
            <div className="project-details">
              <h2>{project.title}</h2>
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
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo Video
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
