import Counter from './components/Counter'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Movies from './components/Movies'

const movies = ['all', 'documentary', 'comedy', 'horror', 'crime']

export default function App() {
  return (
    <>
      <div className="flex flex-col bg-[#888888]">
        <header>
          <Header />
        </header>
        <main className="bg-[#232323]">
          <div className="bg-[#888888] h-[10px]"></div>
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

// <div>
//   <div className="flex justify-center items-center ">
//     <Counter value={0} />
//   </div>
//   <div className="flex justify-center items-center pt-10">
//     <SearchForm onChange={onChange} onSearch={onSearch} value={value} />
//   </div>
//   <div className="flex justify-center items-center pt-10">
//     <Genre
//       genres={movies}
//       selectedGenre={selectedGenre}
//       onSelect={setSelectedGenre}
//     />
//   </div>
// </div>
