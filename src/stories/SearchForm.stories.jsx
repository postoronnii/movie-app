import React from 'react'
import { action } from '@storybook/addon-actions'
import SearchForm from '../components/elements/SearchForm'

export default {
  title: 'SearchForm',
  component: SearchForm,
}

const Template = (args) => <SearchForm {...args} />

export const Default = Template.bind({})
Default.args = {
  onChange: action('onChange'),
  onSearch: action('onSearch'),
  value: '',
}
