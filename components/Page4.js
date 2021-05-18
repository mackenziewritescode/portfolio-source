import React, { useState, useEffect } from "react";
import "../styles/Portfolio.scss";
import Obfuscate from "react-obfuscate";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import email from "./email"; // define an email address to run locally

const fadeInStagger = (e) => {
  gsap.to(e, {
    duration: 1.5,
    opacity: 1,
    x: 0,
    y: 0,
    ease: "power4.out",
    stagger: 1,
  });
};

const fadeInStaggerFast = (e) => {
  gsap.to(e, {
    duration: 1,
    opacity: 1,
    x: 0,
    y: 0,
    ease: "power4.out",
    stagger: 0.1,
  });
};

const scaleUp = (e) => {
  gsap.to(e, {
    duration: 0.5,
    opacity: 1,
    scale: 1,
    delay: 3,
    ease: "power4.out",
    stagger: 0.5,
  });
};

const scaleUpFast = (e) => {
  gsap.to(e, {
    duration: 0.5,
    opacity: 1,
    scale: 1,
    delay: 0.2,
    ease: "power4.out",
  });
};

const scaleDown = (e) => {
  gsap.to(e, {
    duration: 0.5,
    opacity: 0,
    scale: 0.1,
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

export default function Page4({ pageVisible }) {
  const [page4Count, setPage4Count] = useState(0);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    // if an animation is not in progress, then animate:
    if (!inProgress) {
      // if the page is in focus:
      if (pageVisible) {
        // initial full animation:
        if (page4Count === 0) {
          setInProgress(true);
          fadeInStagger(".page-4-text");
          scaleUp(".contact-circle");
          setPage4Count(1);
          setTimeout(() => setInProgress(false), 5000);
        }
        // short animation:
        if (page4Count > 0) {
          setInProgress(true);
          fadeInStaggerFast(".page-4-text");
          scaleUpFast(".contact-circle");
          setTimeout(() => setInProgress(false), 1000);
        }
        // if the page is no longer in focus, fade out:
      } else {
        fadeOut(".page-4-text");
        scaleDown(".contact-circle");
      }
    }
  }, [pageVisible, page4Count, inProgress]);

  return (
    <div id="page-4" className="page">
      <p className="main-text page-4-text" id="page-4-block-1">
        You can see all the code for each project, along with detailed
        descriptions, on my{" "}
        <a href="https://github.com/mackenziewritescode" alt="">
          GitHub
        </a>
        .
      </p>
      <p className="main-text page-4-text" id="page-4-block-2">
        Need a web developer? I'd love to help!
      </p>
      <p className="main-text page-4-text" id="page-4-block-3">
        Get in touch:
      </p>
      <div id="contact-wrap">
        <Obfuscate
          email={email}
          aria-label="Email"
          className="contact-circle"
          id="contact-email"
        >
          <MdEmail className="contact-icon" />
        </Obfuscate>
        <a
          className="contact-circle"
          id="contact-linkedin"
          href="https://www.linkedin.com/in/mackenzie-charlton-702517169/"
          alt=""
        >
          <FaLinkedin className="contact-icon" />
        </a>
      </div>
      <footer id="portfolio-footer">
        <p>
          This site was made by{" "}
          <a className="footer-link" href="http://www.sunkenworld.com/">
            Mackenzie Charlton
          </a>{" "}
          in 2021 with{" "}
          <a className="footer-link" href="https://reactjs.org">
            React
          </a>
          . Background photos:{" "}
          <a
            className="footer-link"
            href="https://unsplash.com/photos/HyZaYuPXyEo"
          >
            1
          </a>{" "}
          |{" "}
          <a
            className="footer-link"
            href="https://unsplash.com/photos/RVX2STx44UI"
          >
            2
          </a>{" "}
          |{" "}
          <a
            className="footer-link"
            href="https://unsplash.com/photos/OWsdJ-MllYA"
          >
            3
          </a>{" "}
          |{" "}
          <a
            className="footer-link"
            href="https://unsplash.com/photos/5ULk8EgE8tg"
          >
            4
          </a>
        </p>
      </footer>
    </div>
  );
}
