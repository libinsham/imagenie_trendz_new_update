// Big hero tile + a 2x2 grid of supporting tiles, matching the reference
// work-showcase layout. Swap the `image`/`label` values for real assets.

const items = [
  { label: "Website", image: "/images/work1.png", size: "large", href: "/work" },
  { label: "Social Media", image: "/images/work2.png", href: "/work" },
  { label: "Print Collaterals", image: "/images/work3.png", href: "/work" },
  { label: "Digital", image: "/images/work4.png", href: "/work" },
  { label: "Packaging", image: "/images/work5.png", href: "/work" },
];

export default function WorkShowcase() {
  return (
    <section className="o-container--fluid c-block-padding--both c-block-background--black">
      <div className="o-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ color: "#fff" }}>Our Work</h2>
          <div className="c-btn c-btn--black-transparent">
            <a href="/work">See all work</a>
          </div>
        </div>

        <div className="work-showcase">
          {items.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className={`work-showcase__tile${item.size === "large" ? " work-showcase__tile--large" : ""}`}
            >
              <img src={item.image} alt={item.label} />
              <span className="work-showcase__label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      
    </section>
  );
}
