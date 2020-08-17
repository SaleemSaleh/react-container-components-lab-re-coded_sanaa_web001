import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      revs: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(response => this.setState({ revs: response.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews revs={this.state.revs} />
      </div>
    );
  }
}
