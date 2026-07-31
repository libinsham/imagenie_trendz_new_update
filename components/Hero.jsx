"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { clientLogos } from "../lib/homeContent";

export default function Hero() {
  const videoRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src =
  window.innerWidth > 991
    ? "/video/Abstract_Cubes.mp4"
    : "https://fox.agency/wp-content/uploads/2023/05/1022-ap-540p30-640-360.mp4";

    const source = document.createElement("source");
    source.src = src;
    source.type = "video/mp4";
    video.appendChild(source);
    video.load();
  }, []);

  return (
    <>
      <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  poster="/images/abstract-light-painting-dark.jpg"
  className="c-b-hero__video o-container--fluid"
/>



      <div className="c-b-hero__video__tint" />

      <section className="o-container--fluid c-b-hero c-b-hero--video c-links c-links--black-transparent c-block-background--black-transparent c-font c-font--black-transparent">
        <div className="o-container c-b-hero__container">
          <div className="o-container__row">
            <div className="o-container__col-12 o-container__col-offset-0 o-container__col-md-12 o-container__col-lg-8 c-b-hero__title c-b-hero__title--video">
              <span className="is-tag is-tag--black-transparent">
                Creating opportunity for
              </span>
              <h1>
                <span className="c-b-hero__head-one"> Building  <br/>  Brands That  <br/> Lead Markets. </span>
              </h1>
            </div>
            <div className="o-container__col-12 o-container__col-offset-0 o-container__col-md-12 o-container__col-md-offset-0 o-container__col-lg-6 o-container__col-lg-offset-6 c-b-hero__column__right--video">
              <div className="c-b-hero__intro--video">
                <div className="c-b-hero__intro">
                  <p>
                   From strategy and positioning to storytelling, design, and marketing, we help B2B and B2C brands create clarity, 
                   stand apart, and drive measurable growth. / 
                  </p>
                  <p>We call this creating opportunity. It&rsquo;s what we do.</p>
                </div>
                <div className="c-btn c-btn--black-transparent">
                  <Link href="/contact">Get in Touch</Link>
                  <a
                    href="#"
                    className="is-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalOpen(true);
                    }}
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-b-hero__logos">
          <div className="c-b-hero__logos__content">
            {clientLogos.map((logo) => (
              <div className="c-b-hero__logos__content__logo" key={logo.alt}>
                <img loading="lazy" src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`c-modal__video${modalOpen ? " is-open" : ""}`}>
        <div className="c-modal__close" onClick={() => setModalOpen(false)} />
        <div className="c-modal__video__warpper">
          {modalOpen && (
            <iframe
              loading="lazy"
              title="Fox Agency - Creating Opportunity"
              src="https://player.vimeo.com/video/1056355646?h=c23f4add05&dnt=1&app_id=122963&autoplay=1"
              width="640"
              height="268"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
        </div>
      </div>
    </>
  );
}
