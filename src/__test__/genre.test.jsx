import { fireEvent, render } from '@testing-library/react'
import Genre from '../components/Genre'

describe('Genre component', () => {
  test('Component renders all genres passed in props', () => {
    const genres = ['Action', 'Adventure', 'Comedy']
    const selectedGenre = 'Adventure'
    const onSelect = jest.fn()

    const { getByText } = render(
      <Genre
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={onSelect}
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
    const mockOnSelect = jest.fn()

    const { getByText } = render(
      <Genre
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={mockOnSelect}
      />,
    )

    const selectedGenreElement = getByText(selectedGenre.toUpperCase())
    fireEvent.click(selectedGenreElement)
    expect(selectedGenreElement).toHaveClass('text-black')
  })

  test('After a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
    const genres = ['Action', 'Drama', 'Comedy']
    const selectedGenre = 'Drama'
    const mockOnSelect = jest.fn()

    const { getByText } = render(
      <Genre
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={mockOnSelect}
      />,
    )
    const selectedGenreElement = getByText(selectedGenre.toUpperCase())
    fireEvent.click(selectedGenreElement)
    expect(mockOnSelect).toHaveBeenCalledWith(selectedGenre)
  })
})
