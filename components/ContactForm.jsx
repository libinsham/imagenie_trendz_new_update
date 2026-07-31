"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ContactForm() {
  useEffect(() => {
    // Re-create the HubSpot form once the embed script has loaded, and scroll to
    // this section on submit - mirrors the original page's inline behavior.
    function createForm() {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "4196113",
          formId: "88600978-4b7a-4cc0-975e-d1e61948a617",
          target: "#hubspot-form-target",
        });
      }
    }

    if (window.hbspt) {
      createForm();
    }

    function handleMessage(event) {
      if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmitted") {
        document
          .getElementById("formThankyou")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-background--black">
      <div className="o-container" id="formThankyou">
        <div className="o-container__row c-b-form c-b-form--black">
          <div className="o-container__col-12 o-container__col-md-5 c-b-form__form">
            <div className="c-b-form__copy">
              <h3>Let&rsquo;s talk</h3>
            </div>
            <div id="hubspot-form-target" />
            <Script
              src="https://js.hsforms.net/forms/embed/v2.js"
              strategy="afterInteractive"
              onLoad={() => {
                window.hbspt?.forms.create({
                  region: "na1",
                  portalId: "4196113",
                  formId: "88600978-4b7a-4cc0-975e-d1e61948a617",
                  target: "#hubspot-form-target",
                });
              }}
            />
          </div>
          <div className="o-container__col-12 o-container__col-offset-0 o-container__col-md-6 o-container__col-md-offset-1 c-b-form__image">
            <img loading="lazy" src="/images/contact-graphic.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
