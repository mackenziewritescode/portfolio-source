import React, { useEffect, useState } from "react";
import "../styles/Portfolio.scss";
import { BsChevronCompactDown } from "react-icons/bs";
import { gsap } from "gsap";

const slideIn = (e) => {
  gsap.to(e, {
    duration: 1.5,
    x: 0,
    opacity: 1,
    ease: "power4.out",
    delay: 0.5,
    stagger: 1,
  });
};

const slideOut = (e) => {
  gsap.to(e, {
    duration: 1,
    x: "-100vw",
    opacity: 0,
    ease: "power2.out",
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

const fadeDown = (e) => {
  gsap.to(e, {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 3.5,
    ease: "power4.out",
    stagger: 0.5,
  });
};
const fadeUp = (e) => {
  gsap.to(e, {
    duration: 1,
    y: "-20",
    opacity: 0,
    ease: "power4.out",
  });
};

export default function Page2(props) {
  const [page2Count, setPage2Count] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  const page2 = props.pageVisible;

  useEffect(() => {
    // if an animation is not in progress, then animate:
    if (!inProgress) {
      // if the page is in focus:
      if (page2) {
        // initial full animation:
        if (page2Count === 0) {
          setInProgress(true);
          fadeIn("#page-2-text-wrap");
          slideIn(".page-2-text");
          fadeDown(".page-2-bottom");
          setPage2Count(1);
          setTimeout(() => setInProgress(false), 4500);
        }
        // short animation:
        if (page2Count > 0) {
          setInProgress(true);
          fadeIn("#page-2-text-wrap");
          fadeIn(".page-2-text");
          fadeIn(".page-2-bottom");
          setTimeout(() => setInProgress(false), 1000);
        }
        // if the page is no longer in focus, fade out:
      } else {
        fadeOut("#page-2-text-wrap");
        slideOut(".page-2-text");
        fadeUp(".page-2-bottom");
      }
    }
  }, [page2, page2Count, inProgress]);

  return (
    <div id="page-2" className="page">
      <div id="page-2-text-wrap">
        <p className="main-text page-2-text" id="page-2-block-1">
          I specialize in front-end web development.
        </p>
        <p className="main-text page-2-text" id="page-2-block-2">
          (I make websites.)
        </p>
        <p className="main-text page-2-text" id="page-2-block-3">
          Like this one!
        </p>
      </div>

      <p className="bottom-text page-2-bottom">
        check out some of my recent projects
      </p>
      <div className="arrows page-2-bottom">
        <BsChevronCompactDown className="arrow" />
        <BsChevronCompactDown className="arrow" />
        <BsChevronCompactDown className="arrow" />
      </div>
    </div>
  );
}
