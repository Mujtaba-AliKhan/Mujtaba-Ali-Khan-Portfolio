import { useEffect } from "react";
import "./StarBackground.css";
import Homepage from "../homepage/homepage";
import Projects from "../projects/projects";

const StarBackground = () => {
  useEffect(() => {
    const stars = [];
    const isWideScreen = window.innerWidth > 768;
    const numStars = isWideScreen ? 500 : 200;
    const skyElement = document.querySelector(".sky");

    if (skyElement) {
      const skyWidth = skyElement.clientWidth;
      const skyHeight = skyElement.clientHeight;

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("img");
        star.src = "/star.png";
        star.className = `star size${Math.floor(Math.random() * 5) + 1}`;
        star.style.position = "absolute";
        star.style.top = `${Math.random() * skyHeight}px`;
        star.style.left = `${Math.random() * skyWidth}px`;
        skyElement.appendChild(star);
        stars.push(star);
      }
    }

    if (isWideScreen) {
      stars.forEach((star) => {
        star.addEventListener("mouseover", (event) =>
          moveAway(star, event.clientX, event.clientY)
        );
        star.addEventListener("mouseout", () => moveToOriginalPosition(star));
      });

      document.addEventListener("mousemove", (event) => {
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

          if (distance < 100) {
            moveAway(star, mouseX, mouseY);
          } else {
            moveToOriginalPosition(star);
          }
        });
      });
    }

    function moveAway(star, mouseX, mouseY) {
      const starRect = star.getBoundingClientRect();
      const dx = starRect.left + starRect.width / 2 - mouseX;
      const dy = starRect.top + starRect.height / 2 - mouseY;
      const angle = Math.atan2(dy, dx);
      const distance = 50;

      const offsetX = distance * Math.cos(angle);
      const offsetY = distance * Math.sin(angle);
      star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }

    function moveToOriginalPosition(star) {
      star.style.transform = "translate(0, 0)";
    }

    function calculateDistance(x1, y1, x2, y2) {
      const dx = x1 - x2;
      const dy = y1 - y2;
      return Math.sqrt(dx * dx + dy * dy);
    }

    return () => {
      stars.forEach((star) => {
        if (isWideScreen) {
          star.removeEventListener("mouseover", (event) =>
            moveAway(star, event.clientX, event.clientY)
          );
          star.removeEventListener("mouseout", () =>
            moveToOriginalPosition(star)
          );
        }
        star.parentNode.removeChild(star);
      });
    };
  }, []);

  return (
    <div>
      <div className="sky">
        <Homepage />
      </div>
      <Projects />
    </div>
  );
};

export default StarBackground;
