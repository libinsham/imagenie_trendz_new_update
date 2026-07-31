"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav, secondaryNav } from "../lib/navigation";

// Renders one level of the off-canvas menu. `path` is the breadcrumb stack of
// section labels the user has drilled into (mirrors the original site's
// .sub-menu.is-active sliding panels).
function MenuLevel({ items, path, setPath, level, backLabel }) {
  // A level > 0 panel is only ever rendered (by its parent, below) once the user
  // has drilled into it, so it always renders as the active/visible panel.
  return (
    <ul
      id={level === 0 ? "menu-secondary" : undefined}
      className={level === 0 ? "menu" : "sub-menu is-active"}
    >
      {level > 0 && (
        <li className="is-back">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPath(path.slice(0, level - 1));
            }}
          >
            {backLabel}
          </a>
        </li>
      )}

      {level > 0 && items.allLabel && (
        <li>
          <Link href={items.href}>{items.allLabel}</Link>
        </li>
      )}

      {(level === 0 ? items : items.children).map((item) => (
        <li key={item.label} className={item.children ? "menu-item-has-children" : undefined}>
          {item.children ? (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPath([...path.slice(0, level), item.label]);
              }}
            >
              {item.label}
            </a>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}

          {item.children && path[level] === item.label && (
            <MenuLevel
              items={item}
              path={path}
              setPath={setPath}
              level={level + 1}
              backLabel={`Back to ${level === 0 ? "main menu" : path[level - 1]}`}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState([]);

  function toggleMenu() {
    setMenuOpen((open) => {
      if (open) setPath([]);
      return !open;
    });
  }

  return (
    <header
      className={`o-container--fluid c-header${menuOpen ? " has-scrolled" : ""}`}
      style={{ backgroundColor: "#000" }}
    >
      <div className="is-background" style={{ backgroundColor: "#000" }} />
      <div className={`o-container c-header__container${menuOpen ? " is-open" : ""}`}>
        <a className="o-visuallyhidden" href="#content">
          Skip to content
        </a>
        <div className="o-container__row c-header__content">
          <div className="c-header__branding c-header__branding--white">
            <Link aria-label="Home" href="/">
              <img src="/images/imagenie-logo.svg" alt="Fox Agency" />
            </Link>
          </div>

          <nav className="c-header__primary-nav c-header__primary-nav--white">
            <ul>
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="c-header__burger">
            <button
              className="c-header__burger__button"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <svg fill="white" className="hamburger" viewBox="0 0 28 28" width="20">
                <rect className="is-line is-top" width="28" height="3" x="0" y="8" rx="0" />
                <rect className="is-line is-bottom" width="28" height="3" x="0" y="16" rx="0" />
              </svg>
              <span>{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </nav>
        </div>
      </div>

      <div
        className={`c-header__secondary-nav o-container--fluid${menuOpen ? " is-open" : ""}`}
        style={{ backgroundColor: "#000" }}
      >
        <div className="o-container c-header__secondary-nav__container">
          <MenuLevel items={secondaryNav} path={path} setPath={setPath} level={0} />
        </div>
      </div>
    </header>
  );
}
