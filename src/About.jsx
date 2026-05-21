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
            Most AI shipping today lives behind a chat box. The next decade is about
            AI that understands the physical world. For one day, we're opening up
            Cyvl's physical infrastructure data layer — think of it as infrastructure
            for physical infrastructure. What you build on top is up to you.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="num">01 / Real data</div>
            <h3>Full digital twins of entire cities, open for a day.</h3>
            <p>
              Every team gets API and MCP access to Cyvl's full data stack —
              digital twins of entire cities, camera imagery, LiDAR geometry data,
              and natural-language queries against real-world infrastructure. The
              same layer powering hundreds of deployments, yours to build on.
            </p>
          </div>
          <div className="about-card">
            <div className="num">02 / Real problems</div>
            <h3>Any domain. Any vertical. Any problem that touches the physical world.</h3>
            <p>
              We're not limiting you to transportation or government. Bring a problem
              from real estate, climate, insurance, defense, AEC, or anywhere else
              the physical world creates friction. Surprise us.
            </p>
          </div>
          <div className="about-card">
            <div className="num">03 / Real outcomes</div>
            <h3>Cash prizes and a path to keep going.</h3>
            <p>
              $12,000 in cash prizes awarded on the day. The strongest teams get a
              follow-up conversation with Cyvl about ongoing project access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
