import React, { useRef } from "react";
import "../styles/Portfolio.scss";
import useIntersection from "./useIntersection";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

export default function Portfolio() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const refs = [ref1, ref2, ref3, ref4];
  const threshold = 0.55;

  const currentPage = useIntersection(refs, threshold);

  return (
    <div id="portfolio-wrapper">
      <div ref={ref1} data-page="page-1">
        <Page1 currentPage={currentPage} />
      </div>
      <div ref={ref2} data-page="page-2">
        <Page2 currentPage={currentPage} />
      </div>
      <div ref={ref3} data-page="page-3">
        <Page3 currentPage={currentPage} />
      </div>
      <div ref={ref4} data-page="page-4">
        <Page4 currentPage={currentPage} />
      </div>
    </div>
  );
}
