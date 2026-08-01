import "./homepage.css";
import { BOOKING_URL } from "./booking";
import "./jessie.css";
import FooterLegal from "./FooterLegal";

/*
  Privacy — PLACEHOLDER. Donna to write the full policy.
  The interim text below states only what is safely true of the site today.
*/

export default function PrivacyPage() {
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
          <a className="rr-btn rr-btn-nav" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Discovery call
          </a>
        </nav>
      </header>

      <main>
        <section className="j-strata" style={{ borderTop: "none" }}>
          <p className="j-stratum-label">Privacy</p>
          <div className="j-prose">
            <h1
              style={{
                fontWeight: 500,
                fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)",
                textAlign: "center",
                margin: "0 0 1.4rem",
              }}
            >
              Your family's story stays yours.
            </h1>
            <p>
              Privacy isn't a legal page for this business — it's the
              foundation of it. Client research, records, DNA results you
              choose to share, and everything we discuss stay confidential.
              Nothing about your family is ever published, shared, or used
              as an example without your explicit written permission.
            </p>
            <p>
              This website does not run advertising and does not sell data.
            </p>
            <p>
              <em>
                A full privacy policy is being prepared and will appear here.
                In the meantime, questions are welcome at{" "}
                <a className="rr-inline-link" href="mailto:donna@rootsnroad.com">
                  donna@rootsnroad.com
                </a>
                .
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
