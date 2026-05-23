function App() {
  const { Nav, Hero, WhatToBuild, Prizes, Schedule, Sponsors, FAQ, CTABanner, Footer } = window;
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
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
