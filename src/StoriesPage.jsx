import "./homepage.css";

/*
  Roots & Road — Stories index (/stories)
  Gallery of the story library. Grows as stories are added.
*/

const stories = [
  {
    link: "/stories/jessie",
    eyebrow: "Nashville, Tennessee",
    title: "The secrets Jessie kept",
    teaser:
      "Born into the bustling Nashville of the late 1800s. Part of the Nashville social scene. Her three sons adored her. A century later, DNA revealed the rest of her story — and what an enigma she was.",
    image: {
      src: "/assets/jessie/divorce-1903.png",
      alt: "1903 newspaper item headed 'Wants a Divorce'",
      contain: true,
    },
  },
  {
    link: "/stories/mike",
    eyebrow: "Scotland · Quebec · Michigan · Kansas City",
    title: "The man who called himself Mike",
    teaser:
      "Finding the thread backwards from Kansas City to Aberdeen, Scotland — and the moment Robeson was revealed to be Robertson.",
    image: {
      src: "/assets/aberdeen-card.jpg",
      alt: "Watercolor of Aberdeen's harbor at dusk",
    },
  },
  {
    link: "/stories/bennetts",
    eyebrow: "Colonial Virginia",
    title: "Now we are Bennetts",
    teaser:
      "A surprising DNA result, a change in surname, and the discovery of seven generations traced to colonial Virginia instead of Baden-Baden, Germany.",
    image: {
      src: "/assets/bennetts/muster-roll-1777.jpg",
      alt: "1777 muster roll of the 7th Virginia Regiment",
    },
  },
];

export default function StoriesPage() {
  return (
    <div className="rr-page">
      <header className="rr-nav">
        <a className="rr-wordmark" href="/" aria-label="Roots and Road home">
          <span className="rr-wordmark-name">
            ROOTS <em>&amp;</em> ROAD
          </span>
          <span className="rr-wordmark-tag">Identity Adventures</span>
        </a>
        <nav aria-label="Primary">
          <a href="/">Home</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/journeys">Journeys</a>
          <a className="rr-btn rr-btn-nav" href="/#discovery-call">
            Discovery call
          </a>
        </nav>
      </header>

      <main>
        <section className="rr-journeys">
          <img
            className="rr-journeys-wash"
            src="/assets/journeys-wash.jpg"
            alt=""
            aria-hidden="true"
          />
          <div className="rr-journeys-veil" aria-hidden="true" />
          <div className="rr-journeys-inner">
            <p className="rr-eyebrow" style={{ textAlign: "center" }}>
              The stories
            </p>
            <h1
              className="rr-section-title"
              style={{ fontSize: "1.9rem", fontWeight: 500 }}
            >
              Three mysteries. Three trails followed.
            </h1>
            <div className="rr-cards">
              {stories.map((j) => (
                <article key={j.link} className="rr-card">
                  <div className="rr-card-media">
                    <a href={j.link} aria-label={`Read: ${j.title}`}>
                      <img
                        src={j.image.src}
                        alt={j.image.alt}
                        className={j.image.contain ? "rr-contain" : undefined}
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <p className="rr-card-eyebrow">{j.eyebrow}</p>
                  <h3>
                    <a href={j.link}>{j.title}</a>
                  </h3>
                  <p className="rr-card-teaser">
                    {j.teaser}{" "}
                    <a className="rr-inline-link" href={j.link}>
                      Read the story →
                    </a>
                  </p>
                </article>
              ))}
            </div>
            <p
              style={{
                textAlign: "center",
                fontFamily: "var(--narrative)",
                fontSize: "1rem",
                marginTop: "1.8rem",
              }}
            >
              And after any of them:{" "}
              <a
                className="rr-inline-link"
                href="/dna-surprises"
              >
                What a DNA surprise means — and how I handle them →
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="rr-close">
        <h2>Where does your trail begin?</h2>
        <p className="rr-close-sub">
          A conversation costs nothing and obligates nothing.
        </p>
        <a className="rr-btn" href="/#discovery-call">
          Book a discovery call
        </a>
      </footer>
    </div>
  );
}
