function Prizes() {
  return (
    <section className="block dark" id="prizes">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <div className="eyebrow"><span className="sq"></span>Prizes</div>
            <h2 className="section-title">$12,000 in cash prizes.</h2>
          </div>
          <p className="section-lede">
            Awarded by a panel of Cyvl engineers and outside judges.
          </p>
        </div>

        <div className="prizes">
          <div className="prize first">
            <div className="rank">01 / Grand prize</div>
            <div className="name">Best overall build</div>
            <div className="amount"><span className="currency">$</span>8,000</div>
          </div>
          <div className="prize second">
            <div className="rank">02 / Runner-up</div>
            <div className="name">Second place</div>
            <div className="amount"><span className="currency">$</span>3,000</div>
          </div>
          <div className="prize third">
            <div className="rank">03 / Third</div>
            <div className="name">Third place</div>
            <div className="amount"><span className="currency">$</span>1,000</div>
          </div>
        </div>

      </div>
    </section>
  );
}

window.Prizes = Prizes;
