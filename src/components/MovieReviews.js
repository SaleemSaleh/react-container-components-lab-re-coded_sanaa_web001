// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => {
return  <div className="review-list">{reviews.map(Review)}</div>;
}

const Review = ({headline,byline,link,summary_short}) => {
  
  return (
    <div
      className="review"
    >
        <ahref={link.url}>{headline}</a>
        <p >{byline}</p>
      <p>{summary_short}</p>
    </div>
  );
};


export default MovieReviews;
