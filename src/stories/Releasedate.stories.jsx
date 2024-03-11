import React from 'react'
import triangle from '../images/triangle.svg'
import ReleaseDate from '../components/elements/ReleaseDate'

export default {
  title: 'ReleaseDate',
  component: ReleaseDate,
}

const Template = (args) => <ReleaseDate />

export const Default = Template.bind({})
Default.args = {
  pic: triangle, // replace with your image url
}
