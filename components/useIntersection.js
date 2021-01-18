import { useEffect, useState } from "react";

export default function useIntersection(refs, threshold) {
  const [currentPage, setCurrentPage] = useState("");

  // on load, check if a page is visible
  useEffect(() => {
    if (window.location.hash) {
      const pageOnLoad = window.location.hash.substring(1);
      setCurrentPage(pageOnLoad);
      return currentPage;
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentPage(entry.target.dataset.page);
        }
      },
      { threshold }
    );
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    });
    if (currentPage) {
      window.history.replaceState({ page: currentPage }, "", `#${currentPage}`);
    }
  });
  return currentPage;
}
