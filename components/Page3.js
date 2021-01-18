import React, { useEffect, useState } from "react";
import "../styles/Portfolio.scss";
import { BsChevronCompactDown } from "react-icons/bs";
import calculatorThumb from "../images/thumbs/calculator.jpg";
import beatMachineThumb from "../images/thumbs/beat-machine.jpg";
import infinitePhotosThumb from "../images/thumbs/infinite-photos.jpg";
import intervalTimerThumb from "../images/thumbs/interval-timer.jpg";
import markdownPreviewThumb from "../images/thumbs/markdown-preview.jpg";
import { gsap } from "gsap";

const slowFadeIn = (e) => {
  gsap.to(e, {
    duration: 3,
    opacity: 1,
    ease: "power2.out",
  });
};

const projectSlideIn = (e) => {
  gsap.to(e, {
    duration: 1.5,
    x: 0,
    opacity: 1,
    ease: "power4.out",
    stagger: 0.3,
  });
};

const projectSlideInFast = (e) => {
  gsap.to(e, {
    duration: 1.5,
    x: 0,
    opacity: 1,
    ease: "power4.out",
    stagger: 0.1,
  });
};

const projectSlideOut = (e) => {
  gsap.to(e, {
    duration: 0.5,
    x: "-40",
    opacity: 0,
    ease: "power4.out",
  });
};

const fadeInDelay = (e) => {
  gsap.to(e, {
    duration: 1,
    opacity: 1,
    x: 0,
    y: 0,
    delay: 2.2,
    ease: "power4.out",
  });
};

const fadeIn = (e) => {
  gsap.to(e, {
    duration: 1,
    opacity: 1,
    x: 0,
    y: 0,
    ease: "power4.out",
  });
};

const fadeOut = (e) => {
  gsap.to(e, {
    duration: 1,
    opacity: 0,
    ease: "power4.out",
  });
};

export default function Page3(currentPage) {
  const [page3Count, setPage3Count] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  const page3 = currentPage.currentPage === "page-3";

  useEffect(() => {
    // if an animation is not in progress, then animate:
    if (!inProgress) {
      // if the page is in focus:
      if (page3) {
        // initial full animation:
        if (page3Count === 0) {
          setInProgress(true);
          projectSlideIn(".project");
          slowFadeIn("#page-3-title");
          fadeInDelay(".page-3-bottom");
          setPage3Count(1);
          setTimeout(() => setInProgress(false), 3000);
        }
        // short animation:
        if (page3Count > 0) {
          setInProgress(true);
          projectSlideInFast(".project");
          fadeIn("#page-3-title");
          fadeIn(".page-3-bottom");
          setTimeout(() => setInProgress(false), 1000);
        }
        // if the page is no longer in focus, fade out:
      } else {
        projectSlideOut(".project");
        fadeOut("#page-3-title");
        fadeOut(".page-3-bottom");
      }
    }
  }, [page3, page3Count, inProgress]);

  return (
    <div id="page-3" className="page">
      <h2 id="page-3-title">Projects</h2>
      <div id="project-wrap">
        <div className="project">
          <a
            className="project-img-link"
            href="http://www.sunkenworld.com/calculator"
            alt=""
          >
            <img
              className="project-img"
              alt="Clever Calculator"
              src={calculatorThumb}
              width="300"
              height="200"
            ></img>
          </a>
          <h3 className="project-title">Clever Calculator</h3>
          <p className="project-description">
            A clever calculator app written with React.
          </p>
          <a
            className="project-link"
            href="http://www.sunkenworld.com/calculator"
            alt=""
          >
            Visit
          </a>
          <a
            className="project-github"
            href="https://github.com/mackenziewritescode/calculator"
            alt=""
          >
            GitHub
          </a>
        </div>
        <div className="project">
          <a
            className="project-img-link"
            href="http://www.sunkenworld.com/drum-machine"
            alt=""
          >
            <img
              className="project-img"
              alt="Beat Machine"
              src={beatMachineThumb}
              width="300"
              height="200"
            ></img>
          </a>
          <h3 className="project-title">Beat Machine</h3>
          <p className="project-description">
            A cool React-based drum machine incorporating pads, background
            tracks and volume control.
          </p>
          <a
            className="project-link"
            href="http://www.sunkenworld.com/drum-machine"
            alt=""
          >
            Visit
          </a>
          <a
            className="project-github"
            href="https://github.com/mackenziewritescode/drum-machine"
            alt=""
          >
            GitHub
          </a>
        </div>
        <div className="project">
          <a
            className="project-img-link"
            href="http://www.sunkenworld.com/photo-search"
            alt=""
          >
            <img
              className="project-img"
              alt="Infinite Photos"
              src={infinitePhotosThumb}
              width="300"
              height="200"
            ></img>
          </a>
          <h3 className="project-title">Infinite Photos</h3>
          <p className="project-description">
            An infinite-scrolling photo app using React, Node and Unsplash API.
          </p>
          <a
            className="project-link"
            href="http://www.sunkenworld.com/photo-search"
            alt=""
          >
            Visit
          </a>
          <a
            className="project-github"
            href="https://github.com/mackenziewritescode/infinite-photos"
            alt=""
          >
            GitHub
          </a>
        </div>
        <div className="project">
          <a
            className="project-img-link"
            href="http://www.sunkenworld.com/interval-timer"
            alt=""
          >
            <img
              className="project-img"
              alt="Interval Timer"
              src={intervalTimerThumb}
              width="300"
              height="200"
            ></img>
          </a>
          <h3 className="project-title">Interval Timer</h3>
          <p className="project-description">
            A stylish interval timer that uses two separate timers with
            thoughtful features. Written in JavaScript.
          </p>
          <a
            className="project-link"
            href="http://www.sunkenworld.com/interval-timer"
            alt=""
          >
            Visit
          </a>
          <a
            className="project-github"
            href="https://github.com/mackenziewritescode/interval-timer"
            alt=""
          >
            GitHub
          </a>
        </div>
        <div className="project">
          <a
            className="project-img-link"
            href="http://www.sunkenworld.com/markdown-app"
            alt=""
          >
            <img
              className="project-img"
              alt="Markdown Preview"
              src={markdownPreviewThumb}
              width="300"
              height="200"
            ></img>
          </a>
          <h3 className="project-title">Markdown Preview</h3>
          <p className="project-description">
            A markup preview app that converts plain text written in Markdown to
            rich text in real time, using React.
          </p>
          <a
            className="project-link"
            href="http://www.sunkenworld.com/markdown-app"
            alt=""
          >
            Visit
          </a>
          <a
            className="project-github"
            href="https://github.com/mackenziewritescode/markdown-app"
            alt=""
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="arrows page-3-bottom">
        <BsChevronCompactDown className="arrow" />
        <BsChevronCompactDown className="arrow" />
        <BsChevronCompactDown className="arrow" />
      </div>
    </div>
  );
}
