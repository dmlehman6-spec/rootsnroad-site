import "./homepage.css";
import FooterLegal from "./FooterLegal";

/*
  Roots & Road — Journeys (/journeys)
  The TRAVEL side of the house: sample itineraries (Quebec City, Aberdeen,
  and future examples). Placeholder page until Donna writes the content —
  send text + itinerary details and this page gets the full build.
*/

export default function JourneysPage() {
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
          <a href="/stories">Story</a>
          <a href="/#how-it-works">How it works</a>
          <a className="rr-btn rr-btn-nav" href="/#discovery-call">
            Discovery call
          </a>
        </nav>
      </header>

      <main>
        <section className="rr-hero" style={{ minHeight: "50vh" }}>
          <img
            className="rr-hero-wash"
            src="/assets/hero-wash.jpg"
            alt=""
            aria-hidden="true"
          />
          <div className="rr-hero-veil" aria-hidden="true" />
          <div className="rr-hero-inner">
            <p className="rr-eyebrow" style={{ textAlign: "center" }}>
              Journeys
            </p>
            <h1
              className="rr-statement"
              style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)" }}
            >
              The research becomes a road.
            </h1>
            <div className="rr-rule" aria-hidden="true" />
            <p className="rr-hero-sub">
              Sample itineraries are being prepared — Quebec City and
              Aberdeen among them, drawn from journeys I've walked myself.
              Until then,{" "}
              <a className="rr-inline-link" href="/stories" style={{ fontStyle: "normal", fontWeight: 600 }}>
                the stories
              </a>{" "}
              show the research that shapes every road I design.
            </p>
            <a className="rr-btn" href="/#discovery-call">
              Begin with a conversation
            </a>
          </div>
        </section>
      </main>

      <footer className="rr-close">
        <p className="rr-colophon">
          Roots &amp; Road · Identity Adventures
        </p>
        <FooterLegal />
      </footer>
    </div>
  );
}
