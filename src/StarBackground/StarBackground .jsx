import React, { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "./StarBackground.css";
import Homepage from "../homepage/homepage";
import Projects from "../projects/projects";

const StarBackground = () => {
  const location = useLocation();
  const skyRef = useRef(null);
  const starsContainerRef = useRef(null);
  const handleMouseMoveRef = useRef(null); // Store event listener reference

  useEffect(() => {
    window.scrollTo(0, 0);

    const shouldScrollToProjects = sessionStorage.getItem("scrollToProjects");
    if (shouldScrollToProjects === "true") {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects-section");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
        sessionStorage.removeItem("scrollToProjects");
      }, 500);
    }

    const isWideScreen = window.innerWidth > 768;
    const numStars = isWideScreen ? 500 : 200;
    const starsContainer = starsContainerRef.current;
    let starsLoaded = false;

    if (starsContainer) {
      const skyWidth = skyRef.current.clientWidth;
      const skyHeight = skyRef.current.clientHeight;
      const centerX = skyWidth / 2;
      const centerY = skyHeight / 2;

      const starSizes = [
        "size1",
        "size1",
        "size2",
        "size2",
        "size3",
        "size3",
        "size3",
        "size4",
        "size5",
      ];

      let starsHTML = "";
      for (let i = 0; i < numStars; i++) {
        const randomSize =
          starSizes[Math.floor(Math.random() * starSizes.length)];
        starsHTML += `<img src="/star.png" class="star ${randomSize}" 
                        style="position:absolute; top:${centerY}px; left:${centerX}px;">`;
      }

      starsContainer.innerHTML = starsHTML;

      const stars = Array.from(starsContainer.getElementsByClassName("star"));

      stars.forEach((star) => {
        const randomX = Math.random() * skyWidth;
        const randomY = Math.random() * skyHeight;
        const animationDuration = (Math.random() * 2 + 1.5).toFixed(3);

        setTimeout(() => {
          requestAnimationFrame(() => {
            star.style.transition = `top ${animationDuration}s ease-out, left ${animationDuration}s ease-out`;
            star.style.top = `${randomY}px`;
            star.style.left = `${randomX}px`;
          });
        }, 10);
      });

      if (isWideScreen) {
        handleMouseMoveRef.current = throttle((event) => {
          const mouseX = event.clientX;
          const mouseY = event.clientY;
          stars.forEach((star) => {
            const { top, left } = star.getBoundingClientRect();
            const distance = calculateDistance(
              mouseX,
              mouseY,
              left + star.offsetWidth / 2,
              top + star.offsetHeight / 2
            );
            distance < 100
              ? moveAway(star, mouseX, mouseY)
              : moveToOriginalPosition(star);
          });
        }, 50);

        document.addEventListener("mousemove", handleMouseMoveRef.current);
      }
    }

    setTimeout(() => {
      starsLoaded = true;
    }, 3500);

    return () => {
      starsContainer.innerHTML = "";
      if (isWideScreen && handleMouseMoveRef.current) {
        document.removeEventListener("mousemove", handleMouseMoveRef.current);
      }
    };
  }, [location]);

  const moveAway = useCallback((star, mouseX, mouseY) => {
    const starRect = star.getBoundingClientRect();
    const dx = starRect.left + starRect.width / 2 - mouseX;
    const dy = starRect.top + starRect.height / 2 - mouseY;
    const angle = Math.atan2(dy, dx);
    const distance = 50;

    star.style.transition = "transform 0.3s ease-out";
    star.style.transform = `translate(${distance * Math.cos(angle)}px, ${
      distance * Math.sin(angle)
    }px)`;
  }, []);

  const moveToOriginalPosition = useCallback((star) => {
    star.style.transform = "translate(0, 0)";
  }, []);

  const calculateDistance = useCallback((x1, y1, x2, y2) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }, []);

  const throttle = useCallback((callback, limit) => {
    let waiting = false;
    return function (...args) {
      if (!waiting) {
        callback.apply(this, args);
        waiting = true;
        setTimeout(() => (waiting = false), limit);
      }
    };
  }, []);

  return (
    <div>
      <div className="sky" ref={skyRef}>
        <div className="stars-container" ref={starsContainerRef}></div>
        <Homepage />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
    </div>
  );
};

export default StarBackground;
