function Schedule() {
  const rows = [
    { t: "9:00 AM",  l: "Doors open · Breakfast, onboarding & kickoff", d: "Coffee, bagels, name tags. Welcome and judging criteria.", tag: "Kickoff", accent: true },
    { t: "9:30 AM",  l: "Build time begins",                            d: "Heads down. Engineers on the floor for help.",             tag: "" },
    { t: "5:30 PM",  l: "Submissions close",                            d: "GitHub repo + one-page writeup. Hard stop.",               tag: "Hard stop", accent: true },
    { t: "5:30 PM",  l: "Presentations begin",                          d: "Five minutes per team, two minutes Q&A.",                  tag: "" },
    { t: "7:30 PM",  l: "Presentations end · Winners announced",        d: "First, second, third. Group photo.",                       tag: "Awards", accent: true },
  ];

  return (
    <section className="block" id="schedule">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <div className="eyebrow"><span className="sq"></span>Schedule</div>
            <h2 className="section-title">One day, one room, one build.</h2>
          </div>
          <p className="section-lede">
            All times Eastern. Food and coffee throughout the day.
            Submissions close at 5:30 PM sharp — push your repo before then.
          </p>
        </div>

        <div className="schedule">
          {rows.map((r, i) => (
            <div className="row" key={i}>
              <div className="time">{r.t}</div>
              <div className="label">
                {r.l}
                <span className="desc">{r.d}</span>
              </div>
              {r.tag ? (
                <div className={"tag" + (r.accent ? " accent" : "")}>{r.tag}</div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Schedule = Schedule;
