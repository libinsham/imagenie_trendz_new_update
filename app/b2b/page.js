import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import TextText from "../../components/TextText";
import OffsetCards from "../../components/OffsetCards";

export const metadata = {
  title: "B2B Brands | Imagenie",
  description:
    "We help B2B teams turn complex offerings into clear, credible brand narratives that influence buying decisions.",
};

export default function B2BPage() {
  return (
    <>
      <Header />

      <main id="content">
        <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-background--black">
          <div className="o-container">
            <div className="o-container__row c-block-padding--both">
              <div className="o-container__col-12 o-container__col-md-8">
                <h1>B2B Brands</h1>
                <p>
                  We help B2B teams turn complex offerings into clear, credible brand narratives.
                  We create go-to-market stories that sales teams can confidently use, along with
                  whitepapers, pitch decks, landing pages, and campaigns that influence buying
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <TextText heading="Complex offerings. Clear stories." variant="white">
          <p>
            B2B buying decisions are rarely simple - long cycles, multiple stakeholders, and
            technical products that are hard to explain in a soundbite. We turn that complexity
            into narratives your sales team can use with confidence, and your buyers can actually
            follow.
          </p>
        </TextText>

        <TextText heading="What we build for B2B brands" variant="black">
          <p>
            Go-to-market messaging, whitepapers and thought leadership, pitch decks, landing pages,
            and the campaigns that carry all of it to the accounts that matter.
          </p>
        </TextText>

        <OffsetCards
          cards={[
            {
              heading: "See it in practice",
              body: "Explore the campaigns and brand launches we've delivered for B2B tech and enterprise clients.",
              href: "/work",
              linkLabel: "Our work",
            },
            {
              heading: "Industries we know",
              body: "SaaS, Fintech, Industry 4.0, IT & Cloud, and more - see the sectors we work in.",
              href: "/industries",
              linkLabel: "Industries we work in",
            },
          ]}
        />
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
