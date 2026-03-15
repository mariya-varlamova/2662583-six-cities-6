import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import { Offer } from '../../mocks/offers';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleMouseEnter = (offerId: string) => {
    setActiveOfferId(offerId);
  };
  void activeOfferId;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
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
