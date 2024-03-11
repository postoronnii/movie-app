import { render, fireEvent } from '@testing-library/react'
import ReleaseDate from '../components/elements/ReleaseDate'

describe('ReleaseDate', () => {
  it('renders without crashing', () => {
    render(<ReleaseDate />)
  })

  it('Opens and closes the dropdown', () => {
    const { getByText, queryByText } = render(<ReleaseDate />)

    expect(queryByText('Release Date')).not.toBeInTheDocument()
    expect(queryByText('Title')).not.toBeInTheDocument()

    fireEvent.click(getByText('RELEASE DATE'))

    expect(getByText('Release Date')).toBeInTheDocument()
    expect(getByText('Title')).toBeInTheDocument()

    fireEvent.click(getByText('Release Date'))

    expect(queryByText('Release Date')).not.toBeInTheDocument()
    expect(queryByText('Title')).not.toBeInTheDocument()
  })
})
