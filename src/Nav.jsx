function Nav() {
  const { ArrowRight } = window.Icons;
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <div className="nav-left">
          <a href="#top" className="brand">
            <img src="assets/logo-black.png" alt="CYVL" />
          </a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#prizes">Prizes</a>
            <a href="#schedule">Schedule</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
        <div className="nav-right">
          <a className="btn btn-outline" href="#about">Learn more</a>
          <a className="btn btn-primary" href="https://luma.com/44sxnb3b" target="_blank" rel="noreferrer">
            Apply <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

window.Nav = Nav;
