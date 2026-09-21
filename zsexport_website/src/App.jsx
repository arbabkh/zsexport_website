import About from './components/About'
import Categories from './components/Categories'
import Customization from './components/Customization'
import Footer from './components/Footer'
import GlobalExport from './components/GlobalExport'
import Header from './components/Header'
import Hero from './components/Hero'
import Manufacturing from './components/Manufacturing'
import Pillars from './components/Pillars'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import TradeInquiry from './components/TradeInquiry'

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          <Hero />
          <Categories />
          <About />
          <Manufacturing />
          <Customization />
          <GlobalExport />
          <Pillars />
          <TradeInquiry />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
