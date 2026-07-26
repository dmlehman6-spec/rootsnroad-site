import "./homepage.css";
import "./jessie.css";

/*
  Roots & Road — Case study: The Man Who Called Himself Mike
  RETOLD 26 Jul 26 per Donna's "Mikes-story_retold" doc:
  - Narrative solid through "Judges get written down."
  - Then "The first thread" (KC contact, microfilm, 1937 death notice, William)
  - Then the Rosetta stone record
  - TIMELINE REVERSED: Kansas City 1937 backwards to Aberdeen 1814,
    revealing as discovered; the 1814 ROBERTSON banns is the featured finale
  - Robertson essay after the timeline lands in Aberdeen
  - Marie Theresa Fordon's part follows
  - Two return voyages referenced; convert to links when the Quebec and
    Aberdeen journey pages are built (TODO markers below)

  Review gates:
  - [x] LIVING-RELATIVES REVIEW — CLEARED 26 Jul 26: Donna's mother knows this
        full story, tells it herself, and does not mind its publication.
  - [ ] Confirm newspaper name: doc says "The Kansas City Time" — set as
        The Kansas City Times; Donna to verify against the clipping
  - [ ] Confirm St. Catharines / Ontario wording for the headstone
*/

const A = "/assets/mike";

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

export default function MikePage() {
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
          <a href="/journeys/jessie">Jessie's story</a>
          <a className="rr-btn rr-btn-nav" href="/#discovery-call">
            Discovery call
          </a>
        </nav>
      </header>

      <main>
        {/* ---------- Hero ---------- */}
        <section className="j-hero">
          <img
            className="j-wash"
            src={`${A}/mike-wash.jpg`}
            alt=""
            aria-hidden="true"
          />
          <div className="j-veil" aria-hidden="true" />
          <div className="j-hero-inner">
            <figure className="j-portrait">
              <img
                src={`${A}/mike-portrait.jpg`}
                alt="Hand-tinted portrait of Henry Fordan Robeson, circa 1946, squinting slightly with a faint smile, in shirt and patterned tie"
              />
              <figcaption>
                Henry Fordan Robeson, 1907–1990. "Harry" in every record of
                his young life; "Mike" by his own decision, later.
              </figcaption>
            </figure>
            <div className="j-hero-copy">
              <p className="rr-eyebrow">
                One journey of discovery · Scotland · Quebec · Michigan ·
                Kansas City
              </p>
              <h1>The man who called himself Mike</h1>
              <p className="j-lede">
                A twelve-year search for my grandfather — and the three
                generations of reinvention behind him.
              </p>
              <p className="j-byline">
                Researched and told by Donna, from her own family record.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- What I was given / the wall / the threads ---------- */}
        <section className="j-strata">
          <p className="j-stratum-label">Beginning with what you're given</p>
          <div className="j-prose">
            <p>
              Every family search begins with what you're given. Here is
              what I was given:
            </p>
            <p>
              A name — Henry Michael Robeson, "Mike" to me, the grandfather
              I barely knew before he died in 1990. A birthday. A handful of
              stories he told my mother in his last years, after a
              veterans' hospital in California found her and ended an
              absence of nearly forty years. He'd been a gambler, he said,
              with winnings stashed in safe-deposit boxes around the
              country. He'd served in the Army in the war — true, though
              the tales he draped over it weren't. He could sing, and play
              piano. He said he'd been born on a train.
            </p>
            <p>
              And one more fragment, from my grandmother — his ex-wife, who
              never spoke of him but would speak of his people: his father
              had been <em>a traveling salesman who used to be a judge</em>.
            </p>
            <p>
              Almost everything on that list was wrong, embellished, or
              floating loose from any person I could find. Even the name. My
              grandfather was not Henry Michael Robeson. There was no Henry
              Michael Robeson. But I didn't know that yet.
            </p>

            <h2>The wall</h2>
            <p>
              I started where the facts touched ground: Kansas City,
              Missouri, where my grandparents married in 1931 and my mother
              was born. City directories, year by year. Census sheets. I
              found the family — Henry J. Robeson, salesman; Marie, his
              wife; three children, my grandfather "Harry" among them (no
              "Mike" anywhere — that name came later, another small
              self-invention). I found addresses that changed almost
              annually, a newspaper ad for a "Money Back Gas Saver," a
              mention of Henry J. as an invalid while his wife sold
              second-hand clothing.
            </p>
            <p>
              And there it stopped. For years — and I mean years, this
              search ran across decades of my life — I could not get the
              Robesons out of Missouri. They appeared in Kansas City around
              1908 as if they'd condensed out of the air. A salesman is a
              hard man to trace backward. He has no land, no practice, no
              parish. He has a suitcase.
            </p>
            <p>
              What I had was that one strange, specific fragment:{" "}
              <em>a salesman who used to be a judge</em>. Salesmen are
              invisible. Judges are not. Judges get written down.
            </p>

            <h2>The first thread</h2>
            <p>
              My first break came when a contact I knew in Kansas City
              helped me look through the local newspaper's archived
              microfilm. After years of looking for a death record, I found
              it instead where this work so often hides its keys: in a
              death notice. Henry J. Robeson's 1937 obituary in The Kansas
              City Times, small and easy to pass over, named his survivors
              — and then, a name and a place:{" "}
              <em>"a brother, William Robeson, Port Huron, Mich."</em>
            </p>
            <p>
              So I went looking for William — and William was everything
              his brother wasn't: findable. A chemist and inventor,
              well-documented, written up, papered. Census records held
              them both as boys in their father's household in Port Huron,
              St. Clair County, Michigan. William's passport application
              confirmed where he was born, in Canada.
            </p>
            <p>
              Voilà! A new direction to follow. I'd made it as far as
              Michigan — so that's where I turned my sights.
            </p>

            <h2>The Rosetta stone record</h2>
            <p>
              In 1999 I was living in Los Angeles and working downtown, a
              few blocks from the central public library. I spent my lunch
              hours in the genealogy stacks. That's where I found it — call
              number GEN R 977.41 S13Hi — <em>St. Clair County, Michigan,
              its history and its people</em>, compiled by William Lee
              Jenks. The book was so old it was disintegrating in my hands.
              I photocopied the pages that August and transcribed them the
              following year, because I wasn't sure the book itself would
              survive to be consulted again.
            </p>
            <p>Two passages, and the trail blew open.</p>
            <p>
              The first profiled <strong>D. Robeson, ship chandler and
              dealer in vessel supplies</strong> — born 1825, "brought up in
              the city of Quebec," where he learned the business from{" "}
              <em>his</em> father, also a ship chandler. Came to Port Huron
              in 1868. Sail-making and the general outfit of vessels.
            </p>
            <p>
              The second profiled <strong>Prof. Henry J. Robeson,
              Superintendent of Schools</strong> — born in the city of
              Quebec, April 20, 1853. Came to Port Huron with his parents in
              1868, spent three years learning sail-making from his father,
              then the University of Michigan, then principal, then
              superintendent. Author of a book on parliamentary rules whose
              first edition "was exhausted within a fortnight." A large
              private library.
            </p>
            <p>
              Two more generations, a migration path, a family trade, a
              city of origin — in an afternoon, on a lunch hour, in a book
              falling apart at the spine. Researchers dream about pages like
              these. I call them Rosetta stones: not because they answer
              everything, but because after them, everything else becomes
              translatable.
            </p>
            <p>
              But a Rosetta stone written by men has men's vanities in it.
              The book said D. Robeson married Eliza Gregory and "they have
              five children — Henry J., William B., David M., Laura and
              Ethel." Tidy. And wrong. Those first three sons belonged to
              another woman entirely — a first wife, dead young, erased from
              the county history as if she'd never drawn breath. It would
              take a church register on another country's microfilm to give
              her back her name.
            </p>
            <p>
              And the fragment my grandmother had carried anchored at last:
              professor, superintendent — and Justice of the Peace, his
              name on more than fifty Port Huron marriage records through
              the 1890s. <em>A salesman who used to be a judge.</em> That's
              something I've learned to tell people: family stories are
              rarely invented. More often they're <strong>unanchored</strong>{" "}
              — true things that drifted loose from their names and dates.
              You can disprove a lie. An unanchored truth you can only
              anchor.
            </p>
          </div>
        </section>

        {/* ---------- A man in two halves ---------- */}
        <section className="j-strata j-strata-deep">
          <p className="j-stratum-label">A man in two halves</p>
          <div className="j-prose">
            <p>
              Here is why the wall had stood so long, and it's the part
              that still astonishes me: I hadn't been looking for a missing
              link between two men. I had been looking for{" "}
              <strong>one man who lived two lives</strong>.
            </p>
            <p>
              The Port Huron half: professor, superintendent of schools for
              over a decade, author, attorney, Justice of the Peace, by one
              newspaper account mayor. A pillar. A man with a library.
            </p>
            <p>
              The Kansas City half: traveling salesman, mining speculator,
              brewery clerk, seller of fifty-cent gas savers, invalid.
            </p>
            <p>
              Between them, around 1900, at the age of forty-seven, Henry
              John Robeson simply stepped out of his own respectable life —
              left his wife of more than twenty years, chased gold in the
              Black Hills and zinc in Joplin, and started over with a woman
              twenty-five years his junior.
            </p>
            <p>
              So follow the trail the way I actually found it: backwards.
              From a death notice in Kansas City, back through Joplin,
              through Detroit, through Port Huron — and further back than I
              ever expected to go.
            </p>
          </div>
        </section>

        {/* ---------- Timeline, in reverse: Kansas City to Port Huron ---------- */}
        <section
          className="j-timeline"
          aria-label="The trail in reverse, part one: Kansas City back to Port Huron"
        >
          <div className="j-route" aria-hidden="true" />

          <Waypoint
            date="May 1937"
            place="Kansas City · Floral Hills"
            media={{
              src: `${A}/henry-john-death-notice-1937.jpg`,
              alt: "Kansas City newspaper death notice: Robeson, Henry J., age 84, died Monday morning at his home, 4935 Agnes; survived by sons Vincent and Harry, daughter Mrs. Irene Alexander, and a brother, William Robeson, Port Huron, Mich.",
              caption:
                "The thread. A name and a place — 'William Robeson, Port Huron, Mich.' — stitched the salesman back to the life he'd left. He died at a home on Agnes Avenue: the name of the wife he'd walked out on in Michigan.",
            }}
          >
            <h3>Where the trail begins: a death notice</h3>
            <p>
              Henry J. Robeson dies at 84, with a small notice and a grave
              at Floral Hills — a different cemetery entirely from the wife
              he'd shared his second life with. Buried in the notice,
              unnoticed for decades, sat the thread that gave him back his
              first life: a brother in Port Huron.
            </p>
          </Waypoint>

          <Waypoint date="December 1936" place="Kansas City · Calvary Cemetery">
            <h3>Six months earlier: Marie Theresa dies</h3>
            <p>
              Buried in consecrated Catholic ground, apart from Henry.
              Their separate resting places say out loud what a missing
              marriage record only whispers. Her story comes later — hold
              her name.
            </p>
          </Waypoint>

          <Waypoint
            date="1931"
            place="Kansas City, Missouri"
            media={{
              src: `${A}/mike-marie-1931.jpg`,
              alt: "Sepia photograph of Marie P. Porter Robeson and Henry Fordan Robeson standing together under trees, circa 1931, Kansas City",
              caption:
                "Harry and my grandmother, around the time of their marriage. She was baptized Preston Marie Porter, disliked Preston, and reversed her names — I didn't learn her first name until after she died. Two Maries in one family, both self-chosen.",
            }}
            rotate
          >
            <h3>Harry marries</h3>
            <p>
              My grandparents, at the start. My mother would be born here in
              Kansas City. He was "Harry" in every record of these years —
              "Mike" hadn't been invented yet.
            </p>
          </Waypoint>

          <Waypoint date="About 1908" place="Kansas City, Missouri">
            <h3>The Robesons condense out of the air</h3>
            <p>
              A salesman, his wife, and three children appear in the Kansas
              City directories — addresses changing almost annually, a
              fifty-cent "Money Back Gas Saver," no past attached. This is
              the wall, seen from the other side.
            </p>
          </Waypoint>

          <Waypoint date="October 31, 1907" place="Probably Joplin, Missouri">
            <h3>Harry is born</h3>
            <p>
              No birth record exists — by choice, I believe. His middle
              name, Fordon, is his mother's maiden name carried forward. He
              would later say he was born on a train heading toward Kansas
              City; he wasn't, but Joplin really was a stop on his parents'
              drift. Even the fabrication leaned toward the truth.
            </p>
          </Waypoint>

          <Waypoint date="About 1900" place="Detroit → the road">
            <h3>Henry John steps out of his life</h3>
            <p>
              At forty-seven, the superintendent, author, and Justice of
              the Peace walks out of respectability — the Black Hills for
              gold, Joplin for zinc — with a young woman he met in Detroit.
              Behind him in Michigan: a wife of more than twenty years who
              would call herself his widow for three decades while he lived
              on in Missouri.
            </p>
          </Waypoint>

          <Waypoint
            date="1889"
            place="Port Huron, Michigan"
            media={{
              src: `${A}/henry-john-sketch-1889.jpg`,
              alt: "Engraved 1889 portrait of Henry J. Robeson with waxed mustache and bow tie, captioned Member of Board of Supreme Finance Auditors",
              caption:
                "Henry John in his respectable life: professor, superintendent, author, attorney, Justice of the Peace — the man with a library.",
            }}
          >
            <h3>The pillar of Port Huron</h3>
            <p>
              Superintendent of Schools for over a decade. Author of a book
              on parliamentary rules that sold out its first edition within
              a fortnight. His name on more than fifty marriage records as
              Justice of the Peace. This is the judge my grandmother's
              fragment remembered.
            </p>
          </Waypoint>

          <Waypoint
            date="June 1880"
            place="Port Huron, Michigan"
            media={{
              src: `${A}/census-1880-porthuron.jpg`,
              alt: "1880 census page from Port Huron, Michigan with the household of Henry Robeson, superintendent of schools, and his wife Agnes highlighted",
              caption:
                "The 1880 census: Henry, Superintendent of Schools, and Agnes, keeping house — the life he would step out of.",
            }}
          >
            <h3>Henry and Agnes</h3>
            <p>
              A marriage of more than twenty years, childless, recorded in
              tidy census columns. And in the same city, the censuses held
              Henry and William as boys in their father's household — the
              brothers whose reunion in newsprint, fifty-seven years later,
              would crack this search open.
            </p>
          </Waypoint>

          <Waypoint date="1868" place="Port Huron, Michigan">
            <h3>The family lands in Port Huron</h3>
            <p>
              David Robeson establishes the town's only ship chandlery —
              sails and the general outfit of vessels — and fifteen-year-old
              Henry John spends three years learning the family trade
              before choosing the university instead. But the Jenks book
              said this family was "brought up in the city of Quebec." The
              trail wasn't done running backwards.
            </p>
          </Waypoint>
        </section>

        {/* ---------- Finding the family: Quebec, then Aberdeen ---------- */}
        <section className="j-strata">
          <p className="j-stratum-label">
            Finding the family — Quebec, and then Aberdeen
          </p>
          <div className="j-prose">
            <p>
              Quebec meant church registers — and church registers meant
              microfilm from another country. That's where Ellen Martin got
              her name back: the St. Andrew's register recorded her
              marriage to David Robeson in 1852 and the baptism of their
              son Henry John the following spring. The county history had
              erased her; the parish had not. The Canadian censuses of 1842
              and 1851 filled in the household around them — the sailmaking
              father, the Quebec shop, the family the Jenks book had only
              gestured at.
            </p>
            <p>
              And then the registers pointed further back still — over the
              Atlantic, to Aberdeen, where every record in Canada agreed
              this family began. So I went looking for Robesons in the
              Scottish Old Parochial Registers.
            </p>
            <p>There weren't any.</p>
          </div>
        </section>

        {/* ---------- Timeline continues: St. Catharines to Aberdeen ---------- */}
        <section
          className="j-timeline"
          aria-label="The trail in reverse, part two: Ontario back to Aberdeen"
        >
          <div className="j-route" aria-hidden="true" />

          <Waypoint
            date="1882 · 1888"
            place="St. Catharines area, Ontario"
            media={{
              src: `${A}/headstone-david-mary.jpg`,
              alt: "Weathered marble headstone with clasped hands, for Mary Ronald wife of David Robeson and David Robeson, both natives of Aberdeen, Scotland",
              caption:
                "One stone, two lives, one word each insisted on: 'A NATIVE OF ABERDEEN, SCOTLAND.' Mary died in 1882 at 88; David in 1888 at 95 — more than fifty years after the crossing.",
            }}
            rotate
          >
            <h3>The originators, at rest</h3>
            <p>
              The eldest David and his Mary, retired to Ontario, outliving
              nearly everyone. Whatever the clerks had done to their
              surname, their headstone got the last word about where they
              were from. It told me exactly where to look.
            </p>
          </Waypoint>

          <Waypoint date="April 20, 1853" place="Quebec City">
            <h3>Henry John is born</h3>
            <p>
              Baptized at St. Andrew's, where his parents married. He sang
              in a boys' choir here — remember the music; it's the one
              inheritance that never got shed.
            </p>
          </Waypoint>

          <Waypoint date="May 29, 1852" place="St. Andrew's, Quebec City">
            <h3>David marries Ellen Martin</h3>
            <p>
              The bride history tried to erase, restored by a church
              register on another country's microfilm. Her three sons —
              Henry J., William B., David M. — finally credited to the
              woman who bore them.
            </p>
          </Waypoint>

          <Waypoint date="About 1832" place="Aberdeen → Quebec City">
            <h3>The crossing</h3>
            <p>
              In their late thirties, David and Mary uproot eight lives and
              sail for a country still being invented. Somewhere between
              the accent and the clerk's pen, something happens to the
              family name — but I didn't know that yet, standing at the
              registers with no Robesons in them.
            </p>
          </Waypoint>

          <Waypoint date="December 1822" place="Old St. Pancras, London">
            <h3>A baptism under a third spelling</h3>
            <p>
              For years I couldn't find David Jr.'s birth record, and
              censuses kept insisting he'd been born in <em>England</em>. I
              dismissed it as enumerator error — until I stopped dismissing
              the records and started believing them. There he was:
              baptized in London, the family written down as{" "}
              <strong>ROBISON</strong>. The "error" had been the truth all
              along.
            </p>
          </Waypoint>

          {/* ---------- The featured finale: Aberdeen, 1814 ---------- */}
          <div className="jw jw-featured">
            <div className="jw-marker">
              <span className="jw-dot jw-dot-gold" aria-hidden="true" />
              <p className="jw-date">November 26, 1814</p>
              <p className="jw-place">St. Nicholas, Aberdeen</p>
            </div>
            <div className="jw-body jw-body-stack">
              <div className="jw-text">
                <h3>The record that ended the search</h3>
                <p>
                  What the Aberdeen registers held instead of Robesons was a
                  marriage: David <strong>ROBERTSON</strong>, rope and
                  sailmaker, to Mary Ronald. Wrong surname; right
                  everything else.
                </p>
              </div>
              <figure className="j-zoom">
                <img
                  src={`${A}/banns-1814.jpg`}
                  alt="Page from the Aberdeen Old Parochial Register recording the 1814 marriage of David Robertson and Mary Ronald"
                />
                <figcaption>
                  The Old Parochial Register, Aberdeen — the marriage that
                  started all of it, under a name no one in the family
                  remembered.
                </figcaption>
              </figure>
              <div className="jw-text">
                <p>
                  The bride matched. The timing matched. And that
                  occupation — rope and sailmaker — was the same
                  distinctive trade the family carried through Quebec and
                  Ontario and into Port Huron like a crest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- The Robertson reveal ---------- */}
        <section className="j-strata j-strata-deep">
          <p className="j-stratum-label">The name that wasn't the name</p>
          <div className="j-prose">
            <p>
              I remember sitting with that record, resisting it, testing it
              against everything I had, before I let the truth land: the
              surname itself was a derivative. My mother's maiden name —
              the name I had chased through four states and two countries —
              had never existed in Scotland. We were Robertsons. Somewhere
              in the crossing, the name transformed, and within a
              generation or two, no one remembered it had ever been
              anything else.
            </p>
            <p>
              So how did Robertson become Robeson? My favorite theory needs
              no documents, only ears. Say "Robertson" the way Aberdeen
              says it — the r's rolled, the t softened nearly to nothing —
              to an English-speaking clerk on a Quebec dock in 1832, and
              listen to what he writes down. <em>Robeson.</em> It's
              possible the change was deliberate instead, a clean name for
              a new world; families did that. But that London "Robison"
              tells me the name was already drifting wherever the accent
              met a foreign pen. I don't believe anyone in my family
              changed our name. I believe it changed itself in other
              people's hearing — and the family simply stopped correcting
              it.
            </p>
            <p>
              The London years hold one more mystery: the family's short
              stretch there was on business, I believe, likely tied to a
              silk merchant named Paul Tatlock — a connection close enough
              that David and Mary later named a son{" "}
              <em>Paul Tatlock Robertson</em>. Why give a business
              associate's full name to your child? I have theories — one
              already disproven — and one strange newspaper clipping about
              a woman who refused to be buried in Aberdeen. But that
              mystery deserves its own telling, another day.
            </p>
            <p>
              Three generations, one pattern — and a surname to match.
              Robertson dissolves into Robeson at the water's edge. The
              professor becomes the salesman. Harry becomes Mike. My family
              didn't just migrate across an ocean and a continent. They
              migrated across identities.
            </p>
          </div>
        </section>

        {/* ---------- Marie's part ---------- */}
        <section className="j-strata">
          <p className="j-stratum-label">Marie — her own story</p>
          <div className="j-prose">
            <figure
              className="jw-media jw-media-rotated"
              style={{ float: "right", width: "min(280px, 45%)", margin: "0 0 0.8rem 1.2rem" }}
            >
              <img
                src={`${A}/marie-theresa-fordon.jpg`}
                alt="Hand-tinted portrait of Marie Theresa Fordon Robeson, an older woman with waved white hair and a beaded necklace"
                loading="lazy"
              />
              <figcaption>
                Marie Theresa Fordon, 1877–1936. The record of her birth in
                Bingham, Michigan reads "Mary T. Fordan" — the family name
                drifted through Fordan, Forden, and Fordon, and she chose
                "Marie" for herself.
              </figcaption>
            </figure>
            <p>
              And the woman Henry John started over with — she is her own
              story. Marie Theresa Fordon was the eighth and youngest child
              of a large Catholic farm family in Michigan's Thumb — a
              family devout enough that her father and uncles helped fund
              and build their parish church. Baptized Mary, she chose
              "Marie" for herself somewhere on the road that led away from
              Bingham. In this family, even the women renamed themselves.
            </p>
            <p>
              She went to Detroit, apparently as a student, a small-town
              girl in the big city. And there she met a much older,
              married, childless man — and left with him.
            </p>
            <p>
              Understand what that meant. A good Catholic daughter could not
              marry a divorced man; the Church would not have it, and I
              doubt her family would either. I believe that's exactly why
              some records that should exist, don't. There is no marriage
              record for Henry and Marie — anywhere, in over 30 years of looking, still to this day. There are no birth records for their three children,
              though Missouri's registration in those years is good; I
              believe the births happened at home, and unrecorded, by
              choice. Theirs was an unsanctioned life, and they kept it off
              the books. Absence, in a record set this well-covered, is not
              silence. It's testimony.
            </p>
            <p>
              Marie apparently never gave up her faith. My grandmother converted when she married Harry; my mother and her brother were raised in the Church, and one of my cousins became a priest in St. Louis. And when Marie
              died in December 1936, she was buried in Calvary Cemetery —
              consecrated Catholic ground. Henry followed her in death just
              six months later and was buried somewhere else entirely, in
              Floral Hills. Whether he wouldn't join her or the Church
              wouldn't have him, I can't say. But their separate graves say
              out loud what the missing marriage record only whispers.
            </p>
            <p>
              And their son Harry — my grandfather — inherited the family
              art. He shed "Harry" for "Mike," a name that appears in no
              record of his young life. He left his own family when his
              children were four and eleven. He said he was born on a
              train, heading toward Kansas City. He wasn't — he was almost
              certainly born in Joplin. But notice: Joplin really was a stop
              on his parents' drift from Detroit toward Kansas City. Even
              his fabrication leaned in the direction of the truth. He
              didn't lie about the journey. He just put himself in motion
              on it.
            </p>

            <h2>How I knew — and what "knowing" really means</h2>
            <p>
              Even with the thread in hand, no certificate ever announced{" "}
              <em>this is the same man</em>. What there was, was
              accumulation — an age that fit, an occupation that echoed the
              family fragment, a birthdate that matched, dots connected across over two decades until the weight of it left no other explanation standing.
            </p>
            <p>
              That is what proof usually looks like in this work. A thread,
              and then a tide. If you take one thing from my story into
              your own search, take that. And take its companion: some
              pieces stay missing. I still have no marriage record, three
              missing births, no obituary for Marie. A family history isn't one with no gaps. It's one where the gaps can be looked at and bridged with reasonable assumptions.
            </p>
          </div>
        </section>

        {/* ---------- The meaning ---------- */}
        <section className="j-strata j-strata-deep">
          <p className="j-stratum-label">The meaning — standing in it</p>
          <div className="j-prose">
            <p>
              In the summer of 2025, I finally went. Not to the records. To
              the places. Two voyages — first to Quebec, then to Aberdeen —
              and each one deserves its own telling.
              {/* TODO: link "Quebec" and "Aberdeen" to their journey pages
                  when built (/journeys/quebec-city, /journeys/aberdeen) */}
            </p>
            <p>
              Quebec City, in the rain. St. Andrew's Church — where David
              Robeson married Ellen Martin in 1852, where Henry John was
              baptized the following spring — was locked. I stood outside
              it and took photographs. Then I walked down toward the river,
              to the streets where the family first lived, land the
              sailmakers' generation had helped fill in from the mudflats.
              Their block is gone, built over. But the street names survive
              on lovely French plaques, some cobblestones survive, and a
              few streets over the houses still stand from the 1700s, so
              you can see the shape of the life. I was alone. I
              photographed a street sign and stood there doing the
              arithmetic: David and Mary were pushing forty when they
              uprooted eight lives and sailed to a country still being
              invented — and then lived more than fifty years in it. I
              smiled, standing in the rain, recognizing something. The
              exploration gene. The curiosity. The toughness. I know where
              mine come from now.
            </p>
            <p>
              Weeks later, Aberdeen — this time not alone. My children and
              one of my grandchildren walked with me through Footdee, the little fishing village at the harbor mouth where the Robertson family lived on and off in the 1820–1830 timeframe before leaving for a new continent. Footdee, or ’Fittie’ as the locals call it, still exists. Its squares and cottages are still there. We
              wandered it together, three generations of us counting the one
              at my side, and the only word any of us reached for
              afterward was <em>enchanted</em>. I saw the church where
              David Robertson married Mary Ronald in 1814 — the marriage
              that started all of it — and stood outside trying to breathe
              in the ghosts.
            </p>
            <p>
              The building being locked, the block being gone: none of it
              subtracted anything. Heritage travel doesn't promise the door
              opens. It promises you'll stand where it happened — and that
              standing there, something gets handed to you that no record
              can hold.
            </p>

            <h2>Coda</h2>
            <p>
              My mother is 88 this year. She learned each discovery as I
              made it. She's not much for the mystery or the psychology —
              those are my obsessions. What she loves is simpler and, I've
              come to think, just as true a way to hold an inheritance: she
              loves that she's Scottish, because she has the
              strawberry-blonde hair and the blue eyes to show for it. She
              loves that her grandfather was smart — a judge, an author.
              And she loves best of all that Henry John sang in a boys'
              choir in Quebec — because she is a soprano, because her
              father played piano and sang, because the one thing that
              passed intact through all those shed names and abandoned
              lives, from a choir loft in Quebec City through a gambler
              called Mike down to her, was the music.
            </p>
            <p>
              Everyone takes what they need from the family story. Part of
              my work is finding all of it. The other part is honoring how
              much of it each person wants to hold.
            </p>
          </div>
        </section>
      </main>

      <footer className="rr-close">
        <h2>Every family is deeper than one story.</h2>
        <p className="rr-close-sub">
          The trail doesn't end here — a Yorkshire shepherd, an Irish farm
          family from Armagh, and a sixteen-year-old apprentice lost on a
          whaling ship off Aberdeen are all waiting in the same tree. If
          you're ready to find yours, that's what a discovery call is for.
        </p>
        <a className="rr-btn" href="/#discovery-call">
          Book a discovery call
        </a>
        <p className="rr-colophon">
          Roots &amp; Road · Identity Adventures · Sources: The Kansas City
          Times 1937; U.S. censuses; Kansas City directories; Jenks,{" "}
          <em>St. Clair County, Michigan</em>; U.S. passport applications;
          Quebec church and notarial records; Canadian censuses 1842–1851;
          Old St. Pancras registers, London; Scottish Old Parochial
          Registers, Aberdeen; Michigan birth records; family research by
          Donna
        </p>
      </footer>
    </div>
  );
}
