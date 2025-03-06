import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/authFeatures/loginSlice"
// import locationReducer from "@/features/otherFeatures/locationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // locations: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
