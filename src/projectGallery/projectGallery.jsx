import React, { useState, useEffect, useRef } from "react";
import "./projectGallery.css";

const ProjectGallery = () => {
  const [expandedVideo, setExpandedVideo] = useState(null);
  const videosRef = useRef([]);
  const [showMediaContainer, setShowMediaContainer] = useState({
    wikipurrdia: false,
    weatherApp: false,
    todoList: false,
    foodMunch: false,
    resumeBuilder: false,
  });
  const handleVideoClick = (index) => {
    setExpandedVideo(index);
  };

  const handleHeadingClick = (project) => {
    setShowMediaContainer((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };
  useEffect(() => {
    const handleBackgroundClick = (event) => {
      if (expandedVideo !== null && !event.target.closest(".video")) {
        setExpandedVideo(null);
      }
    };

    window.addEventListener("click", handleBackgroundClick);

    return () => {
      window.removeEventListener("click", handleBackgroundClick);
    };
  }, [expandedVideo]);

  useEffect(() => {
    videosRef.current.forEach((video) => {
      if (video) {
        video.playbackRate = 0.75;
      }
    });
  }, []);

  const WikipurrdiaVideoDescriptions = [
    "Homepage",
    "Breeds page",
    "Coats page",
    "Contact Us page",
    "About Us page",
  ];
  const WeatherAppVideoDescriptions = [
    "Search City",
    "Weather in metric system",
    "Weather in imperial system",
    "Cloudy Weather",
    "Rainy Weather",
  ];
  const ResumeBuilderVideoDescriptions = [
    "Login and Logout",
    "Signup Page",
    "Creating Resume and storing in SQL",
  ];
  const TodoListVideoDescriptions = [
    "Adding list items",
    "Saving and removing list items",
  ];
  const FoodMunchVideoDescriptions = [];
  return (
    <div className="projectGalleryContainer">
      <h1>Project Gallery</h1>
      <ul className="galleryLists">
        <li>
          <div className="wikipurrdiaGallery galleryItem">
            <div
              className="galleryHeading"
              onClick={() => handleHeadingClick("wikipurrdia")}
            >
              <h2>Wikipurrdia</h2>
              <i
                className={`bi bi-menu-down ${
                  showMediaContainer.wikipurrdia ? "flipIcon" : ""
                }`}
              ></i>
            </div>
            <div
              className={`mediaContainer ${
                showMediaContainer.wikipurrdia ? "show" : "hide"
              }`}
            >
              {[1, 2, 3, 4, 5].map((num, index) => (
                <div key={index} className="videoDescription">
                  <h3>{WikipurrdiaVideoDescriptions[index]}</h3>

                  <video
                    autoPlay
                    loop
                    muted
                    ref={(video) => (videosRef.current[index] = video)}
                    className={`video ${
                      expandedVideo === index ? "expanded" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoClick(index);
                    }}
                  >
                    <source
                      src={`src/assets/Gallery/Wikipurrdia/wikipurrdia${num}.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </li>
        <li>
          <div className="weatherAppGallery galleryItem">
            <div
              className="galleryHeading"
              onClick={() => handleHeadingClick("weatherApp")}
            >
              <h2>Weather App</h2>
              <i
                className={`bi bi-menu-down ${
                  showMediaContainer.weatherApp ? "flipIcon" : ""
                }`}
              ></i>
            </div>
            <div
              className={`mediaContainer ${
                showMediaContainer.weatherApp ? "show" : "hide"
              }`}
            >
              {[1, 2, 3, 4, 5].map((num, index) => (
                <div key={index} className="videoDescription">
                  <h3>{WeatherAppVideoDescriptions[index]}</h3>

                  <video
                    autoPlay
                    loop
                    muted
                    ref={(video) => (videosRef.current[index] = video)}
                    className={`video ${
                      expandedVideo === index ? "expanded" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoClick(index);
                    }}
                  >
                    <source
                      src={`src/assets/Gallery/Weather App/weather-app${num}.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </li>
        <li>
          <div className="resumeBuilderGallery galleryItem">
            <div
              className="galleryHeading"
              onClick={() => handleHeadingClick("resumeBuilder")}
            >
              <h2>Resume Builder</h2>
              <i
                className={`bi bi-menu-down ${
                  showMediaContainer.resumeBuilder ? "flipIcon" : ""
                }`}
              ></i>
            </div>
            <div
              className={`mediaContainer ${
                showMediaContainer.resumeBuilder ? "show" : "hide"
              }`}
            >
              {[1, 2, 3].map((num, index) => (
                <div key={index} className="videoDescription">
                  <h3>{ResumeBuilderVideoDescriptions[index]}</h3>

                  <video
                    autoPlay
                    loop
                    muted
                    ref={(video) => (videosRef.current[index] = video)}
                    className={`video ${
                      expandedVideo === index ? "expanded" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoClick(index);
                    }}
                  >
                    <source
                      src={`src/assets/Gallery/Resume Builder/Resume-Builder${num}.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </li>
        <li>
          <div className="todoListGallery galleryItem">
            <div
              className="galleryHeading"
              onClick={() => handleHeadingClick("todoList")}
            >
              <h2>To-do List</h2>
              <i
                className={`bi bi-menu-down ${
                  showMediaContainer.todoList ? "flipIcon" : ""
                }`}
              ></i>
            </div>
            <div
              className={`mediaContainer ${
                showMediaContainer.todoList ? "show" : "hide"
              }`}
            >
              {[1, 2].map((num, index) => (
                <div key={index} className="videoDescription">
                  <h3>{TodoListVideoDescriptions[index]}</h3>

                  <video
                    autoPlay
                    loop
                    muted
                    ref={(video) => (videosRef.current[index] = video)}
                    className={`video ${
                      expandedVideo === index ? "expanded" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoClick(index);
                    }}
                  >
                    <source
                      src={`src/assets/Gallery/Todo List/todoList${num}.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </li>
        <li>
          <div className="foodMunchGallery galleryItem">
            <div
              className="galleryHeading"
              onClick={() => handleHeadingClick("foodMunch")}
            >
              <h2>Food Munch</h2>
              <i
                className={`bi bi-menu-down ${
                  showMediaContainer.foodMunch ? "flipIcon" : ""
                }`}
              ></i>
            </div>
            <div
              className={`mediaContainer ${
                showMediaContainer.foodMunch ? "show" : "hide"
              }`}
            >
              {[1].map((index) => (
                <div key={index} className="videoDescription">
                  <h3>{FoodMunchVideoDescriptions[index]}</h3>

                  <video
                    autoPlay
                    loop
                    muted
                    ref={(video) => (videosRef.current[index] = video)}
                    className={`video ${
                      expandedVideo === index ? "expanded" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoClick(index);
                    }}
                  >
                    <source
                      src={`src/assets/Gallery/Food Munch/foodmunch.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectGallery;
