"use client";

import { useState } from "react";
import { industriesOrbit } from "../lib/industriesContent";

const ANGLES = [-90, -30, 30, 90, 150, 210]; // top, then clockwise
const RADIUS = 240;
const SIZE = 560;
const CENTER = SIZE / 2;

// Quadratic-curve connector from the hub to each satellite, bowed outward
// slightly (same shape language as the reference's hand-tuned paths).
function connectorPath(x, y) {
  const midX = CENTER + (x - CENTER) * 0.55;
  const midY = CENTER + (y - CENTER) * 0.35;
  return `M${CENTER} ${CENTER} Q${midX} ${midY} ${x} ${y}`;
}

function CenterCircle({ active, onBack }) {
  return (
    <div className="io-center" onClick={active ? onBack : undefined}>
      <div className="io-center__inner">
        {active ? (
          <>
            <div className="io-center__badge">{active.n}</div>
            <div className="io-center__title">{active.name}</div>
            <div className="io-center__desc">{active.blurb}</div>
          </>
        ) : (
          <>
            <div className="io-center__logo">
              IMA<span>G</span>ENIE
            </div>
            <div className="io-center__tagline">DESIGNING DESIRES</div>
          </>
        )}
      </div>
    </div>
  );
}

function IndustryPopup({ cat, side, pinned, onClose }) {
  return (
    <div className={`io-popup io-popup--${side}`}>
      <div className="io-popup__image">
        <img src={cat.image} alt={cat.name} />
        {pinned && (
          <button className="io-popup__close" onClick={onClose} aria-label="Close">
            &times;
          </button>
        )}
      </div>
      <div className="io-popup__body">
        <h4>{cat.name}</h4>
        <p>{cat.blurb}</p>
        <a href={cat.href} className="io-popup__cta">
          See our services &rarr;
        </a>
      </div>
    </div>
  );
}

export default function IndustriesOrbit() {
  const { items } = industriesOrbit;
  const categories = items.map((item, i) => ({
    ...item,
    n: String(i + 1).padStart(2, "0"),
  }));

  const [activeIndex, setActiveIndex] = useState(null); // center-circle selection
  const [pinnedIndex, setPinnedIndex] = useState(null); // popup pinned via click
  const [hoverIndex, setHoverIndex] = useState(null); // popup shown via hover

  const active = activeIndex !== null ? categories[activeIndex] : null;
  const popupIndex = hoverIndex !== null ? hoverIndex : pinnedIndex;

  function handleBadgeClick(e, i) {
    e.stopPropagation();
    setActiveIndex((cur) => (cur === i ? null : i));
    setPinnedIndex((cur) => (cur === i ? null : i));
  }

  return (
    <section className="o-container--fluid c-block-padding--both c-block-background--white">
      <div className="o-container">
        <div className="io-panel" onClick={() => setPinnedIndex(null)}>
          <div className="io-panel__grid">
            <div>
              <div className="io-eyebrow">
                INDUSTRIES
              </div>
              <h2>
                Across sectors,
                <br />
                across stages.
              </h2>
              <p>
                From startups to enterprise teams, we work across categories where clarity,
                credibility, and differentiation create real impact.
              </p>
              <div className="io-quote">
                <p>
                  Every industry has a story. We make it{" "}
                  <span className="io-orange">visible, valuable</span> and{" "}
                  <span className="io-orange">memorable</span>.
                </p>
              </div>
            </div>

            {/* Desktop hub diagram */}
            <div className="io-hub" onClick={(e) => e.stopPropagation()}>
              <div className="io-hub__ring" />

              <svg className="io-hub__svg" viewBox={`0 0 ${SIZE} ${SIZE}`}>
                {ANGLES.map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = CENTER + RADIUS * Math.cos(rad);
                  const y = CENTER + RADIUS * Math.sin(rad);
                  return (
                    <g key={angle}>
                      <path d={connectorPath(x, y)} stroke="#d8d8d8" strokeWidth="2" fill="none" />
                      <circle
                        cx={CENTER + (x - CENTER) * 0.55}
                        cy={CENTER + (y - CENTER) * 0.35}
                        r="5"
                        fill="#ff6a00"
                      />
                    </g>
                  );
                })}
              </svg>

              <CenterCircle active={active} onBack={() => setActiveIndex(null)} />

              {categories.map((cat, i) => {
                const rad = (ANGLES[i] * Math.PI) / 180;
                const x = CENTER + RADIUS * Math.cos(rad);
                const y = CENTER + RADIUS * Math.sin(rad);
                const isActive = activeIndex === i;
                const isDimmed = activeIndex !== null && !isActive;
                const isPopupOpen = popupIndex === i;

                // Popup should open TOWARD the hub's center, not away from
                // it - otherwise right-side cards push their popup off the
                // right edge of the screen, and the top card (cos ~ 0)
                // overlaps its right-hand neighbor. Flipped from the
                // previous version, which had this backwards.
                const side = Math.cos(rad) < 0 ? "right" : "left";

                return (
                  <div
                    key={cat.name}
                    className={`io-card${isActive ? " io-card--active" : ""}`}
                    style={{
                      left: x,
                      top: y,
                      opacity: isDimmed ? 0.5 : 1,
                      // A card's z-index is its own stacking context, so a
                      // popup's z-index only wins against OTHER content
                      // inside that same card - not against sibling cards.
                      // Raise the whole card above its siblings whenever
                      // its popup is open, so the popup can't render behind
                      // a neighboring card.
                      zIndex: isPopupOpen ? 50 : isActive ? 3 : 1,
                    }}
                    onMouseEnter={() => setHoverIndex(i)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <button
                      className="io-card__badge"
                      onClick={(e) => handleBadgeClick(e, i)}
                      aria-pressed={isActive}
                      aria-label={`Show ${cat.name}`}
                    >
                      {cat.n}
                    </button>
                    <div className="io-card__title">{cat.name}</div>
                    <p className="io-card__desc">{cat.blurb}</p>

                    {isPopupOpen && (
                      <IndustryPopup
                        cat={cat}
                        side={side}
                        pinned={pinnedIndex === i}
                        onClose={(e) => {
                          e.stopPropagation();
                          setPinnedIndex(null);
                          setHoverIndex(null);
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

   
    </section>
  );
}