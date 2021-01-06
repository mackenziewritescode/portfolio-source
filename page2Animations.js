import { gsap } from "gsap";

const slideIn = (e) => {
  gsap.to(e, {
    duration: 1.5,
    x: 0,
    opacity: 1,
    ease: "power4.out",
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

export default function page2Animations(count, page) {
  if (window.location.hash === "#page-2") {
    if (count === 0) {
      fadeIn("#page-2-text-wrap");
      slideIn(".page-2-text");
      fadeDown(".page-2-bottom");
      //   setTimeout(() => setPage2Animation(true), 4500);
    }
  }
}
