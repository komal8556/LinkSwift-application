import { Navigation, Hero, UrlShortener, CardsInfo, CallToAction, Footer } from "./components"

function App() {

  return (
    <div className="h-full w-full font-Poppins bg-background">
      <div className="max-w-[86rem] mx-auto px-8">
        <Navigation />
        <main>
          <Hero />
          <UrlShortener />
          <CardsInfo />
        </main>
      </div>
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
