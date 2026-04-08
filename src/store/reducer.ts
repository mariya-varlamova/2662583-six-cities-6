import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffers,
  changeSortType,
  setOffersLoadingStatus,
  setError,
  setAuthorizationStatus,
  setUserInfo
} from './action';
import { Offer } from '../types/offer';
import { UserData } from '../types/auth';

export type InitialState = {
  city: string;
  offers: Offer[];
  sortType: string;
  isOffersLoading: boolean;
  error: string | null;
  authorizationStatus: string;
  userInfo: UserData | null;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  sortType: 'Popular',
  isOffersLoading: false,
  error: null,
  authorizationStatus: 'UNKNOWN',
  userInfo: null,
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
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});

export default reducer;
