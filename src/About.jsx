function About() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <div className="eyebrow"><span className="sq"></span>About</div>
            <h2 className="section-title">A hackathon for the world that has weight.</h2>
          </div>
          <p className="section-lede">
            Most AI shipping today lives behind a chat box. We think the next decade
            is about the AI that touches asphalt, signs, scans, sensors, and street
            networks. Come build it with us — using Cyvl's LiDAR, digital twin, and
            geospatial APIs, plus credits from our sponsors.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="num">01 / Real data</div>
            <h3>Production geospatial data, not toy datasets.</h3>
            <p>
              Every team gets API access to Cyvl's LiDAR point clouds, road imagery,
              pavement condition layers, and digital twin queries — the same surfaces
              powering city DOTs in production.
            </p>
          </div>
          <div className="about-card">
            <div className="num">02 / Real problems</div>
            <h3>Hard problems pulled from cities and DOTs.</h3>
            <p>
              We'll publish a prompt set with real public-works pain points: condition
              forecasting, sign inventory, ADA compliance, asset extraction, snow
              routing. Pick one or invent your own.
            </p>
          </div>
          <div className="about-card">
            <div className="num">03 / Real outcomes</div>
            <h3>Cash, credits, and a path to keep going.</h3>
            <p>
              $12,000 in cash prizes, split evenly across each winning team's
              four members. The strongest teams get a follow-up conversation
              with Cyvl about ongoing project access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
