// Plain grid of case study cards - no client-side JS. Each card links out to
// the live write-up on fox.agency until those pages are rebuilt here.

export default function WorkGrid({ articles }) {
  return (
    <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-background--black c-block-padding--both">
      <div className="o-container">
        <div className="o-container__row">
          {articles.map((article) => (
            <article
              className="o-container__col-12 o-container__col-md-4 c-b-cards-loop__article"
              key={article.href}
            >
              <a href={article.href} target="_blank" rel="noopener noreferrer">
                <div className="c-b-cards-loop__article__image">
                  <img loading="lazy" src={article.image} alt="" />
                  <div className="is-grad" />
                  <div className="c-btn c-btn--black c-btn--black--active">
                    <span>View case study</span>
                  </div>
                </div>
                <div className="c-b-cards-loop__article__content">
                  {article.client && (
                    <div className="c-b-cards-loop__tag">
                      <span>{article.client}</span>
                    </div>
                  )}
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
