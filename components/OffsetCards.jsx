import Link from "next/link";

export default function OffsetCards({ cards }) {
  return (
    <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-padding--both c-block-background--black c-b-full-width-text">
      <div className="o-container">
        <div className="o-container__row c-b-offset-cards">
          {cards.map((card) => (
            <div
              key={card.heading}
              className="o-container__col-12 o-container__col-offset-0 o-container__col-md-6 c-b-offset-cards__left"
            >
              <div className="c-b-offset-cards__card c-b-offset-cards__card--black">
                <h2>{card.heading}</h2>
                <p>{card.body}</p>
                <div className="c-btn c-btn--black">
                  <Link href={card.href}>{card.linkLabel}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
