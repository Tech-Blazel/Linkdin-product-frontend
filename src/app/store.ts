import { configureStore } from "@reduxjs/toolkit";
import auditReportSchema from "../features/auditReportSlice";
import categoryReducer from "../features/CategorySlice";

const store = configureStore({
  reducer: {
    auditReportSchema,
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
