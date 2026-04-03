import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from './index';
import { loadOffers, setOffersLoadingStatus, setError } from './action';
import { Offer } from '../types/offer';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoadingStatus(true));
    try {
      const { data } = await api.get<Offer[]>('/offers');
      dispatch(loadOffers(data));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError('Failed to load offers. Please try again later.'));
    } finally {
      dispatch(setOffersLoadingStatus(false));
    }
  },
);
