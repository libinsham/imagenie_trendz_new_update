import Header from "../components/Header";
import Hero from "../components/Hero";
import TextText from "../components/TextText";
import VideoEmbed from "../components/VideoEmbed";
import OffsetCards from "../components/OffsetCards";

import MessageTicker from "../components/MessageTicker";
import WorkShowcase from "../components/WorkShowcase";
import IndustriesOrbit from "../components/IndustriesOrbit";
import SplitCards from "../components/SplitCards";
import ArticlesSection from "../components/ArticlesSection";
import CapabilitiesSection from "../components/CapabilitiesSection";
import FourCapabilitiesBoxes from "../components/FourCapabilitiesBoxes";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { workArticles, insightArticles,   insightArticles2, } from "../lib/homeContent";


export default function HomePage() {
  return (
    <>
      <Header />

      <main id="content">
        <Hero />

        <TextText heading="Where Strategy Meets
Creativity." variant="white">
          <p>

            Growth begins with clarity. We combine strategic thinking, creative excellence,
             and digital innovation to help businesses build stronger brands, create meaningful customer experiences, 
             and achieve sustainable growth.
          </p>
        </TextText>

       <VideoEmbed
  src="https://player.vimeo.com/video/1214487870?h=929d6cb0b6&background=1&autoplay=1&muted=1&loop=1"
  title="Creating opportunity for global B2B tech brands | Imagenie"
/>

        
       

        <TextText heading="Helping Businesses
Grow Across
Every Stage" variant="white">
          <p>
         We work with ambitious B2B and B2C brands that need clearer stories, 
         stronger identities, and sharper digital experiences. Whether your audience is an enterprise buyer or an everyday consumer, 
         we shape brand communication around how people understand, trust, and choose.
          </p>
          <p>
        
          </p>
        </TextText>

       <OffsetCards
  cards={[
    {
      heading: "B2B Brands",
      body:
        "We help B2B teams turn complex offerings into clear, credible brand narratives. We create go-to-market stories that sales teams can confidently use, along with whitepapers, pitch decks, landing pages, and campaigns that influence buying decisions.",
      href: "/b2b",
      linkLabel: "Explore B2B Services",
    },
    {
      heading: "B2C Brands",
      body:
        "We help consumer brands build memorable identities that people recognize and trust. From packaging and websites to campaigns and content systems, we create experiences that stand out and stay consistent across every customer touchpoint.",
      href: "/b2c",
      linkLabel: "Explore B2C Services",
    },
  ]}
/>

    <FourCapabilitiesBoxes />

    <MessageTicker words={["IDEATE",  "ILLUSTRATE", "ARTICULATE"]} />

        <WorkShowcase />

     

   

        <IndustriesOrbit />

        <ContactForm />
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
