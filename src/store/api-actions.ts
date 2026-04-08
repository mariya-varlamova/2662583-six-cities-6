import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from './index';
import {
  loadOffers,
  setOffersLoadingStatus,
  setError,
  setAuthorizationStatus,
  setUserInfo
} from './action';
import { Offer } from '../types/offer';
import { AuthData, UserData } from '../types/auth';

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

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>('/login');
      dispatch(setAuthorizationStatus('AUTH'));
      dispatch(setUserInfo(data));
      localStorage.setItem('six-cities-token', data.token);
    } catch (error) {
      dispatch(setAuthorizationStatus('NO_AUTH'));
      dispatch(setUserInfo(null));
      localStorage.removeItem('six-cities-token');
    }
  },
);

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>('/login', { email, password });
      dispatch(setAuthorizationStatus('AUTH'));
      dispatch(setUserInfo(data));
      localStorage.setItem('six-cities-token', data.token);
    } catch (error) {
      dispatch(setError('Invalid email or password'));
      throw error;
    }
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete('/logout');
      dispatch(setAuthorizationStatus('NO_AUTH'));
      dispatch(setUserInfo(null));
      localStorage.removeItem('six-cities-token');
    } catch (error) {
      dispatch(setError('Failed to logout'));
    }
  },
);
