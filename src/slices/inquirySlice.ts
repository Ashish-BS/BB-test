import { createSlice } from "@reduxjs/toolkit";
import config from "@/constants";

type InquiryState = {
  inquiryType: string | null;
};

const initialState:InquiryState = {
  inquiryType: config.LOCAL_STORAGE_VARIABLES.INQUIRY.INFORMATION
}

export const inquirySlice = createSlice({
  name: "inquiry",
  initialState,
  reducers: {
    setInquiryType: (state, action) => {
      state.inquiryType = action.payload;
    },
  },
});

export const { setInquiryType } = inquirySlice.actions;

export default inquirySlice.reducer;