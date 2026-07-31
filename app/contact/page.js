import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import SimpleContactForm from "../../components/SimpleContactForm";
import { offices } from "../../lib/navigation";

export const metadata = {
  title: "Contact Us | Fox Agency",
  description: "Get in touch with Fox Agency - the B2B tech marketing agency.",
};

export default function ContactPage({ searchParams }) {
  const sent = searchParams?.sent === "true";

  return (
    <>
      <Header />

      <main id="content">
        <div className="o-container--fluid c-links c-links--white c-font c-font--white c-block-background--white">
          <div className="o-container">
            <div className="o-container__row c-block-padding--both">
              <div className="o-container__col-12 o-container__col-md-8">
                <h1>Contact us</h1>
                <p>
                  Got a project in mind, or just want to say hello? Send us a message and
                  we&rsquo;ll get back to you as soon as we can.
                </p>
              </div>
            </div>
          </div>
        </div>

        <SimpleContactForm sent={sent} />

        <div className="o-container--fluid c-links c-links--white c-font c-font--white c-block-background--white">
          <div className="o-container">
            <div className="o-container__row c-block-padding--both">
              <div className="o-container__col-12">
                <h2>Our offices</h2>
              </div>
             
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
