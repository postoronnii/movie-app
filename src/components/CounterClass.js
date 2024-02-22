import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.value,
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  decrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }))
  }

  render() {
    return React.createElement(
      'div',
      { className: 'flex ' },
      React.createElement(
        'div',
        { className: 'flex flex-col text-3xl items-center' },
        React.createElement(
          'p',
          { className: 'text-7xl font-bold pb-10' },
          this.state.count,
        ),
        React.createElement(
          'div',
          { className: 'flex flex-row gap-3' },
          React.createElement(
            'button',
            {
              onClick: this.increment,
              className:
                'w-14 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded',
            },
            '+',
          ),
          React.createElement(
            'button',
            {
              onClick: this.decrement,
              className:
                'w-14 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded',
            },
            '-',
          ),
        ),
      ),
    )
  }
}

export default Counter
