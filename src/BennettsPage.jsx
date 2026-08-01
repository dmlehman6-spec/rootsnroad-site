import { useState } from "react";
import "./homepage.css";
import { BOOKING_URL } from "./booking";
import FooterLegal from "./FooterLegal";
import "./jessie.css";
import Lightbox from "./Lightbox";

/*
  Roots & Road — Case study: Now We Are Bennetts
  Narrative source: Donna's draft "roots-and-road-now-we-are-bennetts-draft.md",
  verbatim. Timeline runs IN REVERSE (Nashville 1911 back to the Revolution),
  matching how the line was walked — per the case-study library principle:
  the timeline runs the way the discovery ran.

  TODO before public:
  - [ ] Asset wishlist (placeholders marked below): William's WWI draft card,
        the 1910 Sumner County census page, a Griffin tax-list scan, Richard's
        1832 pension application page, and Samuel's 1811 conveyance
  - [ ] bennetts-wash.jpg is a stand-in — swap when Donna picks/paints one
        (Virginia red clay / Tennessee tones would suit)
  - [ ] Living-relatives: Felix's paternity is already public via Jessie's
        page (cleared); William's living descendants are unnamed here
*/

const A = "/assets/bennetts";

function Waypoint({ date, tbc, place, children, media, rotate, placeholder, onZoom }) {
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
            <button
              type="button"
              className="jw-zoombtn"
              onClick={() => onZoom && onZoom(media)}
              aria-label="View this document larger"
            >
              <img src={media.src} alt={media.alt} loading="lazy" />
            </button>
            {media.caption && <figcaption>{media.caption}</figcaption>}
          </figure>
        )}
        {placeholder && (
          <figure className="jw-media">
            <div
              style={{
                background: "#e9e2d2",
                minHeight: "110px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.6rem",
              }}
            >
              <p className="rr-placeholder" style={{ fontFamily: "var(--ui)", fontSize: "0.68rem", fontStyle: "italic", color: "#a89d84", textAlign: "center", margin: 0 }}>
                [ {placeholder} ]
              </p>
            </div>
          </figure>
        )}
        <div className="jw-text">{children}</div>
      </div>
    </div>
  );
}

