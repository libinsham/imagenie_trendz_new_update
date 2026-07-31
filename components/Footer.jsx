import Link from "next/link";
import {
  footerQuickLinks1,
  footerQuickLinks2,
  footerLegalLinks,
  offices,
  socialLinks,
} from "../lib/navigation";
import { awards } from "../lib/homeContent";

export default function Footer() {
  return (
    <footer className="c-footer">
      <div className="o-container--fluid c-block-background--black c-footer__top">
        <div className="o-container">
          <div className="o-container__row">
           

           <div className="o-container--fluid c-block-background--black c-footer__top">
  <div className="o-container">
    <div className="o-container__row">

      {/* Quick Links */}
      <div className="o-container__col-12 o-container__col-md-6 o-container__col-lg-2">
        <h2>Quick Links</h2>
        <ul>
          {footerQuickLinks1.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Company */}
      <div className="o-container__col-12 o-container__col-md-6 o-container__col-lg-2">
        <h2>Company</h2>
        <ul>
          {footerQuickLinks2.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div className="o-container__col-12 o-container__col-md-6 o-container__col-lg-2">
        <h2>Services</h2>

        <ul>
          <li>
            <Link href="/b2b">B2B</Link>
          </li>

          <li>
            <Link href="/b2c">B2C</Link>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="o-container__col-12 o-container__col-md-6 o-container__col-lg-2">
        <h2>Resources</h2>

        <ul>
          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <Link href="/insights">Insights</Link>
          </li>

          <li>
            <Link href="/careers">Careers</Link>
          </li>
        </ul>
      </div>

      {/* Connect */}
      <div className="o-container__col-12 o-container__col-md-12 o-container__col-lg-4">
        <h2>Connect</h2>

        <div className="c-footer__social">

          <a
            className="c-link c-link--black c-link--linkedin"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          />

          <a
            className="c-link c-link--black c-link--instagram"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          />

        </div>
      </div>

    </div>
  </div>
</div>
          </div>
        </div>
      </div>

      

      <div className="o-container--fluid c-footer__bottom">
        <div className="o-container">
          <div className="o-container__row">
            <div className="o-container__col-12 o-container__col-md-6 c-footer__copyright">
              <p>&copy; {new Date().getFullYear()} Imagenie</p>
            </div>
            <div className="o-container__col-12 o-container__col-md-6">
              <nav className="c-footer__nav">
                <ul>
                  {footerLegalLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
