import React from 'react'
import { action } from '@storybook/addon-actions'
import Genres from '../components/elements/Genres'

export default {
  title: 'Genres',
  component: Genres,
}

const Template = (args) => <Genres {...args} />

export const Default = Template.bind({})
Default.args = {
  genres: ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror'],
  selectedGenre: 'Action',
  setSelectedGenre: action('setSelectedGenre'),
}
