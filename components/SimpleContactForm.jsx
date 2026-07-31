// Plain HTML contact form - no client-side JavaScript, no third-party embed.
// It posts straight to the /api/contact route (see app/api/contact/route.js),
// which redirects back here with ?sent=true so we can show a thank-you message.

export default function SimpleContactForm({ sent }) {
  return (
    <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-background--black">
      <div className="o-container" id="contact-form">
        <div className="o-container__row c-b-form c-b-form--black">
          <div className="o-container__col-12 o-container__col-md-7 c-b-form__form">
            <div className="c-b-form__copy">
              <h3>Let&rsquo;s talk</h3>
              <p>Fill in the form below and someone from the team will get back to you.</p>
            </div>

            {sent ? (
              <p>Thanks &ndash; your message has been sent. We&rsquo;ll be in touch soon.</p>
            ) : (
              <form action="/api/contact" method="POST">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" required />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />

                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" />

                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <input className="hs-button" type="submit" value="Send message" />
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
