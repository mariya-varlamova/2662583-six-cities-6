import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import FavoritesList from '../../favorites-list/favorites-list';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import Header from '../../header/header';

function FavoritesPage(): JSX.Element {
  const allOffers = useSelector((state: RootState) => state.offers);
  const favoriteOffers = allOffers.filter((offer) => offer.isFavorite);

  const favoritesByCity = favoriteOffers.reduce<Record<string, typeof favoriteOffers>>((acc, offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {});

  const hasFavorites = favoriteOffers.length > 0;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {hasFavorites ? (
              <FavoritesList favoritesByCity={favoritesByCity} />
            ) : (
              <FavoritesEmpty />
            )}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
