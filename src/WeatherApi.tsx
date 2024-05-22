import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'YOUR_API_KEY'; // replace with your actual API key

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) => `weather?q=${city}&appid=${API_KEY}`,
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi;