import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Offer, ExtendedOffer } from '../../mocks/offers';

type AppProps = {
  offersCount: number;
  offers: Offer[];
  extendedOffers: ExtendedOffer[];
}

function App({ offersCount, offers, extendedOffers }: AppProps): JSX.Element{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage offersCount={offersCount} offers={offers}/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorites"
          element={
            <PrivateRoute>
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<OfferPage offers={extendedOffers} allOffers={offers}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
