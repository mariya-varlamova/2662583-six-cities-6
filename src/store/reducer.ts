import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers } from './action';
import { Offer } from '../mocks/offers';

type InitialState = {
  city: string;
  offers: Offer[];
}

const initialState: InitialState = {
  city: 'Paris',
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;
