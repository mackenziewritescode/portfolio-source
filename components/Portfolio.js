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
  // const refs = [ref1, ref2, ref3, ref4];
  // const threshold = 0.55;

  const page1Visible = useIntersection(ref1, "page-1", 0.55);
  const page2Visible = useIntersection(ref2, "page-2", 0.55);
  const page3Visible = useIntersection(ref3, "page-3", 0.25);
  const page4Visible = useIntersection(ref4, "page-4", 0.55);

  // const currentPage = useIntersection(refs);

  return (
    <div id="portfolio-wrapper">
      <div ref={ref1} data-page="page-1">
        <Page1 pageVisible={page1Visible} />
      </div>
      <div ref={ref2} data-page="page-2">
        <Page2 pageVisible={page2Visible} />
      </div>
      <div ref={ref3} data-page="page-3">
        <Page3 pageVisible={page3Visible} />
      </div>
      <div ref={ref4} data-page="page-4">
        <Page4 pageVisible={page4Visible} />
      </div>
    </div>
  );
}
