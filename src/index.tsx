import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { offers, extendedOffers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={offers.length}
      offers={offers}
      extendedOffers={extendedOffers}
    />
  </React.StrictMode>
);
