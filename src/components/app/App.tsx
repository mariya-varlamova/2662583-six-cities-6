import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';
import { store } from '../../store';
import { fetchOffers, checkAuth } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

function AppContent(): JSX.Element {
  const dispatch = useAppDispatch();
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const error = useAppSelector((state) => state.error);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchOffers());
  }, [dispatch]);

  if (authorizationStatus === 'UNKNOWN') {
    return <Spinner />;
  }

  if (isOffersLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="page page--gray">
        <div className="container" style={{ textAlign: 'center', padding: '50px' }}>
          <h1>Something went wrong</h1>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try again</button>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
