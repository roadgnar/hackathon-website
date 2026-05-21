function FAQ() {
  const items = [
    {
      q: "Who is this for?",
      a: "Engineers, designers, and researchers working on AI for the physical world — robotics, geospatial, infra, civic tech, computer vision. You don't need a CYVL background; you do need to bring a laptop and ideas.",
    },
    {
      q: "Is it free?",
      a: "Yes. Application-only, but free to attend. CYVL covers food, coffee, API access, and the venue.",
    },
    {
      q: "What do I need to bring?",
      a: "A laptop and charger. Optional: a team. We'll match solo builders on the day if you want one.",
    },
    {
      q: "How do teams work?",
      a: "Teams are four people, strict. Twelve teams total, no exceptions. You can register solo and we'll match you with a team before the event. Prize money is split evenly across all four members and we pay each builder directly.",
    },
    {
      q: "Do I keep my IP?",
      a: "Yes. Participants retain IP for what they build. CYVL gets a non-exclusive right to showcase your project publicly. The CYVL dataset is for use during the event only.",
    },
    {
      q: "Will there be food?",
      a: "Breakfast, lunch, two snack rounds, and coffee on tap all day. Dietary restrictions collected in the confirmation email.",
    },
    {
      q: "How does judging work?",
      a: "A four-person panel scores teams on technical execution, physical-AI fit, civic viability, and demo clarity. Five-minute demo plus two-minute Q&A per team.",
    },
  ];

  return (
    <section className="block" id="faq">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <div className="eyebrow"><span className="sq"></span>FAQ</div>
            <h2 className="section-title">Questions, answered straight.</h2>
          </div>
          <p className="section-lede">
            Anything missing? Email <a className="ds-link" href="mailto:hackathon@cyvl.ai">hackathon@cyvl.ai</a> — we usually reply within a day.
          </p>
        </div>

        <div className="faq-grid">
          {items.map((it, i) => (
            <div className="faq-item" key={i}>
              <h4><span className="qnum">{String(i + 1).padStart(2, "0")}</span>{it.q}</h4>
              <p>{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
