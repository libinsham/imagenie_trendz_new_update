import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import WorkGrid from "../../components/WorkGrid";
import { allWorkArticles } from "../../lib/workContent";

export const metadata = {
  title: "Our Work | Fox Agency",
  description:
    "See the campaigns, brand launches and case studies Fox Agency has delivered for global B2B tech brands.",
};

export default function WorkPage() {
  return (
    <>
      <Header />

      <main id="content">
        <div className="o-container--fluid c-links c-links--white c-font c-font--white c-block-background--white">
          <div className="o-container">
            <div className="o-container__row c-block-padding--both">
              <div className="o-container__col-12 o-container__col-md-8">
                <h1>Our work</h1>
                <p>
                  Thinking, defining, creating, and making a world of difference for the world&rsquo;s
                  biggest tech brands. Here&rsquo;s a look at what we&rsquo;ve been up to.
                </p>
              </div>
            </div>
          </div>
        </div>

        <WorkGrid articles={allWorkArticles} />
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
