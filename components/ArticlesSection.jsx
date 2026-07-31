import Link from "next/link";

function LargeArticle({ article }) {
  return (
    <article className="o-container__col-12 c-b-cards-loop__article c-b-related__large">
      <Link href={article.href}>
        <div className="c-b-cards-loop__article__image c-b-related__large__image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="c-b-cards-loop__article__content">
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}

function SmallArticle({ article }) {
  return (
    <article className="o-container__col-12 o-container__col-md-4 c-b-cards-loop__article">
      <Link href={article.href}>
        <div className="c-b-cards-loop__article__image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="c-b-cards-loop__article__content">
          {article.tag && (
            <div className="c-b-cards-loop__tag">
              <span>{article.tag}</span>
            </div>
          )}

          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}

function GridCard({ article }) {
  return (
    <Link
      href={article.href}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block",
      }}
    >
      <div
        style={{
          border: "1px solid #e5e5e5",
          borderRadius: "18px",
          overflow: "hidden",
          background: "#fff",
          height: "100%",
        }}
      >
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div style={{ padding: "24px" }}>
          <h3
            style={{
              fontSize: "30px",
              marginBottom: "16px",
            }}
          >
            {article.title}
          </h3>

          <p
            style={{
              color: "#555",
              lineHeight: "1.7",
            }}
          >
            {article.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function ArticlesSection({
  heading,
  ctaLabel,
  ctaHref,
  variant = "white",
  featured,
  articles = [],
  layout = "default",
}) {
  // ===== GRID 4 LAYOUT =====

  if (layout === "grid4") {
    const allArticles = featured ? [featured, ...articles] : articles;

    return (
      <section
        className={`o-container--fluid c-block-padding--both c-block-background--${variant}`}
      >
        <div className="o-container">

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "60px",
            }}
          >
            <h2>{heading}</h2>

            {ctaHref && (
              <div className={`c-btn c-btn--${variant === "black" ? "black-transparent" : "white"}`}>
                <Link href={ctaHref}>{ctaLabel}</Link>
              </div>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0,1fr))",
              gap: "32px",
            }}
          >
            {allArticles.map((article) => (
              <GridCard
                key={article.href}
                article={article}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ===== ORIGINAL LAYOUT =====

  return (
    <section
      className={`o-container--fluid c-block-padding--both c-block-background--${variant}`}
    >
      <div className="o-container">
        <div className="o-container__row">

          <div className="o-container__col-12 o-container__col-md-6">
            <h2>{heading}</h2>
          </div>

          <div
            className="o-container__col-12 o-container__col-md-6"
            style={{ textAlign: "right" }}
          >
            {ctaHref && (
              <div className={`c-btn c-btn--${variant === "black" ? "black-transparent" : "white"}`}>
                <Link href={ctaHref}>{ctaLabel}</Link>
              </div>
            )}
          </div>

          {featured && (
            <LargeArticle article={featured} />
          )}

          {articles.map((article) => (
            <SmallArticle
              key={article.href}
              article={article}
            />
          ))}

        </div>
      </div>
    </section>
  );
}