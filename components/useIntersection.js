import { useEffect, useState } from "react";

export default function useIntersection(ref, page, threshold) {
  const [pageVisible, setPageVisible] = useState(false);

  // on load, check if a page is visible
  // useEffect(() => {
  //   if (window.location.hash) {
  //     const pageOnLoad = window.location.hash.substring(1);
  //     if (pageOnLoad === page) setPageVisible(true);
  //     return pageVisible;
  //   }
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPageVisible(true);
        } else {
          setPageVisible(false);
        }
      },
      { threshold }
    );

    if (pageVisible) {
      window.history.replaceState({ page: page }, "", `#${page}`);
    }

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  });
  return pageVisible;
}
