import Review from '../review/review';
import type { Review as ReviewType } from '../../mocks/reviews';

type ReviewsListProps = {
  reviews: ReviewType[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default ReviewsList;
