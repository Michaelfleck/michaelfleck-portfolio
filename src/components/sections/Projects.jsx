import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ImageSlot } from "../ImageSlot";

const projects = [
  {
    num: "/ 01",
    title: "Paradane: Business Landing Page",
    desc: "Responsive business landing page built as a contract engagement, featuring reusable UI components, smooth scrolling interactions, Next.js image optimization, and SEO best practices.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    demo: "https://paradane.com/",
    repo: null,
    image: "/projects/paradane.png",
  },
  {
    num: "/ 02",
    title: "Reddit → Spotify Playlist Creator",
    desc: "A backend service that generates Spotify playlists from trending Reddit posts, with robust API integrations and persistent token storage.",
    tags: ["Node.js", "PostgreSQL", "Express", "Knex", "Spotify API", "Reddit API"],
    demo: null,
    repo: "https://github.com/Michaelfleck/SpotifyRedditMusicFinder",
    image: "/projects/reddit-spotify.png",
  },
  {
    num: "/ 03",
    title: "Swine App: Nonprofit Fundraising Platform",
    desc: "Partnered with a senior developer to build a donation-tracking platform for a Houston Rodeo nonprofit, handling real fundraising workflows.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    demo: "https://swine-app.onrender.com/",
    repo: "https://github.com/swine-app/front-end",
    image: "/projects/swine-app.png",
  },
  {
    num: "/ 04",
    title: "AWS Streaming Data Pipeline",
    desc: "Built an end-to-end streaming ingestion pipeline on AWS using Kinesis Data Streams and Lambda via event source mapping to process real-time data. Delivered data to S3 with date-based partitioning, configured a Glue Crawler for automated schema inference, and queried datasets via Athena.",
    tags: ["Python", "AWS Kinesis", "Lambda", "S3", "Glue", "Athena"],
    demo: null,
    repo: "https://github.com/Michaelfleck/aws-vitals-pipeline",
    image: "/projects/aws-pipeline.png",
  },
];

export const Projects = () => {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <RevealOnScroll as="p" className="eyebrow">
          <span className="num">03</span>&nbsp;Selected Work
        </RevealOnScroll>
        <RevealOnScroll as="h2" className="section-title">
          Things I've <span className="grad-text">built.</span>
        </RevealOnScroll>
        <RevealOnScroll
          as="p"
          delay={1}
          className="lead"
          style={{ marginBottom: "48px" }}
        >
          A few projects that show how I approach problems, from data pipelines
          and API integrations to full-stack products.
        </RevealOnScroll>

        <div className="projects-grid">
          {projects.map((p) => (
            <RevealOnScroll as="article" key={p.title} className="project">
              <div className="pnum">{p.num}</div>
              <div className="pbody">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="plinks">
                  {p.demo && (
                    <a className="plink" href={p.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo <span>↗</span>
                    </a>
                  )}
                  {p.repo && (
                    <a className="plink plink-gh" href={p.repo} target="_blank" rel="noopener noreferrer">
                      GitHub <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
              <div
                className="pthumb"
                onClick={() => p.image && setLightbox(p)}
                style={p.image ? { cursor: "zoom-in" } : undefined}
              >
                <ImageSlot src={p.image} alt={p.title} />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <img
            src={lightbox.image}
            alt={lightbox.title}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
