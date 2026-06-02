import { useEffect } from "react";

/** Thin progress bar at the very top that tracks scroll position. */
export const ScrollProgress = () => {
  useEffect(() => {
    const bar = document.querySelector(".progress");
    const onScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (st / h) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div className="progress"></div>;
};
