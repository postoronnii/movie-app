import { fireEvent, render } from '@testing-library/react'
import Genres from '../components/elements/Genres'

describe('Genre component', () => {
  test('Component renders all genres passed in props', () => {
    const genres = ['Action', 'Adventure', 'Comedy']
    const selectedGenre = 'Adventure'
    const setSelectedGenre = jest.fn()

    const { getByText } = render(
      <Genres
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />,
    )
    genres.forEach((genre) => {
      const genreElement = getByText(genre.toUpperCase())
      expect(genreElement).toBeInTheDocument()
    })
  })

  test('Component highlights a selected genre passed in props', () => {
    const genres = ['Action', 'Drama', 'Comedy']
    const selectedGenre = 'Drama'
    const setSelectedGenre = jest.fn()

    const { getByText } = render(
      <Genres
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />,
    )

    const selectedGenreElement = getByText(selectedGenre.toUpperCase())
    fireEvent.click(selectedGenreElement)
    expect(selectedGenreElement).toHaveClass('text-[#F65261]')
  })

  test('After a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
    const genres = ['Action', 'Drama', 'Comedy']
    const selectedGenre = 'Drama'
    const setSelectedGenre = jest.fn()

    const { getByText } = render(
      <Genres
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />,
    )
    const selectedGenreElement = getByText(selectedGenre.toUpperCase())
    fireEvent.click(selectedGenreElement)
    expect(setSelectedGenre).toHaveBeenCalledWith(selectedGenre)
  })
})
