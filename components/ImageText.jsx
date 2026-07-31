import Link from "next/link";

export default function ImageText({ image, heading, children, ctaLabel, ctaHref, reverse = true }) {
  return (
    <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-padding--both c-block-background--black">
      <div className="o-container c-b-image-text o-container--overflow-v">
        <div className={`o-container__row ${reverse ? "o-row-reverse" : ""}`}>
          <div className="o-container__col-12 o-container__col-md-6 is-right c-b-image-text__image c-b-image-text__image--black">
            <div className="c-b-image-text__image-container">
              <div className="c-b-image-text__image-wrapper">
                <img loading="lazy" src={image} alt="" />
              </div>
            </div>
          </div>
          <div className="o-container__col-12 o-container__col-md-6">
            <div className="c-b-image-text__copy c-b-image-text__copy--single is-right">
              <div>
                <h2>{heading}</h2>
                {children}
                {ctaLabel && (
                  <div className="c-btn c-btn--black">
                    <Link href={ctaHref}>{ctaLabel}</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
