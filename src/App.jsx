import { Navigation, Hero, UrlShortener, CardsInfo, CallToAction, Footer } from "./components"

function App() {

  return (
    <>
      <div className="max-w-[1400px] px-8">
        <Navigation />
        <main>
          <Hero />
          <UrlShortener />
          <CardsInfo />
          <CallToAction />
          <Footer />
        </main>
      </div>
        <Footer />
    </>
  )
}

export default App
