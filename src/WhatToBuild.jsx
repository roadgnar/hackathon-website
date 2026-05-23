function WhatToBuild() {
  return (
    <section className="block" id="ideas">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <div className="eyebrow"><span className="sq"></span>What to build</div>
            <h2 className="section-title">Ideas to get you started.</h2>
          </div>
          <p className="section-lede">
            Cities have always been inspected by humans with clipboards — slow, expensive, full of gaps.
            Cyvl made every street, sign, sidewalk, pole, and curb a data point. High-res imagery.
            LiDAR. CV tools you can train in hours. APIs that let your code query a real city like a database.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="num">01 / Infrastructure</div>
            <h3>Street Light Failure Prediction</h3>
            <p>
              Corroded poles. Failing fixtures. Flag them before outages hit.
              Layer in crime and traffic data to rank which blocks go first.
            </p>
          </div>
          <div className="about-card">
            <div className="num">02 / Climate</div>
            <h3>Urban Heat Island Mapper</h3>
            <p>
              Cyvl tree canopy scans + satellite surface temps. Find the hottest neighborhoods.
              Show where cooling infrastructure is missing.
            </p>
          </div>
          <div className="about-card">
            <div className="num">03 / Accessibility</div>
            <h3>Real Accessibility Auditor</h3>
            <p>
              A ramp on a map is not a usable ramp. Find every ADA route, then cross it
              with flood zones, pavement damage, and maintenance gaps. Score how accessible
              a city actually is, not just how it looks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.WhatToBuild = WhatToBuild;
