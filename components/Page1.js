import React from "react";
import "../styles/Portfolio.scss";
import { BsChevronCompactDown } from "react-icons/bs";

export default function Page1(currentPage) {
  // const page1 = currentPage.currentPage === "page-1";

  return (
    <div id="page-1" className="page">
      <div id="page-1-cover"></div>
      <div className="main-text" id="page-1-main-text">
        <p id="page-1-block-1">Hello.</p>
        <p id="page-1-block-2">My name is Mackenzie.</p>
        <p id="page-1-block-3">I'm a web developer.</p>
      </div>
      <p className="bottom-text" id="page-1-block-4">
        Scroll down to learn more
      </p>
      <div className="arrows">
        <BsChevronCompactDown className="arrow" />{" "}
        <BsChevronCompactDown className="arrow" />{" "}
        <BsChevronCompactDown className="arrow" />
      </div>
    </div>
  );
}
