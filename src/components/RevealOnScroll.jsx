import { useLayoutEffect, useRef } from "react";

/**
 * Wraps content and fades/slides it in when it scrolls into view.
 * - `as`     : which element to render (default "div"). Use this to avoid
 *              adding an extra wrapper that would break grid/flex layouts.
 * - `delay`  : 1–4, maps to the staggered .d1–.d4 transition delays.
 *
 * The element's visible state is the CSS default; we add `.pre` on mount
 * (synchronously, before paint, so there's no flash) to hide it, then remove
 * `.pre` once it enters the viewport to play the transition.
 */
export const RevealOnScroll = ({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver support → just show it.
    if (!("IntersectionObserver" in window)) return;

    el.classList.add("pre");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("pre");
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  const classes = ["reveal", delay ? `d${delay}` : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
};
