import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import TextText from "../../components/TextText";
import { clientLogos, awards } from "../../lib/homeContent";
import { leadershipTeam, companyStats } from "../../lib/aboutContent";
import TeamSection from "../../components/TeamSection";

export const metadata = {
  title: "About Us | Imagenie",
  description:
    "Imagenie is an integrated B2B marketing and PR agency that works for some of the world's most innovative and ambitious tech brands.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main id="content">
        <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-background--black">
          <div className="o-container">
            <div className="o-container__row c-block-padding--both">
              <div className="o-container__col-12 o-container__col-md-8">
                <h1>Bring the excitement</h1>
                <p>
                  <ul><li>Yojana-Tantra - aligning brand and GTM thinking with business goals  </li>

      <li> Kala-Rachana - combining creative craft with structural clarity  </li>

     <li> Likha-Tantra - research-led writing built for authority and action  </li>

     <li>   Jana-Pravartana - marketing systems designed to move audiences to act </li> </ul>
                </p>
              </div>
              <div className="o-container__col-12">
                <img
                  loading="lazy"
                  src="images/Brand&Identity_Option1.jpg"
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        <TextText heading="Think smart. Deliver greatness" variant="white">
          <p>
            At Imagenie, we help ambitious B2B and B2C brands transform ideas into meaningful experiences 
            through strategy, branding, design, and digital innovation.
             Every solution is crafted to build trust, strengthen market presence, and 
             create measurable business growth.
          </p>
          <p>
            We combine consulting, creative thinking, content, technology,
             and marketing under one roof to deliver connected brand experiences. From startups to established enterprises,
             we partner with businesses to create brands that inspire, engage, and leave a lasting impression.
          </p>
        </TextText>

        <TextText heading="Unleash your skills" variant="black">
          <p>
            Our team &lsquo;get&rsquo; tech. Each member of our team thrives on the challenge of
            reaching and influencing high-value B2B buyers of tech solutions. And we&rsquo;re also
            honest, open and thoroughly decent &ndash; which is the important bit, right?
          </p>
        </TextText>

        <div className="o-container--fluid c-links c-links--white c-font c-font--white c-block-background--white c-block-padding--both">
          <div className="o-container">
            <div className="o-container__row">
              <div className="o-container__col-12">
                <h2>We&rsquo;re quickly growing in numbers</h2>
                <p>
                  Tech is the future. But it&rsquo;s also the present. We work with the B2B brands
                  who want to lead the world, and to do that successfully, we had to grow too.
                </p>
              </div>
              {companyStats.map((stat) => (
                <div className="o-container__col-12 o-container__col-md-4" key={stat.label}>
                  <h2>{stat.number}</h2>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-background--black c-block-padding--both">
          <div className="o-container">
            <div className="o-container__row">
              <div className="o-container__col-12">
                <h2>Our customers</h2>
                <p>
                  We work with amazing clients &ndash; world-leading B2B technology brands with big
                  ambitions that challenge the &ldquo;normal&rdquo; and embrace the
                  &ldquo;new&rdquo;.
                </p>
              </div>
              {clientLogos.map((logo) => (
                <div
                  className="o-container__col-6 o-container__col-md-2"
                  key={logo.alt}
                  style={{ display: "flex", alignItems: "center", padding: "1rem 0" }}
                >
                  <img loading="lazy" src={logo.src} alt={logo.alt} style={{ maxWidth: "100%" }} />
                </div>
              ))}
            </div>
          </div>
        </div>

       

  

       
<TeamSection />

        
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
