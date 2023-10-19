import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ForecastReducer from "./Slices/ForcastSlice";

const store = configureStore({
  reducer: {
    forecast: ForecastReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;

export default store;
