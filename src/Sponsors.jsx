function Sponsors() {
  return (
    <section className="block" id="sponsors">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <div className="eyebrow"><span className="sq"></span>Sponsors</div>
            <h2 className="section-title">Hosted by CYVL. Backed by the companies that build the world.</h2>
          </div>
          <p className="section-lede">
            CYVL hosts the day, brings the data, and runs the API. NVIDIA and
            Autodesk co-sponsor.
          </p>
        </div>

        <div className="sponsor-tier">
          <div className="sponsor-row three">
            <div className="sponsor">
              <div className="role">Host</div>
              <img className="sponsor-logo cyvl" src="assets/logo-black.png" alt="CYVL" />
            </div>
            <div className="sponsor">
              <div className="role">Co-sponsor</div>
              <div className="brand-lockup">
                <img className="brand-mark" src="https://cdn.simpleicons.org/nvidia/000000" alt="" aria-hidden="true" />
                <span className="brand-word nvidia">NVIDIA</span>
              </div>
            </div>
            <div className="sponsor">
              <div className="role">Co-sponsor</div>
              <div className="brand-lockup">
                <img className="brand-mark" src="https://cdn.simpleicons.org/autodesk/000000" alt="" aria-hidden="true" />
                <span className="brand-word autodesk">Autodesk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Sponsors = Sponsors;
