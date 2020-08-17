import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    search: '',
    revs: []
  };

  handleSearch = event =>
    this.setState({ search: event.target.value });

  Submit = event => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.search))
      .then(res => res.json())
      .then(josn => this.setState({ revs: josn.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.Submit}>
          <input id="search" type="text" onChange={this.handleSearch}/>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews revs={this.state.revs} />
      </div>
    );
  }
}
