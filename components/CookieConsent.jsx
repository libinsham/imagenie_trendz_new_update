"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "fox-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function choose(value) {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="c-cookie-consent" role="dialog" aria-modal="true" aria-live="polite">
      <div className="c-cookie-consent__body">
        <p>
          We use cookies to improve your experience and understand how the site is used. Read
          our <Link href="/cookie-policy">Cookie Policy</Link> and{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> for details.
        </p>
      </div>
      <div className="c-cookie-consent__actions">
        <button className="c-cookie-consent__reject" onClick={() => choose("rejected")}>
          Reject non-essential
        </button>
        <button className="c-cookie-consent__accept" onClick={() => choose("accepted")}>
          Accept all
        </button>
      </div>
    </div>
  );
}
