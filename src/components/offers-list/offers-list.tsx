import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import { Offer } from '../../mocks/offers';

type OffersListProps = {
  offers: Offer[];
  onActiveOfferChange?: (offerId: string | null) => void;
}

function OffersList({ offers, onActiveOfferChange }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleMouseEnter = (offerId: string) => {
    setActiveOfferId(offerId);
    if (onActiveOfferChange) {
      onActiveOfferChange(offerId);
    }
  };
  const handleMouseLeave = () => {
    setActiveOfferId(null);
    if (onActiveOfferChange) {
      onActiveOfferChange(null);
    }
  };
  void activeOfferId;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={handleMouseLeave}
        >
          <PlaceCard
            offer={offer}
          />
        </div>
      ))}
    </div>
  );
}

export default OffersList;
