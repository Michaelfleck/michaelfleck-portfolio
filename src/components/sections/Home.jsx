import { useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ImageSlot } from "../ImageSlot";

const TECH = [
  "Python", "SQL", "Airflow", "Tableau", "BigQuery",
  "AWS", "GCP", "ETL/ELT", "React", "TypeScript", "Next.js",
  "Node.js", "PostgreSQL", "Terraform", "CI/CD", "Snowflake",
];

export const Home = () => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const glowRef = useRef(null);
  const typedRef = useRef(null);

  /* ---------- Typed role ---------- */
  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;
    const words = [
      "Data Engineer",
      "Data Analyst",
      "BI Developer",
      "Full-Stack Engineer",
      "Data & Platform Development",
      "Front-End Developer",
    ];
    let wi = 0,
      ci = 0,
      deleting = false,
      timer;
    const tick = () => {
      const word = words[wi];
      ci += deleting ? -1 : 1;
      el.textContent = word.slice(0, ci);
      let delay = deleting ? 45 : 90;
      if (!deleting && ci === word.length) {
        delay = 1700;
        deleting = true;
      } else if (deleting && ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 1100);
    return () => clearTimeout(timer);
  }, []);

  /* ---------- Cursor glow ---------- */
  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;
    let raf = null,
      tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.left = cx + "px";
      glow.style.top = cy + "px";
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5)
        raf = requestAnimationFrame(loop);
      else raf = null;
    };
    const move = (e) => {
      const r = hero.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      glow.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const leave = () => {
      glow.style.opacity = "0";
    };
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* ---------- Particle mesh canvas ---------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    let w,
      h,
      dpr,
      particles = [],
      raf;
    const mouse = { x: -9999, y: -9999 };
    const COUNT = 64;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const init = () => {
      particles = [];
      const n = Math.min(COUNT, Math.floor((w * h) / 16000));
      for (let i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.6 + 0.6,
        });
      }
    };
    const step = () => {
      ctx.clearRect(0, 0, w, h);
      const linkDist = 130;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const mdx = p.x - mouse.x,
          mdy = p.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 120 && md > 0) {
          p.x += (mdx / md) * (120 - md) * 0.015;
          p.y += (mdy / md) * (120 - md) * 0.015;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120,170,255,0.55)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x,
            dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const a = (1 - d / linkDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "rgba(90,150,255," + a + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(step);
    };
    const move = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const leave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      resize();
      init();
    };

    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerleave", leave);
    window.addEventListener("resize", onResize);
    resize();
    init();
    step();

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <section id="hero" ref={heroRef}>
        <canvas id="hero-canvas" ref={canvasRef}></canvas>
        <div className="hero-glow" ref={glowRef}></div>
        <div className="hero-grid-fade"></div>

        <div className="wrap hero-inner">
          <div className="hero">
            <div className="hero-tag">
              <span className="pulse"></span>Available for new opportunities
            </div>
            <h1>
              <span className="line">
                <span>Michael</span>
              </span>
              <span className="line">
                <span>Fleck.</span>
              </span>
            </h1>
            <p className="role">
              <span className="typed" ref={typedRef}></span>
              <span className="cursor"></span>
            </p>
            <p className="intro">
              I work across data engineering and front-end development, building
              reliable pipelines, analytics tools, and scalable systems that
              turn complex workflows into clean, maintainable products.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View my work <span className="arrow">→</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
            </div>
          </div>

          <RevealOnScroll delay={2} className="hero-portrait">
            <div className="frame">
              <ImageSlot
                src="/portrait.jpg"
                placeholder="Add /public/portrait.jpg"
                alt="Michael Fleck"
              />
            </div>
            <div className="badge">
              <span className="ico">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M12 2v6M12 16v6M2 12h6M16 12h6"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <div>
                <span className="label">BASED IN</span>
                <span className="val">Charlotte, NC</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <span className="bar"></span>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[...TECH, ...TECH].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </>
  );
};
