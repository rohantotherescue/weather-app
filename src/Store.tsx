import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './weatherApi';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch