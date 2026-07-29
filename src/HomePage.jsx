import { useState } from "react";
import "./homepage.css";
import FooterLegal from "./FooterLegal";

/*
  Roots & Road — Homepage (revision 26 Jul 26 per Donna's site notes)
  - Hero widened so the statement sets on three lines at full width
  - Global type sizes increased
  - Process steps 01/02/03 are clickable and expand with detail + thumbnails
  - Journeys band retitled; card copy updated per notes
  - Story section: real photo + Donna's new copy

  TODO:
  - [ ] 02 The story: sample Identity Journal to link when Donna creates it
  - [ ] 03 The journey: full Scottish itinerary page to build; link it here
  - [ ] Research thumbnails: confirm the four image assignments read right
  - [ ] DISCOVERY_URL still needs the real scheduling link
*/

const DISCOVERY_URL = "#discovery-call"; // TODO: replace with scheduling link

const journeys = [
  {
    id: "mike",
    link: "/stories/mike",
    eyebrow: "Scotland · Quebec · Michigan · Kansas City",
    title: "The man who called himself Mike",
    teaser:
      "Finding the thread backwards from Kansas City to Aberdeen, Scotland — and the moment Robeson was revealed to be Robertson.",
    image: {
      src: "/assets/aberdeen-card.jpg",
      alt: "Watercolor of Aberdeen's harbor at dusk, spires and masts against a heavy sky",
    },
  },
  {
    id: "jessie",
    link: "/stories/jessie",
    eyebrow: "Nashville, Tennessee",
    title: "The secrets Jessie kept",
    teaser:
      "Born into the bustling Nashville of the late 1800s. Part of the Nashville social scene. Her three sons adored her. A century later, DNA revealed the rest of her story — and what an enigma she was.",
    image: {
      src: "/assets/jessie/divorce-1903.png",
      alt: "1903 newspaper item headed 'Wants a Divorce': Jessie B. Warner entered suit for absolute divorce from J. Henry Warner",
      contain: true,
    },
    rotated: true,
  },
  {
    id: "bennett",
    link: "/stories/bennetts",
    eyebrow: "Colonial Virginia",
    title: "Now we are Bennetts",
    teaser:
      "A surprising DNA result, a change in surname, and the discovery of seven generations traced to colonial Virginia instead of Baden-Baden, Germany.",
    image: {
      src: "/assets/bennett-card.jpg",
      alt: "Handwritten colonial-era record page, browned with age",
    },
    stamp: "7th VA · 1777",
  },
];

const steps = [
  {
    id: "research",
    num: "01",
    title: "The research",
    short:
      "Records, archives, and DNA you choose to share — until your people become people.",
    detail: (
      <>
        <p>
          Doing the research is a labor of love and curiosity. I love a good
          story, and finding it is a passion project. But I will need
          starting points: names, birth dates and places, occupations,
          family lore. Small clues often make the difference.
        </p>
        <p>
          I have premium access to many archives, and when needed I&rsquo;ll
          seek access to others. Because of privacy rules for living
          persons, finding records from the past 25&ndash;50 years is more
          difficult than finding pre-1950 records in the USA, for example.
          I&rsquo;ll search the databases, newspaper archives, genealogy
          compilations in books, old family files. If you choose DNA
          testing,{" "}
          <a className="rr-inline-link" href="/dna-surprises">
            we can discuss what that adds to the overall picture
          </a>
          .
        </p>
        <p>
          <a className="rr-inline-link" href="/methodology">
            Read more about my methodology →
          </a>
        </p>
      </>
    ),
    thumbs: [
      {
        src: "/assets/research-census.jpg",
        alt: "1880 United States census page from Port Huron, Michigan",
      },
      {
        src: "/assets/research-clip.jpg",
        alt: "Port Huron Times front page with a death notice and portrait",
      },
      {
        src: "/assets/research-directory.jpg",
        alt: "An 1814 Scottish parish register page of marriage banns",
      },
      {
        src: "/assets/research-book.jpg",
        alt: "Title page of an 1890 Michigan Pioneer and Historical Society volume",
      },
    ],
  },
  {
    id: "story",
    num: "02",
    title: "The story",
    short:
      "Your family's story, told whole — bound into an Identity Journal to carry and pass down.",
    detail: (
      <>
        <p>
          Research produces facts; the Identity Journal turns them into your
          family&rsquo;s story. Records, photographs, maps, and narrative,
          composed into a keepsake made to be read, carried on the journey,
          and passed down.
        </p>
        <p>
          <em>A sample Identity Journal is being prepared &mdash; it will be
          shown here soon.</em>
        </p>
      </>
    ),
    thumbs: [],
  },
  {
    id: "journey",
    num: "03",
    title: "The journey",
    short:
      "An itinerary designed around your story, arranged with trusted travel partners.",
    detail: (
      <>
        <p>
          The itinerary is where the research becomes a road: the streets
          your ancestors walked, the parishes where they were christened,
          the harbors they sailed from — sequenced into a journey that is
          yours alone. I design the route and the story; licensed travel
          partners handle the bookings.
        </p>
        <p>
          <em>My own Scottish itinerary &mdash; Quebec City to Aberdeen
          &mdash; is being prepared as a full sample page and will be linked
          here.</em>
        </p>
      </>
    ),
    thumbs: [],
  },
];