export default function BennettsPage() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <div className="rr-page jessie" id="top">
      <header className="rr-nav">
        <a className="rr-wordmark" href="/" aria-label="Roots and Road home">
          <span className="rr-wordmark-name">
            ROOTS <em>&amp;</em> ROAD
          </span>
          <span className="rr-wordmark-tag">Identity Adventures</span>
        </a>
        <nav aria-label="Primary">
          <a href="/">Home</a>
          <a href="/stories">All stories</a>
          <a className="rr-btn rr-btn-nav" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Discovery call
          </a>
        </nav>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section className="j-hero">
          <img
            className="j-wash"
            src={`${A}/bennetts-wash.jpg`}
            alt=""
            aria-hidden="true"
          />
          <div className="j-veil" aria-hidden="true" />
          <div className="j-hero-inner">
            <figure className="j-portrait">
              <img
                src={`${A}/muster-roll-1777.jpg`}
                alt="Handwritten 1777 muster roll of Captain Reuben Lipscomb's Company, 7th Virginia Regiment, with Richard Bennitt among the names"
              />
              <figcaption>
                Muster roll, Capt. Reuben Lipscomb's Company, 7th Virginia
                Regiment, September 1777 — Richard Bennitt, present.
              </figcaption>
            </figure>
            <div className="j-hero-copy">
              <p className="rr-eyebrow">
                One journey of discovery · Nashville · Tennessee · Kentucky ·
                Colonial Virginia
              </p>
              <h1>Now we are Bennetts</h1>
              <p className="j-lede">
                What happens after the DNA surprise: meeting the family you
                never knew was yours.
              </p>
              <p className="j-byline">
                Researched and told by Donna, from her own family record.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Opening ---------- */}
        <section className="j-strata">
          <p className="j-stratum-label">A second inheritance</p>
          <div className="j-prose">
            <p>
              I've written before about{" "}
              <a className="rr-inline-link" href="/stories/jessie">
                the day the matches didn't match
              </a>{" "}
              — when a dozen of us tested our DNA and my father's line, the
              Warners of Nashville, went silent in our results. The trail
              pointed instead to a man named William Bennett, husband of my
              great-grandmother's half-sister, and revealed that my
              grandfather Felix had been fathered outside his mother's
              marriage.
            </p>
            <p>
              That piece was about the surprise. This one is about what
              comes after.
            </p>
            <p>
              Because here is the strange arithmetic of a DNA discovery: you
              don't lose a family tree. You gain one. The Warner branches I
              grew up in are still mine — the stories, the cousins, the name
              I was born with. But grafted alongside them now stands an
              entire lineage that was always in our blood and never in our
              story. Seven generations of it, as it turns out, reaching back
              before America was America.
            </p>
            <p>So I did what I do. I went and met them.</p>

            <h2>William, the huckster</h2>
            <p>
              Start with the man himself. William Edgar Bennett was born in
              October 1884 in Sumner County, Tennessee, a farmer's youngest
              son. By his twenties he'd come into Nashville, and the city
              directories track him year by year through the honest,
              unglamorous occupations of a working man: laborer, driver,
              clerk, and finally — the word I've come to love —{" "}
              <em>huckster</em>. Not the modern insult; the old trade. A
              huckster drove a wagon through the neighborhoods selling
              produce, calling his wares. That was Felix's biological
              father: a man selling vegetables from a cart on the streets of
              Nashville.
            </p>
            <p>
              His World War I draft card even tells me what he looked like.
              Tall. Slender. Brown eyes, light hair. I confess I've pulled
              out photographs of my grandfather and studied them differently
              since.
            </p>
            <p>
              The records also quietly corroborate the how of it all. In
              April 1910, the census taker found William and his wife Katie
              living in Sumner County <em>in the very next household</em> to
              Katie's father, Thomas Raymer — the same farm my
              great-grandmother Jessie regularly visited. By the 1911
              directory, William and Katie had moved into Nashville, near
              the Warner household. My grandfather was born in June 1911. I
              don't need to spell out the geometry; the census and the
              calendar do it for me.
            </p>
            <p>
              I want to be careful with William, though, because it would be
              easy to cast him as just the other man — and his own life
              gives me no appetite for that. Katie died young, only thirty.
              William was left a widower with four children, the youngest
              still small. He remarried late, in his mid-forties, had three
              more children — and buried one of them, a twin daughter, as a
              toddler. Then he died himself at fifty. Whatever he was to
              Jessie in 1910, the fuller record shows a man who hauled a
              hard life a long way. In my family we have a saying now,
              learned the slow way: nobody in the tree is a villain or a
              saint. They're all just people, caught in their moment.
            </p>
            <p>
              From William, the trail runs back through Middle Tennessee
              like a wagon road. Follow it the way I walked it: backward.
            </p>
          </div>
        </section>

        {/* ---------- Timeline in reverse: Nashville to the state line ---------- */}
        <section
          className="j-timeline"
          aria-label="The Bennett line in reverse, part one: Nashville to Sumner County"
        >
          <div className="j-route" aria-hidden="true" />

          <Waypoint onZoom={setLightbox} date="June 1911" place="Nashville, Tennessee">
            <h3>Felix is born</h3>
            <p>
              My grandfather — raised a Warner, a Bennett in his blood, and
              never once told.{" "}
              <a className="rr-inline-link" href="/stories/jessie">
                His mother's story is its own journey.
              </a>
            </p>
          </Waypoint>

          <Waypoint onZoom={setLightbox}
            date="April 1910"
            place="Sumner County, Tennessee"
            media={{
              src: `${A}/census-1910-sumner.jpg`,
              alt: "1910 census page for Sumner County, Tennessee, with the household of Edward Bennett and wife Katie highlighted, directly below the household of Thomas Raymer",
              caption:
                "'Bennett, Edward' — the same man the draft card calls William Edgar. Even middle names drifted in this family. And directly above him on the page: Raymer, Thos. — Katie's father, next household over.",
            }}
          >
            <h3>The geometry</h3>
            <p>
              The census taker finds William and Katie in the very next
              household to Katie's father, Thomas Raymer — the farm Jessie
              regularly visited. By the 1911 directory they've moved into
              Nashville, near the Warner household. The census and the
              calendar spell the rest.
            </p>
          </Waypoint>

          <Waypoint onZoom={setLightbox}
            date="October 1884"
            place="Sumner County, Tennessee"
            media={{
              src: `${A}/draft-card-1918.jpg`,
              alt: "William Edgar Bennett's 1918 World War I draft registration card, both sides: occupation huckster, self-employed, 1417 Fourth Avenue South, Nashville; tall, slender build, brown eyes, light hair",
              caption:
                "Registered September 1918: occupation, huckster; employer, self; home, 1417 Fourth Avenue South — the other end of the avenue where Henry Warner kept his grocery. Tall, slender, brown eyes, light hair.",
            }}
            rotate
          >
            <h3>William Edgar Bennett is born</h3>
            <p>
              A farmer's youngest son. The Nashville directories will track
              him through laborer, driver, clerk, and at last{" "}
              <em>huckster</em> — a man selling vegetables from a wagon,
              calling his wares.
            </p>
          </Waypoint>

          <Waypoint onZoom={setLightbox} date="1876" place="Sumner County, Tennessee">
            <h3>George Washington Bennett marries Bettie Smith</h3>
            <p>
              William's father — except when he was G.W., except when, on
              one census, he decided he was "James." A farmer who worked the
              land until he slipped out of the records sometime after 1900,
              leaving no death record and no found grave.
            </p>
          </Waypoint>

          <Waypoint onZoom={setLightbox}
            date="About 1815"
            place="The Tennessee–Kentucky line"
            media={{
              src: `${A}/census-1850.jpg`,
              alt: "1850 census page with the household of Richard Bennett, 35, farmer, and Mary, with children William, Thomas, Elizabeth, Caroline, Harriett, Adelade, and George",
              caption:
                "The 1850 census: Richard, 35, farmer, and Mary 'Polly' (Stovall) — and at the bottom of the household, George, age 3: William's father, my line, three years old on a farm ledger.",
            }}
          >
            <h3>Richard Bennett is born</h3>
            <p>
              George's father spent his whole life shuttling across the
              state line — farmer in Robertson County, miller a decade
              later, then Simpson County, Kentucky, then back to Sumner —
              the border apparently more of a suggestion than a boundary.
              Two wives, fifteen known children, and, like his son, no grave
              anyone has found.
            </p>
          </Waypoint>

          <Waypoint onZoom={setLightbox}
            date="About 1811"
            place="Virginia → Sumner County, Tennessee"
            media={{
              src: `${A}/tax-1806-nottoway.jpg`,
              alt: "Faded 1806 Nottoway County, Virginia tax list page showing Griffin Bennatt and Walker Bennatt listed together",
              caption:
                "Nottoway County, Virginia tax list, 1806 — Griffin Bennatt beside his uncle Walker Bennatt, five years before the wagons rolled for Tennessee. Yet another clerk, yet another spelling.",
            }}
          >
            <h3>Griffin Bennett comes out of Virginia</h3>
            <p>
              The tax lists record Griffin, over a dozen years, under five
              spellings, at the mercy of whichever clerk held the pen.
              Phonetic spelling like this is neither surprising nor unusual
              — it has been around forever, and it is a researcher's trial.
              Spelling was fluid because there were no rules and no readily
              available dictionaries; a name was written the way it sounded
              to the person holding the pen. If you want to find your
              people, you have to think about how the name would have{" "}
              <em>sounded</em> — and search every version. This family's
              surname alone appears as Bennet, Bennett, Bennitt, Bennatt,
              and more. (
              <a className="rr-inline-link" href="/stories/mike">
                Robertson-to-Robeson
              </a>
              , on my mother's side, is the same lesson.)
            </p>
            <p>
              And why did he leave Virginia at all? The deeds gave me the
              answer: his wife Kitturah's people, the Stones, were moving to
              Tennessee, and Griffin and Kitturah went with her family. Some
              migrations are epics. Some mean you follow your in-laws.
            </p>
          </Waypoint>
        </section>

        {/* ---------- The soldier ---------- */}
        <section className="j-strata j-strata-deep">
          <p className="j-stratum-label">The soldier</p>
          <div className="j-prose">
            <p>
              Griffin's father was a mystery and complexity to untangle.
              While he is named in the 1832 Will of his father Richard
              Bennett Sr., there was more than one man of that name in the
              Virginia counties where they originated.
            </p>
            <p>
              Discovering a pension application that identified Richard Sr.
              pulled the family back in time to before the Revolutionary
              War.
            </p>
            <p>
              Richard Bennett was born about 1758 in colonial Virginia. In
              1776 — a teenager, in the first year of the war — he enlisted
              in the 7th Virginia Regiment of the Continental Army. The
              muster rolls carry him through the Battle of Brandywine and
              the Battle of Germantown, and his regiment wintered at Valley
              Forge. He served out his enlistment, went home to Amelia
              County, and enlisted <em>again</em>.
            </p>
            <p>
              Through my grandfather's hidden paternity, it turns out my
              father's line runs directly to a soldier of the American
              Revolution. He's not the first one, but he was hidden. My
              father's mother comes from a long line of original colonists,
              many who served in that War of Independence, and got land
              grants in Tennessee as payment.
            </p>
            <p>
              But where I'd grown up with stories of a German immigrant who
              fled the European wars between principalities and met his
              wife onboard the ship crossing the Atlantic before settling
              in Nashville to raise a large brood of Catholic Germans who
              became butchers by trade, I now had a whole new history to
              absorb. Some of it fascinating. Some of it uncomfortable.
            </p>
          </div>
        </section>

        {/* ---------- Timeline: the soldier's documents ---------- */}
        <section
          className="j-timeline"
          aria-label="The Bennett line in reverse, part two: the Revolution and colonial Virginia"
        >
          <div className="j-route" aria-hidden="true" />

          {/* Featured: the muster roll */}
          <div className="jw jw-featured">
            <div className="jw-marker">
              <span className="jw-dot jw-dot-gold" aria-hidden="true" />
              <p className="jw-date">September 1777</p>
              <p className="jw-place">7th Virginia Regiment</p>
            </div>
            <div className="jw-body jw-body-stack">
              <div className="jw-text">
                <h3>Richard Bennitt, present</h3>
                <p>
                  Captain Reuben Lipscomb's Company — mustered October 13,
                  1777, weeks after Brandywine, days before the winter that
                  would be Valley Forge. Nineteen years old, give or take,
                  and checked present.
                </p>
              </div>
              <figure className="j-zoom">
                <button
                  type="button"
                  className="jw-zoombtn"
                  onClick={() =>
                    setLightbox({
                      src: `${A}/muster-roll-1777.jpg`,
                      alt: "Handwritten muster roll of Captain Reuben Lipscomb's Company of the 7th Virginia Regiment, September 1777, with Richard Bennitt listed among the men",
                      caption:
                        "Muster roll, Capt. Reuben Lipscomb's Company, 7th Virginia Regiment — Richard Bennitt at line 26.",
                    })
                  }
                  aria-label="View the muster roll larger"
                >
                  <img
                    src={`${A}/muster-roll-1777.jpg`}
                    alt="Handwritten muster roll of Captain Reuben Lipscomb's Company of the 7th Virginia Regiment, September 1777, with Richard Bennitt listed among the men"
                  />
                </button>
                <figcaption>
                  The muster roll — one more clerk, one more spelling:
                  Bennitt.
                </figcaption>
              </figure>
            </div>
          </div>

          <Waypoint onZoom={setLightbox}
            date="June 10, 1812"
            place="King William County, Virginia"
          >
            <h3>The conveyance that cements the chain</h3>
            <p>
              Twenty years before his death, another Rosetta stone: Richard
              Bennett "and Chrischaney his wife" — Christianna Waller,
              named a Bennett in her father Major Waller's 1793 will — join
              his brother Walker and sister Mary in selling the 125-acre
              plantation "whereon the sd Samuel Bennett dec'd lived," as
              the <em>joint heirs of Samuel Bennett</em>, late of King
              William County. The deed even reaches a generation further
              back, reciting the original 1739 conveyance to an earlier
              Richard Bennett. One document, and the whole chain locks:
              Samuel's son, Griffin's father, Christianna's husband. That
              spring the Richmond Enquirer had run two months of legal
              notices naming Samuel executor of Richard dec'd — the
              generations stacked in the record like strata.
            </p>
          </Waypoint>

          <Waypoint onZoom={setLightbox}
            date="September 1832"
            place="Sixteen days"
            media={{
              src: `${A}/declaration-1832.jpg`,
              alt: "Handwritten 1832 pension declaration of Richard Bennett of Lunenburg County, Virginia, aged 74, describing his enlistment in 1776 under Captain Holt Richardson in the 7th Virginia Regiment, service at Brandywine and Germantown, and his re-enlistment from Amelia County",
              caption:
                "Lunenburg County, September 1, 1832: aged seventy-four, he swears to it all — Captain Holt Richardson's company, the 7th Virginia, Brandywine, Germantown, the second enlistment out of Amelia County. Signed, Richard Bennatt.",
            }}
          >
            <h3>He tells his story, and then he goes</h3>
            <p>
              On September 1, 1832, aged seventy-four, Richard executed his
              Revolutionary War pension application — the sworn account of
              his service, Brandywine and Germantown and all, that survives
              in his file to this day. He died on September 17, 1832.
            </p>
            <p>
              Sixteen days. He told his story, under oath, for the record —
              and then he was gone. If there is a better argument anywhere
              for writing family stories down <em>now</em>, I have never
              found it. His will gave his son Griffin $400 and not an acre —
              and a decade-wide age gap in the children hints Griffin was
              the child of an earlier marriage, a suspicion DNA is now
              quietly supporting. Even inside the "new" line, there are
              older secrets waiting.
            </p>
          </Waypoint>

          <Waypoint onZoom={setLightbox}
            date="November 14, 1832"
            place="Jeffrey's Store P.O., Virginia"
            media={{
              src: `${A}/pension-receipt-1832.jpg`,
              alt: "Virginia pension office record for Richard Bennatt, private under Captain Richardson in the regiment of Colonel Dangerfield, Virginia line, two years from 1776; certificate of pension issued November 14, 1832 and sent to the pensioner at Jeffrey's Store P.O., with arrears of $120 and allowance of $40",
              caption:
                "Eighty dollars per annum, commencing March 4, 1831. Arrears to September: $120. The government's ledger closed the account of a man already two months in his grave.",
            }}
            rotate
          >
            <h3>The certificate arrives after him</h3>
            <p>
              On November 14, 1832 — fifty-eight days after Richard's death
              — the certificate of pension was issued and mailed to
              Jeffrey's Store P.O. He told his story sixteen days before
              the end. The country's answer never reached him.
            </p>
          </Waypoint>

        </section>

        {/* ---------- The hard page ---------- */}
        <section className="j-strata j-strata-deep">
          <p className="j-stratum-label">The hard page</p>
          <div className="j-prose">
            <p>
              I promised when I started this work that I would tell the
              whole of what I find, and this line holds a page I won't turn
              past.
            </p>
            <p>
              Richard's father, Samuel Bennett, held a 125-acre plantation
              in King William County, Virginia. And in the county court
              records of 1811, there is a conveyance in which Samuel
              transfers property: one sorrel mare with a star on her
              forehead, one cow — and two human beings. <em>One negro man
              named Moss. One negro woman named Cat.</em>
            </p>
            <p>
              I believe we can honor all our ancestors without endorsing
              everything they did — that honoring is not approving. We can
              also be clear-eyed and refuse to look away. Moss and Cat were
              held in bondage by my ancestors, and the record that helps
              prove my descent is the same record that documents their
              enslavement. I can't repair that from here. What I can do is
              decline to let them disappear a second time — into the
              silence of an untold family history.
            </p>
            <h2>Will the real Richard Bennett please stand up.</h2>
            <p>
              There were at least three Richard Bennetts in the same
              Virginia counties at the same time — and even more once the
              Juniors started showing up. Telling mine apart from the
              others is why I went laboriously through years and years of
              tax records and court files, tracing where each man moved —
              and, as uncomfortable as it was, tracing the enslaved: which
              people were named in one Bennett's will, and might then be
              enumerated in another Bennett's files. It is heartbreaking
              work, and nothing in it is to be condoned or taken pride in.
              These men went along with what was accepted in their time,
              and the records are the terrible proof.
            </p>
            <p>
              Richard — the soldier, the pensioner — enslaved people as his
              father Samuel before him. His 1832 will bequeaths eight by
              name. The estate inventory taken that November lists
              twenty-four: Aggy. Armstead. Asa. Frances. Hannah, and her
              child Edward. Harriett. James. Jane. John. Jordan. Lucy, and
              her child Roscoe. Luther. Martha. Messy. Milly. Narcissus.
              Ned. Paul. Peter. Pherebee, and her child Manirva. Silas.
            </p>
            <p>
              The reason to include this and say these names is the only
              good one: somewhere, someone may be searching for their own
              ancestors through the fog of their enslavers' paperwork. If
              Aggy, or Armstead, or Pherebee and her child Manirva — or
              Moss, or Cat — appear in that person's search, then these
              terrible records become a door. That is the reason to
              disclose them. They were part of my family's story. So they
              are in it.
            </p>
            <p>
              I have more work to do to uncover where Samuel Bennett came
              from. Likely the son of yet another Richard. But that's what
              makes this work so fascinating. It's a puzzle that is never
              truly solved.
            </p>
          </div>
        </section>


        {/* ---------- Grafted, not pruned ---------- */}
        <section className="j-strata">
          <p className="j-stratum-label">Grafted, not pruned</p>
          <div className="j-prose">
            <p>
              So: now we are Bennetts. Also. Still Warners — in name, in
              upbringing, in the hundred cousins and the handed-down
              stories, in everything that actually raised us. But in blood
              we run back through a Nashville huckster's wagon, through
              Tennessee farm dirt and a Kentucky mill, through a teenager at Valley Forge, through a plantation's terrible ledger, deep into colonial Virginia.
            </p>
            <p>
              My grandfather Felix lived his whole life and never knew any
              of it. It was there the entire time — in his tall frame,
              maybe; in his blood, certainly — waiting a century for a
              handful of cousins to spit in tubes.
            </p>
            <p>
              That's what a DNA surprise really offers, once the shock
              settles. Not a replacement story. A second inheritance. The
              tree doesn't get pruned. It gets grafted — and it bears
              stranger, richer fruit than the one you thought you were
              standing under.
            </p>
          </div>
        </section>
      </main>

      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />

      <a className="j-top" href="#top" aria-label="Back to top">↑</a>

      <footer className="rr-close">
        <h2>What's waiting in your records?</h2>
        <p className="rr-close-sub">
          Every family line holds more than one story — and some of them are
          waiting in records no one in your family has ever opened. If
          you're wondering what's waiting in yours, that's what a discovery
          call is for.
        </p>
        <a className="rr-btn" href={BOOKING_URL} target="_blank" rel="noreferrer">
          Book a discovery call
        </a>
        <p className="j-morelinks">
          Continue the stories: <a href="/stories/jessie">Jessie</a> · <a href="/stories/mike">Mike</a> · <a href="/dna-surprises">What a DNA surprise means</a>
        </p>
        <p className="rr-colophon">
          Roots &amp; Road · Identity Adventures · Sources: DNA cousin
          matching; Nashville city directories; U.S. censuses 1880–1940;
          WWI draft registrations; Sumner County tax lists; Revolutionary
          War muster rolls and pension files; King William County court
          records; family research by Donna
        </p>
        <FooterLegal />
      </footer>
    </div>
  );
}
