import { Navigation, Hero, UrlShortener, CardsInfo, CallToAction, Footer } from "./components";
import UrlContextProvider from "./context/UrlContextProvider";

function App() {

  return (
    <UrlContextProvider>
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
    </UrlContextProvider>
  )
}

export default App
