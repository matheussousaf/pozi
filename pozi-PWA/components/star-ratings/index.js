import React from 'react';
import { Container } from './styles';

const Ratings = ({ reviews, rate = 3, starSize = '35px', starColor = 'rgba(255, 214, 0, 0.85);', starColorDisabled = '#DEDFE0', starColorHover = '#f9de8d', onlyReading, onStarClick }) => {
  const rateStars = onlyReading => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <>
          <input type="radio" id={`star-${6 - i}`} name="ratings" value={6 - i} disabled={onlyReading} />
          <label role="presentation" onClick={() => onlyReading ? {} : onStarClick(6 - i)} for={`star-${6 - i}`}>★</label>
        </>
      );
    }
    return stars;
  };
  return (
    <Container
      starColor={starColor}
      starColorDisabled={starColorDisabled}
      onlyReading={onlyReading}
      starColorHover={starColorHover}
      starSize={starSize}
    >
      <div className="stars-wrapper">
        <div class="star-ratings-css">
          {
            onlyReading &&
            <div class="star-ratings-css-top" style={{ width: rate * 20 + '%' }}>
              <label>★</label><label>★</label><label>★</label><label>★</label><label>★</label>
            </div>
          }
          <div class="rating star-ratings-css-bottom">
            {rateStars(onlyReading)}
          </div>
        </div>
      </div>

      {!!reviews && reviews > 0 && (
        <span className="stars-wrapper__rating-count">({reviews})</span>
      )}
    </Container>
  );
};

export default Ratings;