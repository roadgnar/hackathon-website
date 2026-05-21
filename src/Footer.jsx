function CTABanner() {
  const { ArrowRight } = window.Icons;
  return (
    <section className="cta-banner" id="apply">
      <div className="wrap">
        <div className="eyebrow"><span className="sq"></span>Apply</div>
        <h2>
          Spend a day building<br />
          something <span className="lime-mark">real</span>.
        </h2>
        <p>Apply solo or with a team of up to 4. 48 seats total. Decisions roll out within 48 hours.</p>
        <a className="btn btn-primary" href="https://luma.com/44sxnb3b" target="_blank" rel="noreferrer">
          Apply on Luma <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-top">
          <div className="brand-block">
            <img src="assets/logo-black.png" alt="CYVL" />
            <p>
              CYVL is an AI-powered geospatial platform for public-works and
              infrastructure teams. The hackathon is our way of helping more people
              build things that touch the real world.
            </p>
          </div>
          <div className="foot-col">
            <h5>Event</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#tracks">Tracks</a></li>
              <li><a href="#prizes">Prizes</a></li>
              <li><a href="#schedule">Schedule</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>CYVL</h5>
            <ul>
              <li><a href="https://cyvl.com" target="_blank" rel="noreferrer">cyvl.com</a></li>
              <li><a href="mailto:hackathon@cyvl.ai">hackathon@cyvl.ai</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Logistics</h5>
            <ul>
              <li>76 School Street</li>
              <li>Somerville, MA</li>
              <li>Saturday, June 13, 2026</li>
              <li>09:00 — 20:30 ET</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 CYVL · Build the physical future</div>
          <div>v1.0 — Hackathon · 2026</div>
        </div>
      </div>
    </footer>
  );
}

window.CTABanner = CTABanner;
window.Footer = Footer;
