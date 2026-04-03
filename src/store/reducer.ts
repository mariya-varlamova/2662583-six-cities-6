import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, changeSortType, setOffersLoadingStatus, setError } from './action';
import { Offer } from '../types/offer';

type InitialState = {
  city: string;
  offers: Offer[];
  sortType: string;
  isOffersLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  sortType: 'Popular',
  isOffersLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export default reducer;
