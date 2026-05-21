function Hero() {
  const { ArrowRight, MapPin, Calendar, Clock, Users, Trophy } = window.Icons;

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-meta-row">
          <span className="pill"><span className="dot"></span>Applications open</span>
          <span className="pill"><Calendar size={14} /> Saturday, June 13, 2026</span>
          <span className="pill"><MapPin size={14} /> Cyvl HQ · Somerville, MA</span>
          <span className="pill"><Clock size={14} /> 9:00 AM — 7:30 PM ET</span>
        </div>

        <h1>
          Build the<br />
          <span className="lime-mark">physical</span> future.
        </h1>

        <p className="hero-sub">
          A one-day physical AI hackathon for undergrad and grad students.
          Build with Cyvl's data infrastructure — full digital twins of entire cities,
          camera imagery, LiDAR, geometry data, and APIs and MCPs that let you
          talk directly to the physical world. Hosted at Cyvl HQ in Somerville, MA.
        </p>

        <div className="hero-ctas">
          <a className="btn btn-primary" href="https://luma.com/44sxnb3b" target="_blank" rel="noreferrer">
            Apply to build <ArrowRight size={16} />
          </a>
          <a className="btn btn-outline" href="#schedule">View schedule</a>
          <span className="seats">Apply solo or with a team of up to 4 · 48 seats</span>
        </div>

        <div className="hero-stats">
          <div className="cell">
            <div className="label">Prize pool</div>
            <div className="value">$12,000</div>
            <div className="sub">Cash prizes</div>
          </div>
          <div className="cell">
            <div className="label">Format</div>
            <div className="value">1 day · in-person</div>
            <div className="sub">9:00 AM — 7:30 PM, June 13</div>
          </div>
          <div className="cell">
            <div className="label">Teams</div>
            <div className="value">12 × 4 builders</div>
            <div className="sub">Solo applicants welcome — we'll match you</div>
          </div>
          <div className="cell">
            <div className="label">Stack</div>
            <div className="value">Physical AI</div>
            <div className="sub">Digital twins · LiDAR · vision · MCPs</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
