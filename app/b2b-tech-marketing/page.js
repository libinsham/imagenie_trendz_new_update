import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import TextText from "../../components/TextText";
import OffsetCards from "../../components/OffsetCards";
import Link from "next/link";

export const metadata = {
  title: "B2B Tech Marketing | Imagenie",
  description:
    "Strategic storytelling for complex B2B products and services. .",
};

export default function B2BTechMarketingPage() {
  return (
    <>
      <Header />

      <main id="content">
       <section className="b2b-hero">

  <div className="b2b-hero__overlay"></div>

  <div className="o-container">

    <div className="b2b-hero__content">

      <span className="b2b-hero__eyebrow">
        B2B MARKETING FOR TECHNOLOGY BRANDS
      </span>

      <h1>B2B Tech Marketing</h1>

      <p className="b2b-hero__subtitle">
        Strategic storytelling for complex B2B products and services.
      </p>

      <p className="b2b-hero__description">
        We help technology companies, SaaS platforms, enterprise software
        providers, and professional services firms transform complex
        offerings into compelling brand narratives that drive trust,
        demand, and measurable business growth.
      </p>

      <div className="b2b-hero__actions">

        <Link
          href="/contact"
          className="c-btn c-btn--orange"
        >
          Talk to Our Team
        </Link>

        <Link
          href="/work"
          className="c-btn c-btn--outline"
        >
          View Our Work
        </Link>

      </div>

    </div>

  </div>

</section>

       <TextText heading="B2B Storytelling & GTM Support." variant="white">
  <p>
    We turn GTM strategy into clear narratives, content, and design that help
    decision-makers understand, trust, and buy.
  </p>

  <Link href="/work" className="c-btn c-btn--orange">
    Talk to Our B2B Team 
  </Link>
</TextText>

        <TextText heading="Problems We Solve  " variant="black">
          <p>
               Your offer is valuable, but the story around it feels unclear. 

            Sales teams explain the same thing in different ways. 

                 GTM materials exist, but they are not built for real use. 

                  Content is being produced, but it is not strengthening market position or accelerating deals. 
          </p>
          <p>
            
          </p>
        </TextText>



<OffsetCards
  cards={[
    {
      heading: "Our B2B Services",
      body: (
        <>
          <h4>1. GTM Story & Positioning (with DigitalFabric® Consulting)</h4>

          <ul>
            <li>Narrative and messaging architecture</li>
            <li>Positioning statements and value propositions</li>
            <li>ICP and buyer-journey-aligned content plans</li>
            <li>Battlecards and sales enablement storylines</li>
          </ul>

          <h4>2. Thought Leadership & Content</h4>

          <ul>
            <li>Whitepapers and lite papers</li>
            <li>Industry reports and POV documents</li>
            <li>Blogs, articles and newsletters</li>
            <li>Infographics, explainers and fact sheets</li>
            <li>Webinar, event and keynote content</li>
          </ul>

          <h4>3. B2B Brand & Experience</h4>

          <ul>
            <li>Corporate visual identity systems</li>
            <li>Pitch decks and investment decks</li>
            <li>Product one-pagers and solution briefs</li>
            <li>Enterprise website and landing pages</li>
            <li>UX/UI support for product marketing pages</li>
          </ul>
        </>
      ),
      href: "/contact",
      linkLabel: "Talk to Our B2B Team",
    },

    {
      heading: "How We Work With B2B Teams",
      body: (
        <>
          <h4>Simple 4-Step Process</h4>

          <ol>
            <li>
              <strong>Understand the GTM</strong> – Sit with your leadership,
              product and sales teams and review your GTM documentation.
            </li>

            <li>
              <strong>Define the Story</strong> – Align your core narrative,
              value proposition, customer challenges and proof points.
            </li>

            <li>
              <strong>Design the System</strong> – Turn the strategy into
              presentations, templates, content and design systems.
            </li>

            <li>
              <strong>Scale the Execution</strong> – Support your team with
              ongoing campaigns, creative assets and marketing content.
            </li>
          </ol>
        </>
      ),
      href: "/contact",
      linkLabel: "Schedule a Strategy Call",
    },

    {
      heading: "B2B Case Studies",
      body: (
        <>
          <ul>
            <li>
              <strong>Global SaaS Platform</strong> – Reframed GTM narrative
              and built a complete sales enablement system across four global
              regions.
            </li>

            <li>
              <strong>Tech Consulting Firm</strong> – Created a whitepaper
              series and thought leadership reports that strengthened brand
              authority.
            </li>

            <li>
              <strong>RegTech Startup</strong> – Simplified complex technical
              documentation into investor-ready and customer-ready messaging.
            </li>
          </ul>

          <h4>Your product is complex. Your story shouldn't be.</h4>

          <p>
            Let's transform your technical expertise into a compelling story
            that customers understand, trust and act on.
          </p>
        </>
      ),
      href: "/work",
      linkLabel: "View All B2B Case Studies",
    },
  ]}
/>       
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
