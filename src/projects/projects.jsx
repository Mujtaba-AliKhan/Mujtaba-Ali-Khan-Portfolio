import { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [detailsVisible, setDetailsVisible] = useState({
    wikipurrdia: false,
    weatherApp: false,
    todoList: false,
    foodMunchApp: false,
    resumeBuilder: false,
  });

  const toggleDetails = (project) => {
    setDetailsVisible((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  return (
    <div className="projectsContainer">
      <h1 className="projectHeading">Projects</h1>

      <div className="wikipurrdiaContainer projectItem">
        <div className="projectItemDetails">
          <div className="projectImage">
            <a
              href="https://github.com/Mujtaba-AliKhan/Wikipurrdia"
              className="githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Projects Images/wikipurrdiaImage.png" alt="" />
            </a>
          </div>
          <div className="projectDescription">
            <h1>Wikipurrdia</h1>
            <div className="technologies">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Bootstrap</p>
              <p>Carousel</p>
            </div>
            <h3>Overview :</h3>
            <p>
              Wikipurrdia is a dynamic React application designed to demonstrate
              the capabilities of modern web tools. It features smooth
              navigation, interactive elements, and a user-friendly interface,
              making the browsing experience enjoyable and engaging.
            </p>

            <div
              className={`projectSeeMoreDetails ${
                detailsVisible.wikipurrdia ? "show" : "hide"
              }`}
            >
              <h3>Key Features :</h3>
              <ul>
                <li>Intuitive and responsive design</li>
                <li>Seamless navigation using React Router DOM</li>
                <li>Interactive components with smart use of React hooks</li>
                <li>Creative and fun carousel as the highlight of the page</li>
                <li>Feedback form for user interaction with captcha</li>
                <li>Custom logos and branding for a unique look</li>
              </ul>
              <h3>Technologies Used :</h3>
              <ul>
                <li>React for interactive layout</li>
                <li>React Router DOM for smooth navigation</li>
                <li>HTML5 and CSS for styling</li>
                <li>Javascript for fun creativity</li>
              </ul>
              <h3>Challenges and Solutions :</h3>
              <p>
                During the development of Wikipurrdia, I encountered several
                challenges, including ensuring smooth navigation and state
                management across different components, as well as implementing
                a functional carousel that worked seamlessly across various
                devices and browsers. To address these challenges, I utilized
                React Router DOM and custom hooks for effective state
                management, ensuring a seamless user experience. Additionally, I
                integrated the Swiper library for the carousel, configuring it
                to handle different screen sizes and hover interactions while
                optimizing image loading for improved performance.
              </p>
            </div>
            <p
              className="projectSeeMore"
              onClick={() => toggleDetails("wikipurrdia")}
            >
              {detailsVisible.wikipurrdia ? "See Less" : "See More"}
            </p>
            <a
              href="https://github.com/Mujtaba-AliKhan/Wikipurrdia"
              className="githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="weatherAppContainer projectItem">
        <div className="projectItemDetails">
          <div className="projectImage">
            <a
              href="https://github.com/Mujtaba-AliKhan/Wikipurrdia"
              className="githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Projects Images/weather app.png" alt="" />
            </a>
          </div>
          <div className="projectDescription">
            <h1>Weather App using Flask</h1>
            <div className="technologies">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Flask</p>
              <p>WeatherAPI</p>
            </div>
            <h3>Overview :</h3>
            <p>
              The Weather App is a web application designed to provide real-time
              weather information for any city worldwide. By utilizing the
              OpenWeather API, the app fetches current weather data and displays
              it in a user-friendly interface. The application is built with
              Flask for the backend, and HTML, CSS, and JavaScript for the
              frontend.
            </p>

            <div
              className={`projectSeeMoreDetails ${
                detailsVisible.weatherApp ? "show" : "hide"
              }`}
            >
              <h3>Key Features :</h3>
              <ul>
                <li>
                  Search functionality to find weather information for any city
                </li>
                <li>
                  Toggle between metric (Celsius) and imperial (Fahrenheit)
                  units
                </li>
                <li>
                  Real-time weather updates including temperature, humidity,
                  wind speed, and weather conditions
                </li>
                <li>
                  Clean and responsive design for optimal user experience on
                  both desktop and mobile devices
                </li>
                <li>The login/logout and signup feature</li>
              </ul>
              <h3>Technologies Used :</h3>
              <ul>
                <li>Flask for the backend</li>
                <li>HTML, CSS, and JavaScript for the frontend</li>
                <li>OpenWeather API for fetching weather data</li>
                <li>Responsive design techniques for mobile compatibility</li>
              </ul>
              <h3>Challenges and Solutions :</h3>
              <p>
                One challenge was ensuring the seamless integration of the
                OpenWeather API while maintaining a responsive and intuitive
                user interface. To address this, I focused on optimizing the API
                calls and handling different units of measurement efficiently.
                The toggle feature for switching between Celsius and Fahrenheit
                required careful handling of state changes and updating the
                display dynamically.
              </p>
            </div>
            <p
              className="projectSeeMore"
              onClick={() => toggleDetails("weatherApp")}
            >
              {detailsVisible.weatherApp ? "See Less" : "See More"}
            </p>
            <a
              href="https://github.com/Mujtaba-AliKhan/Weather-App-using-Flask"
              className="githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="resumeBuilderContainer projectItem">
        <div className="projectItemDetails">
          <div className="projectImage">
            <a
              href="https://github.com/Mujtaba-AliKhan/Resume-Builder-flask"
              className="githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Projects Images/resumeBuilder.png" alt="" />
            </a>
          </div>
          <div className="projectDescription">
            <h1>Resume Builder Using Flask</h1>
            <div className="technologies">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Flask</p>
            </div>
            <h3>Overview :</h3>
            <p>
              The Resume Builder App is a dynamic web application designed to
              help users create professional resumes easily. It includes
              features for user authentication, form-based resume creation,
              real-time preview, and PDF export. Built with Flask for the
              backend, HTML and CSS for the structure and styling, and
              JavaScript for interactive functionality, this application offers
              a seamless and intuitive experience for users.
            </p>

            <div
              className={`projectSeeMoreDetails ${
                detailsVisible.resumeBuilder ? "show" : "hide"
              }`}
            >
              <h3>Key Features :</h3>
              <ul>
                <li>
                  User Authentication: Login, logout, and signup functionality
                </li>
                <li>
                  Comprehensive Form Fields: Includes fields for basic details
                  (name, email, phone, location), about me, experience,
                  education, and qualities (skills, languages, hobbies)
                </li>
                <li>
                  Real-time Preview: Users can see a preview of their resume as
                  they fill out the form
                </li>
                <li>PDF Export: Option to download the resume as a PDF</li>
                <li>
                  Database Storage: Resumes are stored in a SQL database upon
                  submission
                </li>
              </ul>
              <h3>Technologies Used :</h3>
              <ul>
                <li>Flask for the backend and user authentication</li>
                <li>HTML and CSS for structure and styling</li>
                <li>
                  JavaScript for real-time preview and interactive features
                </li>
                <li>SQL for database storage</li>
              </ul>
              <h3>Challenges and Solutions :</h3>
              <p>
                One of the main challenges was ensuring that the real-time
                preview feature worked seamlessly as users filled out the form.
                This required extensive use of JavaScript to update the preview
                dynamically without refreshing the page. Another challenge was
                implementing the PDF export functionality, which I addressed by
                integrating a suitable library to convert the HTML content into
                a downloadable PDF format.
              </p>
            </div>
            <p
              className="projectSeeMore"
              onClick={() => toggleDetails("resumeBuilder")}
            >
              {detailsVisible.resumeBuilder ? "See Less" : "See More"}
            </p>
            <a
              href="https://github.com/Mujtaba-AliKhan/Resume-Builder-flask"
              className="githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="todoListContainer projectItem">
        <div className="projectItemDetails">
          <div className="projectImage">
            <a
              href="https://github.com/Mujtaba-AliKhan/Todos-App"
              className="githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Projects Images/to-do app.png" alt="" />
            </a>
          </div>
          <div className="projectDescription">
            <h1>To-do List App</h1>
            <div className="technologies">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
            </div>
            <h3>Overview :</h3>
            <p>
              The To-Do List App is a straightforward web application that
              allows users to manage their tasks efficiently. With a clean and
              intuitive interface, users can add, remove, and save their to-do
              items. The application leverages the browser&apos;s localStorage
              to persist the task list, ensuring that tasks are saved even when
              the page is refreshed.
            </p>

            <div
              className={`projectSeeMoreDetails ${
                detailsVisible.todoList ? "show" : "hide"
              }`}
            >
              <h3>Key Features :</h3>
              <ul>
                <li>Add new tasks to the list</li>
                <li>Remove tasks from the list</li>
                <li>
                  Save the current list to localStorage with a single click
                </li>
                <li>
                  Persistent data storage ensures tasks remain available after a
                  page refresh
                </li>
                <li>User-friendly and responsive design</li>
              </ul>
              <h3>Technologies Used :</h3>
              <ul>
                <li>HTML for the structure of the application</li>
                <li>CSS for styling and layout</li>
                <li>
                  JavaScript for functionality and localStorage management
                </li>
              </ul>
              <h3>Challenges and Solutions :</h3>
              <p>
                One of the main challenges was ensuring that the task list
                persisted across page reloads. To solve this, I utilized the
                browser&apos;s localStorage API to save the tasks whenever the
                user clicked the save button. I also implemented functions to
                load the saved tasks when the page is loaded, providing a
                seamless user experience.
              </p>
            </div>
            <p
              className="projectSeeMore"
              onClick={() => toggleDetails("todoList")}
            >
              {detailsVisible.todoList ? "See Less" : "See More"}
            </p>
            <a
              href="https://github.com/Mujtaba-AliKhan/Todos-App"
              className="githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="foodMunchAppContainer projectItem">
        <div className="projectItemDetails">
          <div className="projectImage">
            <a
              href="https://github.com/Mujtaba-AliKhan/Food-Munch-App"
              className="githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Projects Images/foodMunchApp.png" alt="" />
            </a>
          </div>
          <div className="projectDescription">
            <h1>Food Munch App</h1>
            <div className="technologies">
              <p>HTML5</p>
              <p>CSS3</p>
            </div>
            <h3>Overview :</h3>
            <p>
              The Food Munch App is a beautifully designed single-page
              restaurant website that showcases the restaurant's offerings and
              features. The website includes sections such as "Why Choose Us,"
              "Menu," "Delivery," "Payment," and "Follow Us," with smooth
              scrolling navigation to each section. Built entirely with HTML and
              CSS, this project highlights effective use of layout techniques
              such as Flexbox and Grid to create an engaging and user-friendly
              experience.
            </p>

            <div
              className={`projectSeeMoreDetails ${
                detailsVisible.foodMunchApp ? "show" : "hide"
              }`}
            >
              <h3>Key Features :</h3>
              <ul>
                <li>Single-page layout with smooth scrolling navigation</li>
                <li>
                  Informative sections: Why Choose Us, Menu, Delivery, Payment,
                  and Follow Us
                </li>
                <li>
                  Responsive design for optimal viewing on various devices
                </li>
                <li>
                  Clean and modern UI design using Flexbox and Grid for layout
                </li>
              </ul>
              <h3>Technologies Used :</h3>
              <ul>
                <li>HTML for the structure of the application</li>
                <li>CSS for styling and layout, including Flexbox and Grid</li>
              </ul>
              <h3>Challenges and Solutions :</h3>
              <p>
                One challenge was to create a seamless navigation experience
                within a single page. By utilizing CSS for smooth scrolling and
                anchoring techniques, I ensured that users can easily navigate
                to different sections without the need for additional pages.
                Additionally, I employed Flexbox and Grid to manage the layout
                efficiently, making the site both visually appealing and easy to
                maintain.
              </p>
            </div>
            <p
              className="projectSeeMore"
              onClick={() => toggleDetails("foodMunchApp")}
            >
              {detailsVisible.foodMunchApp ? "See Less" : "See More"}
            </p>
            <a
              href="https://github.com/Mujtaba-AliKhan/Food-Munch-App"
              className="githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
