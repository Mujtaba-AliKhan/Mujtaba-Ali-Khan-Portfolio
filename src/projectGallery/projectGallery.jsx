import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./projectGallery.css";
import projects from "./projects.json";

const ProjectGallery = () => {
  const videosRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    projects.forEach((_, projectIndex) => {
      if (!videosRef.current[projectIndex]) {
        videosRef.current[projectIndex] = [];
      }
    });
  }, [projects]);

  return (
    <div className="projectGalleryContainer">
      <h1>Project Gallery</h1>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} className="galleryItem">
          <h2>{project.title}</h2>
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            effect={project.videos.length > 1 ? "coverflow" : "slide"}
            centeredSlides={true}
            loop={false}
            slidesPerView={project.videos.length > 1 ? "auto" : 1}
            coverflowEffect={
              project.videos.length > 1
                ? {
                    rotate: 10,
                    stretch: 10,
                    depth: 300,
                    modifier: 2.5,
                    slideShadows: true,
                  }
                : {}
            }
            className="swiper-container"
          >
            {project.videos.map((video, videoIndex) => (
              <SwiperSlide key={videoIndex} className="videoSlide">
                <h3 className="videoTitle">{video.description}</h3>
                <div className="videoWrapper">
                  <video
                    autoPlay
                    loop
                    muted
                    ref={(el) => {
                      if (!videosRef.current[projectIndex]) {
                        videosRef.current[projectIndex] = [];
                      }
                      videosRef.current[projectIndex][videoIndex] = el;
                    }}
                    className="video"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
