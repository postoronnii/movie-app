import { render } from '@testing-library/react'
import SearchForm from '../components/SearchForm'

describe('SearchForm component', () => {
  test('Component renders an input with the value equal to initial value passed in props', () => {
    const initialValue = 'Initial Value'
    const inputRef = { current: { value: '' } } // Mock inputRef
    const { getByPlaceholderText } = render(
      <SearchForm
        onSearch={() => {}}
        inputRef={inputRef}
        initialValue={initialValue}
      />,
    )

    const inputElement = getByPlaceholderText('What do you want to watch?')
    expect(inputElement.value).toBe(initialValue)
  })
})
