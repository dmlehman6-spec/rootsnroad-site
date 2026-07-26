import "./homepage.css";
import "./jessie.css";

/*
  Roots & Road — Part Two: When the Matches Don't Match
  Companion to the Jessie case study. Text is Donna's draft, lightly bridged.

  TODO before public:
  - [ ] LIVING-RELATIVES REVIEW — the "Not all surprises weigh the same"
        section recounts Donna's daughter's DNA discovery (living family).
        Donna must approve or soften this section before launch.
*/

export default function DnaPage() {
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
          <a className="rr-btn rr-btn-nav" href="/#discovery-call">
            Discovery call
          </a>
        </nav>
      </header>

      <main>
        <section
          className="j-strata"
          style={{ borderTop: "none", position: "relative", overflow: "hidden" }}
        >
          <img
            className="j-wash"
            src="/assets/jessie/dna-wash.jpg"
            alt=""
            aria-hidden="true"
          />
          <div className="j-veil" aria-hidden="true" />
          <p className="j-stratum-label" style={{ position: "relative" }}>
            Part two · When the matches don&rsquo;t match
          </p>
          <div className="j-prose" style={{ position: "relative" }}>
            <h1
              style={{
                fontWeight: 500,
                fontSize: "clamp(1.7rem, 4vw, 2.3rem)",
                lineHeight: 1.2,
                textAlign: "center",
                margin: "0 0 1.6rem",
              }}
            >
              What a DNA surprise means
            </h1>
            <p>
              <a className="rr-inline-link" href="/stories/jessie">
                Part One told Jessie&rsquo;s story
              </a>{" "}
              — the beloved Nashville matriarch whose secrets waited a
              hundred years for a cheek swab. This is the part that comes
              after the reveal: what a discovery like that means, how it
              lands, and how I&rsquo;ve built my practice around handling it
              with care.
            </p>

            <h2 className="j-part2-h2">The name I was born with</h2>
            <p>
              I was born a Warner. I have sixteen Warner first cousins and
              well over a hundred second and third cousins. My family always
              identified as Warners of German ancestry, and the stories
              passed down to us were Warner stories — the butchers, the
              name, the heritage.
            </p>
            <p>
              Here is something I believe deeply: <strong>those stories are
              still valid.</strong> They are still ours. Someone adopted
              into a family inherits its stories in full, and so do we.
              Biological identity is fascinating — and yes, important. But
              it is not the full story. The name I answered to, the cousins
              I grew up beside, the traditions we claimed: DNA didn&rsquo;t
              erase any of it. It added a chapter; it didn&rsquo;t tear out
              the ones already written.
            </p>
            <p>
              The new chapter came with its own lesson, though. When I
              reached out to my father&rsquo;s &ldquo;new&rdquo; cousins —
              the children of Felix&rsquo;s half-siblings, who by the
              tangled geometry of this story were also his first cousins —
              they were neither thrilled by the discovery nor willing to
              accept it. That door stayed closed. And I had to let it stay
              closed, because I understood something in that moment:
              I&rsquo;d had time to absorb this truth on my own terms.
              They&rsquo;d had a phone call.
            </p>
            <p>
              But I want to be honest with you: distance did much of my
              softening. Jessie&rsquo;s surprise lived generations back. Not
              every surprise does.
            </p>

            <h2 className="j-part2-h2">Not all surprises weigh the same</h2>
            <p>
              DNA testing surfaces the full spectrum of human life, and the
              further a discovery sits from the present, the more it reads
              as history rather than wound. It&rsquo;s worth naming the
              range plainly:
            </p>
            <p>
              A great-great-grandparent who wasn&rsquo;t who the records
              claimed is a plot twist. A grandparent, like mine, is a
              revelation the family can usually absorb — someone may even
              confirm the old whispers, as an elder in my family did. But
              DNA can also reveal that a living parent is not a biological
              parent. That there is a sibling out there you&rsquo;ve never
              met. That a donor was involved and never disclosed. Those
              discoveries don&rsquo;t arrive as flavor in the family story;
              they arrive in the middle of your own.
            </p>
            <p>
              I know that close range personally, too — not from
              Jessie&rsquo;s century, but from mine. My eldest daughter
              learned through DNA that she had a half-brother, born before
              her father and I married. And earlier still, twin girls —
              daughters her father never knew he had. He and I had divorced
              when my daughter was only two; I knew none of it. In a single
              afternoon, the child we had raised as the firstborn learned
              she wasn&rsquo;t, and gained three siblings she had never
              met. That is not a plot twist in an old story. That is the
              furniture being rearranged in the house you live in.
            </p>
            <p>
              I would never tell you that every surprise becomes a charming
              anecdote with time. Some do. Some reorganize a life. The
              difference is real, and pretending otherwise would be a
              disservice to you.
            </p>
            <p>
              And not every hard truth arrives by cheek swab — sometimes the
              records themselves hold it. My heritage includes ancestors who
              may have owned enslaved people. Discoveries like that can feel
              painful, even shameful, to sit with. But they are truth, and
              they are part of the human tapestry every one of us descends
              from. I believe we can honor all our ancestors — honor them as
              real people of their real time — without endorsing everything
              they did. Honoring is not approving. It is refusing to look
              away.
            </p>
            <p>
              Which is why I believe the most important part of DNA testing
              happens <em>before</em> the test.
            </p>

            <h2 className="j-part2-h2">
              Questions to sit with before you open the envelope
            </h2>
            <p>
              If you&rsquo;re considering DNA testing — for a heritage
              journey with me, or simply for yourself — I&rsquo;d gently ask
              you to spend an evening with these questions first. There are
              no right answers. There are only <em>your</em> answers.
            </p>
            <p className="j-question">
              What am I hoping to find — and what am I afraid to find?
            </p>
            <p>
              Both answers matter equally. Naming the fear
              out loud takes away some of its power to ambush you.
            </p>
            <p className="j-question">
              If I learn something unexpected, how much do I want to know?
            </p>
            <p>
              Everything, whatever it is? The history, but
              not the living connections? You are allowed to draw that line
              anywhere, and you&rsquo;re allowed to draw it in advance.
            </p>
            <p className="j-question">
              Whose story is this to uncover?
            </p>
            <p>
              A discovery
              about your grandmother is also a discovery about your mother,
              your uncles, your cousins. Some of them may want to know. Some
              may not. It&rsquo;s worth considering who else stands inside
              the blast radius of a truth before you go looking for it.
            </p>
            <p className="j-question">
              Am I prepared for a living stranger to be family — and for them
              to feel differently than I do?
            </p>
            <p>
              A
              new-found sibling or cousin gets a vote in what happens next.
              Sometimes the reunion is joyful. Sometimes, as it was for me,
              the door stays closed. Both must be allowed.
            </p>
            <p className="j-question">
              What would it take for me to still feel like myself if a line
              on my tree turns out to be different than I believed?
            </p>
            <p>
              In my experience, the answer reveals
              something wonderful: the people who raised you, the traditions
              you keep, the love you were given — none of that is stored in
              a chromosome. DNA can rewrite your tree. It cannot rewrite
              your life.
            </p>
            <p className="j-question">
              And finally: is it okay to decide not to test?
            </p>
            <p>
              Yes. Completely. Some of the wisest people I know have looked
              at these questions and chosen to leave the envelope closed.
              Family history can be researched deeply and beautifully
              through records alone. The test is a tool, not a toll gate.
            </p>

            <h2 className="j-part2-h2">
              How I handle surprises at Roots &amp; Road
            </h2>
            <p>
              Because I&rsquo;ve stood on both sides of a discovery — the
              researcher and the descendant — I&rsquo;ve built my practice
              around a simple principle: <strong>you decide what you want to
              know, before I go looking.</strong>
            </p>
            <p>
              I never collect or initiate DNA testing. If you choose to
              test, you do so directly through an established provider, on
              your own terms, and you share results with me only if and when
              you wish. Before any research begins, we talk through exactly
              these questions, and you set your boundaries: full disclosure,
              history only, or stop-and-ask if something unexpected appears.
              If I find a surprise in the records or in results you&rsquo;ve
              shared, I honor the instructions you gave me when the stakes
              were still hypothetical — not the curiosity of the moment.
            </p>
            <p>
              And if a discovery lands hard, we slow down. The itinerary can
              wait. The story isn&rsquo;t going anywhere. It waited a
              hundred years for my family; it will wait a few weeks for
              yours.
            </p>
          </div>
        </section>
      </main>

      <a className="j-top" href="#top" aria-label="Back to top">↑</a>

      <footer className="rr-close">
        <h2>Weighing a test of your own?</h2>
        <p className="rr-close-sub">
          This is exactly the kind of conversation a discovery call is for.
          No test required. Just your questions — and maybe a few of your
          grandmother&rsquo;s.
        </p>
        <a className="rr-btn" href="/#discovery-call">
          Book a discovery call
        </a>
        <p className="j-morelinks">
          Continue the stories: <a href="/stories/jessie">Jessie</a> · <a href="/stories/mike">Mike</a> · <a href="/stories/bennetts">The Bennetts</a>
        </p>
        <p className="rr-colophon">
          Roots &amp; Road · Identity Adventures ·{" "}
          <a className="rr-inline-link" href="/stories/jessie">
            Read Part One: The secrets Jessie kept
          </a>
        </p>
      </footer>
    </div>
  );
}
