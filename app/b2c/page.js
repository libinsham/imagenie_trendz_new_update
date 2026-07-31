import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import TextText from "../../components/TextText";
import OffsetCards from "../../components/OffsetCards";
import Link from "next/link";


export const metadata = {
  title: "B2C Brands | Imagenie",
  description:
    "We help consumer brands build memorable identities that people recognize and trust across every touchpoint.",
};

export default function B2CPage() {
  return (
    <>
      <Header />

      <main id="content">
        <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-background--black">
          <div className="o-container">
            <div className="o-container__row c-block-padding--both">
              <div className="o-container__col-12 o-container__col-md-8">
                <h1>B2C brands people remember and return to. </h1>
                <p>
                  From identity and packaging to campaigns and content, we help consumer brands build stronger presence, consistency, and conversion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <TextText heading="B2C Challenges We Address " variant="white">
          <p>
           <ul>
  <li>
    Your brand looks interchangeable in a crowded category.
  </li>

  <li>
    The customer experience feels inconsistent across channels.
  </li>

  <li>
    Content is active, but not building real affinity or loyalty.
  </li>

  <li>
    Packaging or digital touchpoints are not pulling their weight in
    conversion.
  </li>
</ul>
          </p>
        </TextText>

        <TextText heading="Our B2C Services " variant="black">
          <p>
            Packaging, brand identity systems, websites, social and content, and the campaigns
            that bring it all together across every customer touchpoint.
          </p>
        </TextText>

        <OffsetCards
          cards={[
            {
              heading: " Brand & Identity",
             body: (
  <ul>
    <li>Brand naming when needed</li>
    <li>Visual identity including logo, colours, typography, and imagery</li>
    <li>Verbal identity including tone of voice, messaging, and taglines</li>
    <li>Brand guidelines and ready-to-use asset kits</li>
  </ul>
),
              href: "/work",
              linkLabel: "Our work",
            },
            {
              heading: "Packaging & Collateral",
              body: (
  <ul>
    <li>Primary and secondary packaging concepts</li>
    <li>On-shelf mock-ups and point-of-sale (POS) materials</li>
    <li>Print collateral including flyers, posters, brochures, and catalogues</li>
    <li>Brand books, launch kits, and marketing toolkits</li>
  </ul>
),
              href: "/industries",
              linkLabel: "Industries we work in",
            },
            {
              heading: "Digital Presence & Campaigns",
             body: (
  <>
    <h4>Digital Marketing & Campaigns</h4>

    <ul>
      <li>Brand and campaign websites (WordPress & Shopify)</li>
      <li>Social media visual systems and reusable content templates</li>
      <li>Performance creative for Meta, Google, and LinkedIn campaigns</li>
      <li>Email marketing and retention design (automated flows & newsletters)</li>
      <li>Influencer marketing campaigns and creator collaborations</li>
    </ul>
  </>
),
              href: "/industries",
              linkLabel: "Industries we work in",
            },
          ]}
        />

 <TextText heading="How We Work With B2C Brands  " variant="white">
          <p>
           <ul>
  <li>
    Discover – Understand your category, consumer, price point and competitive set.  
  </li>

  <li>
    Define – Craft a clear positioning and creative direction.  
  </li>

  <li>
    Design – Develop identity, packaging and digital assets.
  </li>

  <li>
   Deploy – Launch your brand across channels and refine based on real‑world data. 
  </li>
</ul>
          </p>
        </TextText>


 <TextText heading="B2C Case Snippets  " variant="black">
            <p>
           <ul>
  <li>
    D2C Wellness Brand – Full identity, packaging system and Shopify store, ready for paid and influencer marketing.  
  </li>

  <li>
   Hospitality Brand – Visual refresh, website and content that moved direct bookings away from OTAs.   
  </li>

  <li>
    <b>Lifestyle Retailer </b>– Social‑first creative system and campaigns that drove consistent online engagement. 
  </li>

 
</ul>
          </p>

    <div
  style={{
    marginTop: "30px",
    border: "2px solid #ff6a00",
    padding: "20px 20px",
    borderRadius: "12px",
    width: "33%",
  }}
>
  <Link href="/contact" className="b2c-cta">
    Talk to Our B2C Team →
  </Link>
</div>

          
        </TextText>

      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
