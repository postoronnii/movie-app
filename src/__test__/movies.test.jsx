import React from 'react'
import { render, waitFor } from '@testing-library/react'
import axios from 'axios'
import Movies from '../components/Movies'

jest.mock('axios')

const mockMoviesData = {
  data: [
    {
      id: 1,
      title: 'Movie 1',
      release_date: '2022-01-01',
      genres: ['Action', 'Adventure'],
    },
    {
      id: 2,
      title: 'Movie 2',
      release_date: '2022-02-01',
      genres: ['Comedy', 'Drama'],
    },
  ],
  totalAmount: 2,
}

describe('Movies component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({ data: mockMoviesData })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Renders movies correctly', async () => {
    const { getByText } = render(<Movies />)

    await waitFor(() => {
      expect(getByText('2')).toBeInTheDocument()
      expect(getByText('Movie 1')).toBeInTheDocument()
      expect(getByText('Movie 2')).toBeInTheDocument()
      expect(getByText('Action, Adventure')).toBeInTheDocument()
      expect(getByText('Comedy, Drama')).toBeInTheDocument()
    })
  })
})
