import "./homepage.css";

/*
  Roots & Road — Homepage
  Design system: Cormorant Garamond (display) / Crimson Pro (narrative) / Source Sans 3 (UI)
  Palette: Deep Forest #2d4a3e · Sage #8fa68c · Ocean #4a6d7c · Parchment #f5f0e6 · Golden Sand #c9a66b · Stone #6b6b6b
  Layering rules: max two rotated elements + one stamp per viewport; text always on a calm surface.

  TODO before launch:
  - [ ] Replace placeholder blocks marked data-placeholder (Bennett record scan, photo of Donna)
  - [ ] Point the Discovery Call buttons at the real scheduling link (search for DISCOVERY_URL)
  - [ ] Living-relatives review: Jessie + Bennett cards reference family DNA discoveries
  - [ ] Confirm public wording of the service-scope line in the footer
*/

const DISCOVERY_URL = "#discovery-call"; // TODO: replace with scheduling link

const journeys = [
  {
    id: "mike",
    eyebrow: "Scotland · Quebec · Kansas City",
    title: "The man who called himself Mike",
    teaser:
      "Kansas City to Quebec City to Aberdeen — and the moment Robertson became Robeson.",
    image: {
      src: "/assets/aberdeen-card.jpg",
      alt: "Watercolor of Aberdeen's harbor at dusk, spires and masts against a heavy sky",
    },
  },
  {
    id: "jessie",
    eyebrow: "Nashville, Tennessee",
    title: "The secrets Jessie kept",
    teaser:
      "All of Nashville knew her. Her sons adored her. A century later, DNA told the rest of her story.",
    image: {
      src: "/assets/divorce-clipping.png",
      alt: "1903 newspaper item headed 'Wants a Divorce': Jessie B. Warner entered suit for absolute divorce from J. Henry Warner",
      contain: true,
    },
    rotated: true,
  },
  {
    id: "bennett",
    eyebrow: "Colonial Virginia",
    title: "Now we are Bennetts",
    teaser:
      "A DNA result, a new surname, and seven generations traced to colonial Virginia.",
    placeholder: "Bennett record scan",
    stamp: "Est. 1709",
  },
];

export default function HomePage() {
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
          <a href="/story">Story</a>
          <a href="/how-it-works">How it works</a>
          <a href="/journeys">Journeys</a>
          <a href="/services">Services</a>
          <a href="/faq">FAQ</a>
          <a className="rr-btn rr-btn-nav" href={DISCOVERY_URL}>
            Discovery call
          </a>
        </nav>
      </header>

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="rr-hero">
          <img
            className="rr-hero-wash"
            src="/assets/hero-wash.jpg"
            alt=""
            aria-hidden="true"
          />
          <div className="rr-hero-veil" aria-hidden="true" />
          <div className="rr-hero-inner">
            <h1 className="rr-statement">
              Roots &amp; Road creates <em>Identity&nbsp;Adventures</em>
              —immersive journeys that reconnect people with the places,
              stories, and lives that shaped who they are.
            </h1>
            <div className="rr-rule" aria-hidden="true" />
            <p className="rr-hero-sub">
              I research your family&rsquo;s story, then design a journey to
              the places where it happened. Not a tour. A&nbsp;homecoming.
            </p>
            <a className="rr-btn" href={DISCOVERY_URL}>
              Begin with a conversation
            </a>
          </div>
        </section>

        {/* ---------------- Process ---------------- */}
        <section className="rr-process" aria-label="How Roots and Road works">
          <div className="rr-step">
            <p className="rr-step-num">01</p>
            <h2>The research</h2>
            <p>
              Records, archives, and DNA you choose to share — until your
              people become people.
            </p>
          </div>
          <div className="rr-step">
            <p className="rr-step-num">02</p>
            <h2>The story</h2>
            <p>
              Your family&rsquo;s story, told whole — bound into an Identity
              Journal to carry and pass down.
            </p>
          </div>
          <div className="rr-step">
            <p className="rr-step-num">03</p>
            <h2>The journey</h2>
            <p>
              An itinerary designed around your story, arranged with trusted
              travel partners.
            </p>
          </div>
        </section>

        {/* ---------------- Sample journeys ---------------- */}
        <section className="rr-journeys">
          <img
            className="rr-journeys-wash"
            src="/assets/journeys-wash.jpg"
            alt=""
            aria-hidden="true"
          />
          <div className="rr-journeys-veil" aria-hidden="true" />
          <div className="rr-journeys-inner">
            <p className="rr-eyebrow">Sample journeys</p>
            <h2 className="rr-section-title">
              Three families. Three trails followed.
            </h2>
            <div className="rr-cards">
              {journeys.map((j) => (
                <article
                  key={j.id}
                  className={`rr-card${j.rotated ? " rr-card-rotated" : ""}`}
                >
                  {j.stamp && (
                    <span className="rr-stamp" aria-hidden="true">
                      {j.stamp}
                    </span>
                  )}
                  <div className="rr-card-media">
                    {j.image ? (
                      <img
                        src={j.image.src}
                        alt={j.image.alt}
                        className={j.image.contain ? "rr-contain" : undefined}
                        loading="lazy"
                      />
                    ) : (
                      <p className="rr-placeholder" data-placeholder>
                        [ {j.placeholder} ]
                      </p>
                    )}
                  </div>
                  <p className="rr-card-eyebrow">{j.eyebrow}</p>
                  <h3>{j.title}</h3>
                  <p className="rr-card-teaser">{j.teaser}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Story teaser ---------------- */}
        <section className="rr-story">
          <div className="rr-story-photo" data-placeholder>
            <p className="rr-placeholder">
              [ photo of Donna — at the desk or on the road ]
            </p>
          </div>
          <div className="rr-story-copy">
            <p className="rr-eyebrow">The story behind Roots &amp; Road</p>
            <h2>I followed my own trail first.</h2>
            <p>
              Decades of research, a DNA surprise in my own family, and a road
              that led from Quebec City to a granite doorstep in Aberdeen.{" "}
              <a href="/story" className="rr-inline-link">
                Read my story →
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* ---------------- Closing call ---------------- */}
      <footer className="rr-close" id="discovery-call">
        <h2>Where does your trail begin?</h2>
        <p className="rr-close-sub">
          A conversation costs nothing and obligates nothing.
        </p>
        <a className="rr-btn" href={DISCOVERY_URL}>
          Book a discovery call
        </a>
        <p className="rr-colophon">
          Roots &amp; Road · Identity Adventures · Europe, the British Isles,
          Australia &amp; New Zealand, North America
        </p>
      </footer>
    </div>
  );
}
