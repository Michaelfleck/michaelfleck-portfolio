import { RevealOnScroll } from "../RevealOnScroll";
import { ImageSlot } from "../ImageSlot";

const projects = [
  {
    num: "/ 01",
    title: "Reddit → Spotify Playlist Creator",
    desc: "A backend service that generates Spotify playlists from trending Reddit posts, with robust API integrations and persistent token storage.",
    tags: ["Node.js", "PostgreSQL", "Express", "Knex", "Spotify API", "Reddit API"],
    link: "https://github.com/Michaelfleck/SpotifyRedditMusicFinder",
    image: "/projects/reddit-spotify.png",
  },
  {
    num: "/ 02",
    title: "Swine App: Nonprofit Fundraising Platform",
    desc: "Partnered with a senior developer to build a donation-tracking platform for a Houston Rodeo nonprofit, handling real fundraising workflows.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    link: "https://github.com/swine-app/front-end",
    image: "/projects/swine-app.png",
  },
  {
    num: "/ 03",
    title: "Plant Shop: E-Commerce App",
    desc: "A full-stack plant store with live product data pulled from the Trefle.io botanical database, cart flow, and a clean responsive storefront.",
    tags: ["React", "Node.js", "Express", "REST API", "Tailwind CSS"],
    link: "https://github.com/Michaelfleck/Plant-Shop",
    image: "/projects/plant-shop.png",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <RevealOnScroll as="p" className="eyebrow">
          <span className="num">03</span>&nbsp;Selected Work
        </RevealOnScroll>
        <RevealOnScroll as="h2" className="section-title">
          Things I've <span className="grad-text">built.</span>
        </RevealOnScroll>
        <RevealOnScroll as="p" delay={1} className="lead" style={{ marginBottom: "48px" }}>
          A few projects that show how I approach problems, from API integrations to
          full-stack products.
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
                <a
                  className="plink"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project <span>↗</span>
                </a>
              </div>
              <div className="pthumb">
                <ImageSlot
                  src={p.image}
                  placeholder={`Missing /public${p.image}`}
                  alt={p.title}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
