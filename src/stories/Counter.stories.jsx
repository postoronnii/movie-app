import React from 'react'
import Counter from '../components/Counter'

export default {
  title: 'Components/Counter',
  component: Counter,
}

export const Basic = (args) => <Counter {...args} />
Basic.args = {
  value: 0,
}

export const WithInitialValue = (args) => <Counter {...args} />
WithInitialValue.args = {
  value: 10,
}
