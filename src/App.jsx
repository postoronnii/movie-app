import Counter from './components/Counter'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Movies from './components/Movies'

const movies = ['all', 'documentary', 'comedy', 'horror', 'crime']

export default function App() {
  return (
    <>
      <div className="flex flex-col bg-main-gray">
        <Header />
        <main className="bg-main-dark">
          <div className="bg-main-gray h-2"></div>
          <Menu genres={movies} />
          <Movies />
        </main>
        <Footer />
      </div>
      <div className="flex justify-center items-center pb-5">
        <Counter value={0} />
      </div>
    </>
  )
}
