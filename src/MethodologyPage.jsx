import "./homepage.css";
import "./jessie.css";
import FooterLegal from "./FooterLegal";

/*
  Methodology — PLACEHOLDER seeded from principles already published in the
  stories. Donna to expand into the full page.
*/

export default function MethodologyPage() {
  return (
    <div className="rr-page jessie">
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
          <a className="rr-btn rr-btn-nav" href="/#discovery-call">
            Discovery call
          </a>
        </nav>
      </header>

      <main>
        <section className="j-strata" style={{ borderTop: "none" }}>
          <p className="j-stratum-label">Methodology</p>
          <div className="j-prose">
            <h1
              style={{
                fontWeight: 500,
                fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)",
                textAlign: "center",
                margin: "0 0 1.4rem",
              }}
            >
              How the research is done
            </h1>
            <p>
              Every conclusion on this site — and in every client project —
              rests on records: censuses, church registers, tax lists, court
              files, deeds, newspapers, pension files, and DNA evidence that
              clients choose to share. A few working principles govern all
              of it:
            </p>
            <p>
              <strong>Evidence over lore.</strong> Family stories are
              rarely invented — more often they're unanchored: true things
              that drifted loose from their names and dates. The work is to
              anchor them, and to follow the evidence even when it declines
              to flatter or to condemn.
            </p>
            <p>
              <strong>Conflicts are flagged, not smoothed.</strong> When
              records disagree — a census and an obituary, two spellings of
              one name — the disagreement is noted honestly. Unverified
              dates are marked as such until a record settles them.
            </p>
            <p>
              <strong>Proof is a thread, and then a tide.</strong> Single
              documents rarely announce the answer; certainty accumulates
              until no other explanation stands. And some pieces stay
              missing: a finished family history isn't one with no gaps —
              it's one where the gaps can be looked at and bridged with
              reasonable assumptions, stated as such.
            </p>
            <p>
              <strong>The whole story, told with grace.</strong> Sensitive
              discoveries are treated as truth and part of the human
              tapestry — handled with care, never sensationalized, and
              never published without the permission of those affected.
            </p>
            <p>
              <em>
                A fuller methodology page — sources, standards, and how a
                client project unfolds — is being prepared.
              </em>
            </p>
          </div>
        </section>
      </main>

      <footer className="rr-close">
        <FooterLegal />
      </footer>
    </div>
  );
}
