import Link from "next/link";

export default function CapabilitiesSection({
  heading,
  ctaLabel,
  ctaHref,
  articles,
}) {
  return (
    <section className="o-container--fluid c-block-padding--both c-block-background--white">
      <div className="o-container">

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <h2>{heading}</h2>

          <Link href={ctaHref}>{ctaLabel}</Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
          }}
        >
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              style={{
                textDecoration: "none",
                color: "inherit",
                border: "1px solid #e5e5e5",
                borderRadius: "18px",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <img
                src={article.image}
                alt={article.title}
                style={{
                  width: "100%",
                  display: "block",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: 24 }}>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}