import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Stats      from './components/Stats'
import Menu       from './components/Menu'
import Specials   from './components/Specials'
import About      from './components/About'
import Gallery    from './components/Gallery'
import Hours      from './components/Hours'
import CtaBanner  from './components/CtaBanner'
import Footer     from './components/Footer'
import BackToTop  from './components/BackToTop'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Menu />
        <Specials />
        <About />
        <Gallery />
        <Hours />
        <CtaBanner />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
