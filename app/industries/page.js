import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import { industries } from "../../lib/industriesContent";

export const metadata = {
  title: "Industries | Fox Agency",
  description:
    "The B2B tech industries Fox Agency works in: Automotive, SaaS, Industry 4.0, Fintech, IT & Cloud, Transformation, Electronics, and Telco & IoT.",
};

export default function IndustriesPage() {
  return (
    <>
      <Header />

      <main id="content">
        <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-background--black">
          <div className="o-container">
            <div className="o-container__row c-block-padding--both">
              <div className="o-container__col-12 o-container__col-md-8">
                <h1>Industries</h1>
                <p>
                  Today&rsquo;s unicorn, tomorrow&rsquo;s Meta; the world of tech moves fast.
                  We&rsquo;re all over these industries &ndash; and a whole lot more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="o-container--fluid c-links c-links--white c-font c-font--white c-block-background--white c-block-padding--both">
          <div className="o-container">
            <div className="o-container__row">
              {industries.map((industry) => (
                <div className="o-container__col-12 o-container__col-md-6 o-container__col-lg-3" key={industry.name}>
                  <h3>{industry.name}</h3>
                  <p>{industry.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
