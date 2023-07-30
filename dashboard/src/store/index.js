import { configureStore } from "@reduxjs/toolkit";
import rootReducert from "./rootReducers";

const store = configureStore({
  reducer: rootReducert,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: true,
});
export default store;
