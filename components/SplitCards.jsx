import Link from "next/link";

export default function SplitCards({ cards }) {
  return (
    <div className="o-container--fluid c-font c-block-padding--none c-block-background--black">
      <div className="o-container c-b-split-cards">
        <div className="o-container__row c-links--standard c-font--standard">
          {cards.map((card) => (
            <div
              key={card.heading}
              className="o-container__col-12 o-container__col-lg-6 c-b-split-cards__card--0"
            >
              <Link href={card.href} className="c-b-split-cards__card">
                <div className="c-b-split-cards__card__image">
                  <img loading="lazy" src={card.image} alt="" />
                  <div className="is-grad" />
                </div>
                <div className="c-btn c-btn--black">
                  <span>{card.tagLabel}</span>
                </div>
                <div className="c-b-split-cards__card__content c-b-split-cards__card__content--black">
                  <h2>{card.heading}</h2>
                  <p>{card.body}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
