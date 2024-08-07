import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL, API_KEY} from '@env';

export const checkWeather = createAsyncThunk<
  FilteredResponse,
  string,
  {
    rejectValue: string;
  }
>('checkWeather', async (city, {rejectWithValue}) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/forecast.json?q=${city}&days=14&lang=en&key=${API_KEY}`,
    );
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
