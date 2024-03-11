import { fireEvent, render } from '@testing-library/react'
import SearchForm from '../components/SearchForm'

describe('SearchForm component', () => {
  test('Component renders an input with the value equal to initial value passed in props', () => {
    const initialValue = 'initial value'
    const { getByPlaceholderText } = render(<SearchForm value={initialValue} />)
    const inputElement = getByPlaceholderText('What do you want to watch?')
    expect(inputElement.value).toBe(initialValue)
  })

  test('After typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
    const handleChange = jest.fn((event) => event.target.value)
    const handleSearch = jest.fn()
    const { getByPlaceholderText, getByText } = render(
      <SearchForm onChange={handleChange} onSearch={handleSearch} value="" />,
    )

    const input = getByPlaceholderText('What do you want to watch?')
    fireEvent.change(input, { target: { value: 'test value' } })

    const button = getByText('SEARCH')
    fireEvent.click(button)

    expect(handleChange.mock.results[0].value).toBe('test value')
  })

  test('After typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
    const handleChange = jest.fn((event) => event.target.value)
    const handleSearch = jest.fn()
    const { getByPlaceholderText } = render(
      <SearchForm onChange={handleChange} onSearch={handleSearch} value="" />,
    )

    const input = getByPlaceholderText('What do you want to watch?')
    fireEvent.change(input, { target: { value: 'test value' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(handleChange.mock.results[0].value).toBe('test value')
  })
})
