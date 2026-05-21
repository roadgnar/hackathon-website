function Schedule() {
  const rows = [
    { t: "09:00",  l: "Doors + breakfast",       d: "Bagels, coffee, name tags. Find your team.", tag: "" },
    { t: "09:15",  l: "Kickoff",                 d: "Welcome, sponsors, judging criteria.",       tag: "Keynote", accent: true },
    { t: "09:30",  l: "Build time begins",       d: "Heads down. Engineers on the floor for help.", tag: "" },
    { t: "12:30",  l: "Lunch",                   d: "Boxed lunch, dietary options labeled.",     tag: "" },
    { t: "15:30",  l: "Afternoon snacks",        d: "Coffee refresh.",                            tag: "" },
    { t: "17:00",  l: "30-minute warning",       d: "Wrap up your demo, push your repo.",         tag: "" },
    { t: "17:30",  l: "Submissions close",       d: "GitHub repo + one-page writeup.",            tag: "Hard stop", accent: true },
    { t: "17:30",  l: "Presentations begin",     d: "Five minutes per team, two minutes Q&A.",    tag: "" },
    { t: "19:30",  l: "Presentations end",       d: "Judges deliberate, builders unwind.",        tag: "" },
    { t: "20:00",  l: "Winners announced",       d: "First, second, third. Group photo.",         tag: "Awards", accent: true },
    { t: "20:30",  l: "Cleanup + close",         d: "Drinks across the street if you're up for it.", tag: "" },
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
            All times Eastern. We keep things tight so you can spend time building,
            not sitting through programming. The 3:30 PM submission cutoff is a
            hard stop — push your repo before then.
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
