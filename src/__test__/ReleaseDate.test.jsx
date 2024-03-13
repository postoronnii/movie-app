import { render, fireEvent } from '@testing-library/react'
import ReleaseDate from '../components/elements/ReleaseDate'

describe('ReleaseDate', () => {
  const triangle = 'triangle.svg'
  it('Renders without crashing', () => {
    render(<ReleaseDate triangle={triangle} />)
  })

  it('Opens and closes the dropdown', () => {
    const { getByText, queryByText } = render(
      <ReleaseDate triangle={triangle} />,
    )

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
