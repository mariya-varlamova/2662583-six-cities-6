import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { UserData } from '../types/auth';

export const changeCity = createAction<string>('city/change');
export const changeSortType = createAction<string>('sort/change');
export const loadOffers = createAction<Offer[]>('offers/load');
export const setOffersLoadingStatus = createAction<boolean>('offers/setLoadingStatus');
export const setError = createAction<string | null>('app/setError');
export const setAuthorizationStatus = createAction<string>('user/setAuthorizationStatus');
export const setUserInfo = createAction<UserData | null>('user/setUserInfo');
