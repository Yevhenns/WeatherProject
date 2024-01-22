import type {RootState} from '../store';

export const getWeather = (state: RootState) => state.search.weather;
export const getInputCity = (state: RootState) => state.search.inputCity;
export const getCity = (state: RootState) => state.search.city;
export const getDays = (state: RootState) => state.search.days;
export const getIsLightTheme = (state: RootState) => state.search.isLightTheme;
export const getIsLoading = (state: RootState) => state.search.isLoading;
export const getError = (state: RootState) => state.search.error;
