import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import OffersList from '../../offers-list/offers-list';
import Map from '../../map/map';
import CitiesList from '../../cities-list/cities-list';
import SortingOptions from '../../sorting-options/sorting-options';
import Header from '../../header/header';
import { RootState } from '../../../store';
import { changeSortType } from '../../../store/action';
import { useAppDispatch } from '../../../store/hooks';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useSelector((state: RootState) => state.city);
  const allOffers = useSelector((state: RootState) => state.offers);
  const sortType = useSelector((state: RootState) => state.sortType);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const filteredOffers = useMemo(() =>
    allOffers.filter((offer) => offer.city.name === currentCity), [allOffers, currentCity]
  );

  const sortedOffers = useMemo(() => {
    const offersCopy = [...filteredOffers];

    switch (sortType) {
      case 'Price: low to high':
        return offersCopy.sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return offersCopy.sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return offersCopy.sort((a, b) => b.rating - a.rating);
      default:
        return offersCopy;
    }
  }, [filteredOffers, sortType]);

  const filteredOffersCount = filteredOffers.length;

  const handleActiveOfferChange = (offerId: string | null) => {
    setActiveOfferId(offerId);
  };

  const handleSortChange = (sortTypeValue: string) => {
    dispatch(changeSortType(sortTypeValue));
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredOffersCount} {filteredOffersCount === 1 ? 'place' : 'places'} to stay in {currentCity}
              </b>
              <SortingOptions onSortChange={handleSortChange} />
              <OffersList
                offers={sortedOffers}
                onActiveOfferChange={handleActiveOfferChange}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={sortedOffers}
                  activeOfferId={activeOfferId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
