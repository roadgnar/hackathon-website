function Sponsors() {
  return (
    <section className="block" id="sponsors">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <div className="eyebrow"><span className="sq"></span>Sponsors</div>
            <h2 className="section-title">Companies building technology for the physical world.</h2>
          </div>
          <p className="section-lede">
            Hosted by Cyvl. Backed by organizations at the frontier of physical technology.
          </p>
        </div>

        <div className="sponsor-tier">
          <div className="sponsor-row four">
            <div className="sponsor">
              <div className="role">Host</div>
              <img className="sponsor-logo cyvl" src="assets/logo-black.png" alt="Cyvl" />
            </div>
            <div className="sponsor">
              <div className="role">Co-sponsor</div>
              <div className="brand-lockup">
                <img className="brand-mark" src="https://cdn.simpleicons.org/autodesk/000000" alt="" aria-hidden="true" />
                <span className="brand-word autodesk">Autodesk</span>
              </div>
            </div>
            <div className="sponsor">
              <div className="role">Co-sponsor</div>
              <img className="sponsor-logo nvidia" src="assets/nvidia-logo.png" alt="NVIDIA" />
            </div>
            <div className="sponsor">
              <div className="role">Co-sponsor</div>
              <img className="sponsor-logo boston" src="assets/boston-logo.png" alt="City of Boston" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Sponsors = Sponsors;
