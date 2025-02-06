import React, { useEffect } from "react";
import "./aboutme.css";

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about-me">
      <h1>About Me</h1>
      <div className="about-me-content">
        <div className="gradient-border">
          <div className="profilepicContainer">
            <img
              src="/mujtabaalikhan.jpg"
              alt="Mujtaba Ali Khan"
              className="profile-photo"
            />
          </div>
        </div>
        <div className="intro aboutmeItem">
          <p>
            Hello! I'm <strong>Mujtaba Ali Khan</strong>, a passionate{" "}
            <strong>Full Stack Developer</strong> based in{" "}
            <strong>Hyderabad, India</strong>.
          </p>

          <p>
            With extensive experience in both front-end and back-end
            technologies, I specialize in creating high-quality software
            solutions. My expertise includes{" "}
            <strong>HTML5, CSS3, JavaScript, React.js, Redux</strong> for the
            front-end, and <strong>Python, Flask, SQL, DBMS</strong> for the
            back-end. Additionally, I am proficient with tools such as{" "}
            <strong>
              Git, MS Office, Photoshop, and have strong skills in testing,
              debugging, communication, customer service, and teamwork
            </strong>
            .
          </p>
        </div>

        <div className="projects aboutmeItem">
          <h2>Projects</h2>
          <ul>
            <li>
              <a
                href="https://github.com/Mujtaba-AliKhan/Wikipurrdia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipurrdia
              </a>
              : A React site offering cat breed and coat info using React.js.
            </li>
            <li>
              <a
                href="https://github.com/Mujtaba-AliKhan/Weather-App-using-Flask"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weather App using Flask
              </a>
              : Flask-based weather app using OpenWeather API.
            </li>
            <li>
              <a
                href="https://github.com/Mujtaba-AliKhan/Resume-Builder"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume Builder
              </a>
              : A Flask-based resume builder app with extensive use of
              front-end.
            </li>
            <li>
              <a
                href="https://github.com/Mujtaba-AliKhan/Todos-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                To-do List App
              </a>
              : A simple to-do list application built using HTML, CSS, and
              JavaScript.
            </li>
            <li>
              <a
                href="https://github.com/Mujtaba-AliKhan/Food-Munch-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                Food Munch App
              </a>
              : A responsive commercial website for a restaurant using HTML and
              CSS.
            </li>
          </ul>
        </div>
        <div className="experience aboutmeItem">
          <h2>Professional Experience</h2>
          <ul>
            <li>
              <strong>Customer Support Professional, Foundever</strong> (Jul
              2024 – present)
              <ul>
                <li>
                  Provided technical support for Verizon Wireless business
                  clients, addressing issues with network connectivity, billing,
                  and WiFi.
                </li>
                <li>
                  Troubleshot smartphones and tablets, achieving prompt
                  resolution for common and complex technical issues,
                  contributing to high customer satisfaction
                </li>
                <li>
                  Collaborated with team members to handle escalated cases,
                  ensuring efficient and accurate solutions in line with company
                  service standards.
                </li>
              </ul>
            </li>
            <li>
              <strong>IT Support Associate, Tech Mahindra</strong> (Jun 2021 –
              Nov 2022)
              <ul>
                <li>
                  Achieved 95% success in tailoring software solutions to
                  diverse business needs.
                </li>
                <li>
                  Led more than 20 tasks per day with a 98% on-time delivery
                  rate through cross-functional collaboration.
                </li>
                <li>
                  Boosted task efficiency by 30% through maintaining up-to-date
                  knowledge.
                </li>
                <li>
                  Communicated complex tech concepts to 100+ non-tech
                  stakeholders with a 90% satisfaction rate.
                </li>
              </ul>
            </li>
            <li>
              <strong>Process Analyst, VNK4U Consulting Private Limited</strong>{" "}
              (Mar 2020 – Mar 2021)
              <ul>
                <li>
                  Proficient in explaining Form 1040 to clients with a 95%
                  understanding rate.
                </li>
                <li>Delivered Form 1040 drafts with 90% satisfaction.</li>
                <li>
                  Managed document flow and processed 150 payments annually.
                </li>
                <li>
                  Coordinated with teams for 85% on-time service delivery.
                </li>
                <li>
                  Addressed 50 clarifications, ensuring accurate tax filings.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="education  aboutmeItem">
          <h2>Education</h2>
          <p>
            <strong>Bachelor's of Computer Applications</strong>, Gulbarga
            University (Jul 2017 – Nov 2020)
          </p>
          <p>
            <strong>All India Senior School Certificate Examination</strong>,
            The Indian School, Kingdom of Bahrain (May 2017)
          </p>
        </div>

        <div className="courses aboutmeItem">
          <h2>Courses</h2>
          <ul>
            <li>Full-Stack Development with Python, Niltech Edu</li>
            <li>Python Complete Course For Python Beginners, Udemy.com</li>
          </ul>
          <p>
            Beyond my professional life, I am deeply passionate about learning
            new technologies and staying up-to-date with industry trends. I
            believe that continuous learning and adaptation are key to success
            in the tech industry. One of my favorite projects was developing the{" "}
            <a
              href="https://github.com/Mujtaba-AliKhan/Wikipurrdia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipurrdia
            </a>{" "}
            website because it combined my love for coding and cats.
          </p>

          <p>
            Looking ahead, I am excited to continue growing as a developer and
            aspire to work on innovative projects that make a significant
            impact. I am always open to new opportunities for collaboration and
            professional growth.
          </p>

          <p>
            Let's connect! You can find me on{" "}
            <a
              href="https://www.linkedin.com/in/mujtaba-alikhan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            or check out my projects on{" "}
            <a
              href="https://github.com/Mujtaba-AliKhan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            . Feel free to reach out via email at{" "}
            <a href="mailto:mujtabaalikhan01@gmail.com">
              mujtabaalikhan01@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