export default function HomePage() {
  const [openStep, setOpenStep] = useState(null);
  const open = steps.find((s) => s.id === openStep);

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
          <a href="/stories">Story</a>
          <a href="#how-it-works">How it works</a>
          <a href="/journeys">Journeys</a>
          {/* TODO: restore when pages are built:
          <a href="/services">Services</a>
          <a href="/faq">FAQ</a> */}
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

        {/* ---------------- Process (expandable) ---------------- */}
        <section className="rr-process-wrap" id="how-it-works" aria-label="How Roots and Road works">
          <div className="rr-process">
            {steps.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`rr-step rr-step-btn${
                  openStep === s.id ? " rr-step-open" : ""
                }`}
                aria-expanded={openStep === s.id}
                onClick={() =>
                  setOpenStep(openStep === s.id ? null : s.id)
                }
              >
                <p className="rr-step-num">{s.num}</p>
                <h2>{s.title}</h2>
                <p>{s.short}</p>
                <span className="rr-step-more" aria-hidden="true">
                  {openStep === s.id ? "− close" : "+ more"}
                </span>
              </button>
            ))}
          </div>
          {open && (
            <div className="rr-step-panel">
              <div className="rr-step-panel-text">{open.detail}</div>
              {open.thumbs.length > 0 && (
                <div className="rr-step-thumbs">
                  {open.thumbs.map((t) => (
                    <img key={t.src} src={t.src} alt={t.alt} loading="lazy" />
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* ---------------- Sample journeys ---------------- */}
        <section className="rr-journeys" id="stories">
          <img
            className="rr-journeys-wash"
            src="/assets/journeys-wash.jpg"
            alt=""
            aria-hidden="true"
          />
          <div className="rr-journeys-veil" aria-hidden="true" />
          <div className="rr-journeys-inner">
            <p className="rr-eyebrow">The stories</p>
            <h2 className="rr-section-title">
              Three mysteries. Three trails followed.
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
                    {j.link ? (
                      <a href={j.link} aria-label={`Read: ${j.title}`}>
                        <img
                          src={j.image.src}
                          alt={j.image.alt}
                          className={j.image.contain ? "rr-contain" : undefined}
                          loading="lazy"
                        />
                      </a>
                    ) : (
                      <img
                        src={j.image.src}
                        alt={j.image.alt}
                        className={j.image.contain ? "rr-contain" : undefined}
                        loading="lazy"
                      />
                    )}
                  </div>
                  <p className="rr-card-eyebrow">{j.eyebrow}</p>
                  <h3>{j.link ? <a href={j.link}>{j.title}</a> : j.title}</h3>
                  <p className="rr-card-teaser">
                    {j.teaser}
                    {j.link && (
                      <>
                        {" "}
                        <a className="rr-inline-link" href={j.link}>
                          Read the story →
                        </a>
                      </>
                    )}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Story teaser ---------------- */}
        <section className="rr-story" id="story">
          <div className="rr-story-photo rr-story-photo-img">
            <img
              src="/assets/donna.jpg"
              alt="Donna at work among documents and maps"
            />
          </div>
          <div className="rr-story-copy">
            <p className="rr-eyebrow">The story behind Roots &amp; Road</p>
            <h2>I followed my own trail first.</h2>
            <p>
              Decades of research, scraps handed down from uncles, aunts,
              distant cousins. Insights shared by fellow researchers,
              entries in old Bibles, stories told by my grandparents. And a
              big DNA surprise in my own family led me down many paths. I
              have followed them all and continue to do so. I&rsquo;ve
              shared some of my journeys here — time travel back from my
              father&rsquo;s hometown of Nashville, Tennessee through the
              hills of North Carolina and Virginia to even Jamestown itself.
              Some ancestors arrived as the earliest colonists on both sides
              of my family. Others came in the 19th century, making a long,
              circuitous journey from Scotland to end up in Kansas City,
              where my mother was born. Each story is fascinating.{" "}
              <strong>Let me help you unravel yours.</strong>{" "}
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
        <FooterLegal />
      </footer>
    </div>
  );
}
