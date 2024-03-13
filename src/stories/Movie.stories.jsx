import React from 'react'
import MovieTitle from '../components/elements/MovieTile'
import movie from '../images/movie.png'

export default {
  title: 'MovieTitle',
  component: MovieTitle,
}

const Template = (args) => <MovieTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  movie: {
    title: 'Pulp Fiction',
    poster_path: movie,
  },
  year: '1994',
  genres: 'Crime',
}
