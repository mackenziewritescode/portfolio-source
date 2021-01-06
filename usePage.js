import { useEffect, useState } from "react";

export default function useIntersection(refs, threshold) {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentPage(entry.target.id);
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
      window.history.pushState({ page: currentPage }, "", `#${currentPage}`);
      console.log(currentPage);
    }
  });
  return currentPage;
}
