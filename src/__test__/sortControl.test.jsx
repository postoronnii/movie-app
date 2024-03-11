// SortControl.test.js
import { render, fireEvent } from '@testing-library/react'
import SortControl from '../components/elements/SortControl'

describe('SortControl Component', () => {
  it('Toggles the dropdown when button is clicked', () => {
    const { getByText } = render(<SortControl pic="your-image-url" />)
    const button = getByText('RELEASE DATE')

    fireEvent.click(button)

    const dropdown = getByText('Title')
    expect(dropdown).toBeInTheDocument()
  })

  it('Renders dropdown items correctly', () => {
    const { getByText } = render(<SortControl pic="your-image-url" />)
    const button = getByText('RELEASE DATE')

    fireEvent.click(button)
    const releaseDateItem = getByText('Release Date')
    const titleItem = getByText('Title')

    expect(releaseDateItem).toBeInTheDocument()
    expect(titleItem).toBeInTheDocument()
  })
})
