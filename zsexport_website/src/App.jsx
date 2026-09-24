import About from './components/About'
import Customization from './components/Customization'
import Footer from './components/Footer'
import GlobalExport from './components/GlobalExport'
import Header from './components/Header'
import Hero from './components/Hero'
import Manufacturing from './components/Manufacturing'
import Pillars from './components/Pillars'
import ProductGallery from './components/ProductGallery'
import ProductsPage from './components/ProductsPage'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import TradeInquiry from './components/TradeInquiry'
import { useEffect, useState } from 'react'

const parseRoute = () => {
  const match = window.location.hash.match(/^#\/products(?:\/([\w-]+))?(?:\/([\w-]+))?/)
  return match ? { page: 'products', slug: match[1], sub: match[2] } : { page: 'home' }
}

function App() {
  const [route, setRoute] = useState(parseRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // The browser can't scroll to an anchor that isn't rendered yet, so do it after the page swaps.
  useEffect(() => {
    if (route.page === 'products') {
      window.scrollTo(0, 0)
      return
    }
    const target = window.location.hash.length > 1 ? document.querySelector(window.location.hash) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [route.page])

  return (
    <>
      <ScrollProgress />
      <Header route={route.page} />
      <main className="w-full pt-20 bg-background">
        {route.page === 'products' ? (
          <ProductsPage slug={route.slug} sub={route.sub} />
        ) : (
          <div className="flex flex-col w-full">
            <Hero />
            <ProductGallery />
            <About />
            <Manufacturing />
            <Customization />
            <GlobalExport />
            <Pillars />
            <TradeInquiry />
          </div>
        )}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
