function App() {
  const { Nav, Hero, About, WhatToBuild, Prizes, Schedule, Sponsors, FAQ, CTABanner, Footer } = window;
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <About />
        <WhatToBuild />
        <Prizes />
        <Schedule />
        <Sponsors />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
