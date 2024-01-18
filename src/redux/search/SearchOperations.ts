import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = 'c295ff054bdf4d32917160939240601';

axios.defaults.baseURL = BASE_URL;

export const search = createAsyncThunk<
  FilteredResponse,
  string,
  {
    rejectValue: string;
  }
>('search', async (city, {rejectWithValue}) => {
  try {
    const res = await axios.get(
      `/forecast.json?q=${city}&days=14&lang=en&key=${API_KEY}`,
    );
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
