import { useState } from "react";
import "./homepage.css";
import "./jessie.css";

/*
  Roots & Road — Case study: The Secrets Jessie Kept
  Narrative source: Donna's draft "When the Matches Don't Match" (her first-person voice).
  Layering rules: readable text on calm surfaces; max two rotated elements + one stamp per viewport.

  TODO before this page goes public:
  - [ ] Living-relatives review (standing gate for DNA content)
  - [ ] Confirm "Raymond and Lonnie" = Raymer and Alonzo before keeping that caption line
  - [ ] Birthday Celebration clipping date (waypoint wears TBC until confirmed)
  - [ ] James's death year (TBC)
  - [ ] Birth-year treatment: currently states Aug 1879 per the 1900 census and
        annotates the obituary discrepancy — change if Donna rules otherwise
  - [ ] Closing coda is NEW copy in Donna's voice — needs her approval
  - [ ] jessie-wash.jpg is a stand-in; swap for her chosen wash when ready
*/

const A = "/assets/jessie";

function Waypoint({ date, tbc, place, children, media, rotate }) {
  return (
    <div className="jw">
      <div className="jw-marker">
        <span className="jw-dot" aria-hidden="true" />
        <p className="jw-date">
          {date}
          {tbc && <span className="jw-tbc">date TBC</span>}
        </p>
        {place && <p className="jw-place">{place}</p>}
      </div>
      <div className="jw-body">
        {media && (
          <figure className={`jw-media${rotate ? " jw-media-rotated" : ""}`}>
            <img src={media.src} alt={media.alt} loading="lazy" />
            {media.caption && <figcaption>{media.caption}</figcaption>}
          </figure>
        )}
        <div className="jw-text">{children}</div>
      </div>
    </div>
  );
}

