import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCity = createAction<string>('city/change');
export const changeSortType = createAction<string>('sort/change');
export const loadOffers = createAction<Offer[]>('offers/load');
export const setOffersLoadingStatus = createAction<boolean>('offers/setLoadingStatus');
export const setError = createAction<string | null>('app/setError');
