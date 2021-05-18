import { useEffect, useState } from "react";

export default function useIntersection(ref, page, threshold) {
  const [pageVisible, setPageVisible] = useState(false);

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
      window.history.replaceState({ page }, "", `#${page}`);
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