export default function JessiePage() {
  const [zoomed, setZoomed] = useState(false);

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
          <a href="/journeys">Journeys</a>
          <a className="rr-btn rr-btn-nav" href="/#discovery-call">
            Discovery call
          </a>
        </nav>
      </header>

      <main>
        {/* ---------- Hero: the portrait ---------- */}
        <section className="j-hero">
          <img className="j-wash" src={`${A}/jessie-wash.jpg`} alt="" aria-hidden="true" />
          <div className="j-veil" aria-hidden="true" />
          <div className="j-hero-inner">
            <figure className="j-portrait">
              <img
                src={`${A}/portrait.jpg`}
                alt="Hand-tinted portrait of Jessie Byrd Raymer Warner in profile, dark dress with a wide lace collar"
              />
              <figcaption>The only portrait. Hand-tinted, date unknown.</figcaption>
            </figure>
            <div className="j-hero-copy">
              <p className="rr-eyebrow">A sample journey · Nashville, Tennessee</p>
              <h1>The secrets Jessie kept</h1>
              <p className="j-lede">
                All of Nashville knew her. Her sons adored her. She was, by
                every telling, the heart of her family — and for a hundred
                years, part of her story stayed hidden in plain sight.
              </p>
              <p className="j-byline">
                Researched and told by Donna, from her own family record.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- The question ---------- */}
        <section className="j-strata">
          <p className="j-stratum-label">Layer one — the question</p>
          <div className="j-prose">
            <p>Let me tell you about my great-grandmother.</p>
            <p>
              Jessie Byrd Raymer was eleven months old when her mother died.
              Her father, Thomas Langford Raymer Sr., was left with a baby
              girl and four young sons, and he did what widowed men of his era
              so often did: he remarried within the year. Two years later, the
              family absorbed another blow that is almost unthinkable now —
              one of Jessie&rsquo;s brothers, just twelve years old, was
              kidnapped and murdered.
            </p>
            <p>
              Grief kept its seat at the Raymer table. Jessie grew up amid the
              noise and commerce of her stepmother&rsquo;s Nashville saloon,
              in a household that had learned, over and over, how to carry
              loss. When Jessie was seven, her half-sister Katie Ilene was
              born. Remember Katie. She matters.
            </p>
          </div>
        </section>

        {/* ---------- Timeline ---------- */}
        <section className="j-timeline" aria-label="Jessie's documented timeline">
          <div className="j-route" aria-hidden="true" />

          <Waypoint date="August 23, 1881" place="Tennessee">
            <h3>Born</h3>
            <p>
              Jessie Byrd Raymer is born in Tennessee — a daughter after four
              sons, and motherless before her first birthday.
            </p>
          </Waypoint>

          <Waypoint
            date="May 1899"
            place="Nashville"
            media={{
              src: `${A}/license-1899.jpg`,
              alt: "Marriage licenses column from The Tennessean, May 4, 1899, listing J. H. S. Warner and Jessie B. Raymer",
              caption: "The Tennessean, May 4, 1899.",
            }}
            rotate
          >
            <h3>A license is issued</h3>
            <p>
              Two lines in a newspaper column: J. H. S. Warner and Jessie B.
              Raymer. He is a decade her senior, from a well-known family of
              Nashville&rsquo;s German butchers, once married and annulled.
              She is seventeen.
            </p>
          </Waypoint>

          <Waypoint
            date="June 1900"
            place="Nashville, Ward 9"
            media={{
              src: `${A}/census-1900.jpg`,
              alt: "1900 United States census page for Nashville, Davidson County, with the Warner household highlighted",
              caption:
                "No birth record for Jessie exists; the Twelfth Census is the first document to record her. She gave her birth as August 1879 — rounding herself up, most likely. A very young wife of an older, divorced man.",
            }}
          >
            <h3>The census finds them</h3>
            <p>
              James H. Warner, bill clerk, and Jessie B., wife, married one
              year. A tidy line in a ledger. The paper trail suggests the
              household was anything but gentle.
            </p>
          </Waypoint>

          {/* ---------- The 1903 zoom moment ---------- */}
          <div className="jw jw-featured">
            <div className="jw-marker">
              <span className="jw-dot jw-dot-gold" aria-hidden="true" />
              <p className="jw-date">October 7, 1903</p>
              <p className="jw-place">Circuit Court, Nashville</p>
            </div>
            <div className="jw-body jw-body-stack">
              <div className="jw-text">
                <h3>Four lines in a noisy page</h3>
                <p>
                  This is what discovery feels like. An entire day&rsquo;s
                  world — a murder trial, a Sunday lesson, the Syrup of Figs
                  company — and buried in a middle column, four lines that
                  change a family&rsquo;s story.
                </p>
              </div>
              <figure className="j-zoom">
                {zoomed ? (
                  <img
                    src={`${A}/divorce-1903.png`}
                    alt="Close view of the item headed 'Wants a Divorce': In the Circuit Court Wednesday Jessie B. Warner entered suit for absolute divorce from J. Henry Warner"
                  />
                ) : (
                  <img
                    src={`${A}/nashville-american-1903.jpg`}
                    alt="Full page 10 of The Nashville American, October 8, 1903, dense with columns and advertisements"
                  />
                )}
                <figcaption>
                  The Nashville American, October 8, 1903 — page 10.
                </figcaption>
                <button
                  type="button"
                  className="j-zoom-btn"
                  onClick={() => setZoomed(!zoomed)}
                >
                  {zoomed ? "See the whole page" : "Find the four lines"}
                </button>
              </figure>
              <div className="jw-text">
                <p>
                  <em>
                    &ldquo;In the Circuit Court Wednesday Jessie B. Warner
                    entered suit for absolute divorce from J. Henry
                    Warner.&rdquo;
                  </em>{" "}
                  She filed — and then she withdrew the petition. Whether she
                  lost her nerve or her options, no record says. In 1903,
                  the doors open to her were few.
                </p>
              </div>
            </div>
          </div>

          <Waypoint
            date="August 23, 1904"
            place="Evansville, Indiana"
          >
            <h3>Joseph Henry &ldquo;Jody&rdquo; is born</h3>
            <p>
              Ten months after the withdrawn petition, Jessie&rsquo;s first
              son is born — not in Nashville, but across the Ohio River in
              Indiana. James knew the child was not his, and took her out of
              the state to give birth, far from Nashville eyes. The family
              simply came home with a son.
            </p>
          </Waypoint>

          <Waypoint date="August 30, 1907" place="Nashville">
            <h3>Langford Raymer &ldquo;Bubbie&rdquo; is born</h3>
            <p>
              Her second son carries her family in both names — Langford, her
              father&rsquo;s middle name; Raymer, her own maiden name,
              stitched into the next generation.
            </p>
          </Waypoint>

          <Waypoint date="June 1911" place="Nashville">
            <h3>Felix Alonzo &ldquo;Lonnie&rdquo; is born</h3>
            <p>
              The youngest — named for two of Jessie&rsquo;s brothers, and
              &ldquo;Lonnie&rdquo; his whole life. My grandfather. In the
              year before his birth, Katie — Jessie&rsquo;s half-sister, now
              married to a man named William Bennett — had moved with her
              husband into Nashville, taking up residence near the Warner
              household. Hold that thought, the way the family held it: not
              at all, for a hundred years.
            </p>
          </Waypoint>

          <Waypoint
            date="January 12, 1916"
            place="Nashville"
            media={{
              src: `${A}/tanlac-1916.jpg`,
              alt: "Tanlac advertorial from The Tennessean headed 'Henry Warner says he now feels like his old self again'",
              caption:
                "The Tennessean, January 12, 1916. The address — 1612 Fourth Avenue North — ties the testimonial to James Henry Warner.",
            }}
          >
            <h3>The man the whole city knew</h3>
            <p>
              A patent-medicine advertorial puts James in print:
              &ldquo;one of the biggest men in Nashville,&rdquo; formerly 310
              pounds in his stocking feet, the well-known grocer and meat
              market man. Even the ads knew the Warners.
            </p>
          </Waypoint>

          <Waypoint
            date="January 28, 1916"
            place="Nashville"
            media={{
              src: `${A}/birthday-party.jpg`,
              alt: "Society column headed 'Birthday Celebration' describing a fancy dress party, listing Joseph, Raymond and Lonnie Warner among the guests and Mrs. Henry Warner assisting the hostess",
              caption:
                "Nashville Banner, January 28, 1916. The boys went by their nicknames all their lives — and the paper misquoted Raymer, Jessie's own maiden name, as 'Raymond.'",
            }}
            rotate
          >
            <h3>Social Jessie</h3>
            <p>
              Sixteen days after the Tanlac ad, the society column: a
              fancy-dress children&rsquo;s party, streamers of pink and
              white, a Teddy bear contest — and there she is, helping the
              hostess, her three boys among the guests. She dressed her sons
              so beautifully she wouldn&rsquo;t let them get dirty. They
              would do anything for her.
            </p>
          </Waypoint>

          <Waypoint
            date="March 22, 1926"
            place="Nashville"
            media={{
              src: `${A}/james-obituary-1926.jpg`,
              alt: "Death notice for James Henry Warner from The Tennessean, March 23, 1926, listing his survivors and pallbearers",
              caption:
                "The Tennessean, March 23, 1926. Among the honorary pallbearers: P. W. Warner — the cousin Jessie would marry three years later, almost to the month.",
            }}
          >
            <h3>James dies</h3>
            <p>
              At his home at 1004 Forest Avenue, at 10:18 on a Monday
              morning. Heart failure, at fifty-four. Requiem high mass at the
              Church of the Holy Name; interment at Mt. Olivet. The notice
              names his survivors: his wife, Jessie Raymer Warner, and his
              sons — all three of them, all Warners, whatever the years had
              kept to themselves.
            </p>
          </Waypoint>

          <Waypoint
            date="February 6, 1929"
            place="Robertson County, Tennessee"
            media={{
              src: `${A}/percy-license-1929.jpg`,
              alt: "Tennessee marriage license authorizing the rite of matrimony between P. W. Warner and Jessie B. Warner, February 6, 1929",
              caption:
                "Licensed and married the same day. Percy, too, had been married and divorced before.",
            }}
          >
            <h3>She marries Percy Warner</h3>
            <p>
              A cousin of her late husband. She enters the marriage a Warner
              and leaves it a Warner — the name held fast around her for the
              rest of her life, whatever the chromosomes had to say.
            </p>
          </Waypoint>

          <Waypoint date="About 1947" place="Miami, Florida">
            <h3>She leaves Nashville</h3>
            <p>
              After a lifetime in one city, Jessie moves south — near Joseph,
              her firstborn, the Indiana baby, now of Miami.
            </p>
          </Waypoint>

          <Waypoint date="August 1958" place="Miami">
            <h3>A fourth great-grandchild is born</h3>
            <p>
              The obituary five months later will count four
              great-grandchildren. One of them is me.
            </p>
          </Waypoint>

          <Waypoint
            date="February 21, 1959"
            place="Miami · buried in Nashville"
            media={{
              src: `${A}/obituary-1959.jpg`,
              alt: "Obituary for Mrs. Jessie B. Warner from The Miami News, February 22, 1959",
              caption:
                "The Miami News, February 22, 1959. 'Bird,' the paper spelled it — the family wrote Byrd. Even at the end, the record drifts.",
            }}
          >
            <h3>Jessie dies</h3>
            <p>
              Aged 77. Three sons, a brother, six grandchildren, four
              great-grandchildren. Services and burial in Nashville, the
              city that knew her.
            </p>
          </Waypoint>
        </section>

        {/* ---------- The reveal ---------- */}
        <section className="j-strata j-strata-deep">
          <p className="j-stratum-label">Layer five — the reveal</p>
          <div className="j-prose">
            <p>
              For a hundred years, that was the record. Names, dates, a
              marriage, three sons, the ordinary architecture of a family
              tree.
            </p>
            <p>Then a dozen of us spit into tubes.</p>
            <p>
              When our DNA results came back, we found close cousin matches
              none of us could place — and, more telling, an absence. Not one
              of us matched the Warner line we descended from on paper. The
              butchers of Nashville, the formidable patriarch, the whole
              expected branch: silent.
            </p>
            <p>
              The matches pointed somewhere else. They pointed to William
              Bennett — Katie&rsquo;s husband. My grandfather Felix had not
              been fathered by James Warner at all, but by the husband of
              Jessie&rsquo;s own half-sister, living conveniently nearby in
              those years.
            </p>
            <p>
              No one alive had known. Or almost no one. When I brought the
              findings to family, the eldest among us wasn&rsquo;t shocked.
              The affair that produced Jessie&rsquo;s <em>first</em> son had
              been known once, and quietly kept. The later chapters were
              news, but the character of the story was not. The family had
              simply stopped telling it.
            </p>
          </div>
        </section>

        {/* ---------- The meaning ---------- */}
        <section className="j-strata">
          <p className="j-stratum-label">Layer six — the meaning</p>
          <div className="j-prose">
            <p>
              Here is what surprised me most about the surprise: it
              didn&rsquo;t feel like scandal. It felt like understanding.
            </p>
            <p>
              Suddenly Jessie was not a name and a pair of dates. She was a
              motherless girl raised in a saloon, married young to a harsh
              man twice her size, filing for divorce and then losing her
              nerve — or her options. She was a woman in 1910 with almost no
              doors open to her, and she found one anyway. I don&rsquo;t have
              to approve of every choice she made to recognize that I exist
              because of them. My grandfather, my father, me — we all walked
              out of that door she found.
            </p>
            <p>
              And this is the part I keep returning to. When Jessie died in
              Miami in the winter of 1959, the newspaper counted her legacy:
              three sons, six grandchildren, four great-grandchildren. I was
              the fourth — six months old, too young to remember her. The
              obituary couldn&rsquo;t have known that one of the four would
              grow up to open the envelope, follow the records back to
              Nashville, and find her secrets. Or that finding them would
              make me love her more, not less.
            </p>
            <p>
              I didn&rsquo;t lose a great-grandmother. I gained one.
            </p>
          </div>
        </section>
      </main>

      <footer className="rr-close">
        <h2>What might your records be keeping?</h2>
        <p className="rr-close-sub">
          Every family has a Jessie. A conversation costs nothing and
          obligates nothing.
        </p>
        <a className="rr-btn" href="/#discovery-call">
          Book a discovery call
        </a>
        <p className="rr-colophon">
          Roots &amp; Road · Identity Adventures · Sources: U.S. Census 1900;
          The Tennessean 1899, 1916, 1926; The Nashville American 1903; Tennessee
          marriage records; The Miami News 1959; family research by Donna
        </p>
      </footer>
    </div>
  );
}
