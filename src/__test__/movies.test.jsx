import { render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import Movies from '../components/Movies'

jest.mock('axios')

describe('Movies', () => {
  test('renders Movies component without crashing', () => {
    render(<Movies />)
  })

  test('displays the number of movies found', async () => {
    const data = {
      data: [
        {
          id: 1,
          release_date: '2024-01-01',
          genres: ['Action', 'Adventure'],
        },
        {
          id: 2,
          release_date: '2024-02-01',
          genres: ['Comedy'],
        },
      ],
      totalAmount: 2,
    }

    axios.get.mockResolvedValueOnce(data)

    render(<Movies />)

    await waitFor(() => {
      expect(screen.getByText('2')).toBeInTheDocument()
    })
  })
})
