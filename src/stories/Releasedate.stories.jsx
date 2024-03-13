import React from 'react'
import triangle from '../images/triangle.svg'
import ReleaseDate from '../components/elements/ReleaseDate'

export default {
  title: 'ReleaseDate',
  component: ReleaseDate,
  argTypes: {
    triangle: { control: 'text' },
  },
}

const Template = (args) => <ReleaseDate {...args} />

export const Default = Template.bind({})
Default.args = {
  triangle,
}
