import { fireEvent, render } from '@testing-library/react'
import Counter from '../components/CounterFun'

describe('Counter', () => {
  test('Component renders initial value provided in props', () => {
    const passedValue = 3
    const { getByText } = render(<Counter value={passedValue} />)
    const countElement = getByText(passedValue.toString())
    expect(countElement).toBeInTheDocument()
  })

  test('A click event on "decrement" button decrements the displayed value', () => {
    const { getByText } = render(<Counter value={5} />)
    const decrementButton = getByText('-')
    fireEvent.click(decrementButton)
    const displayedValue = getByText('4')
    expect(displayedValue).toBeInTheDocument()
  })

  test('A click event on "increment" button increments the displayed value', () => {
    const { getByText } = render(<Counter value={5} />)
    const incrementButton = getByText('+')
    fireEvent.click(incrementButton)
    const displayedValue = getByText('6')
    expect(displayedValue).toBeInTheDocument()
  })
})
