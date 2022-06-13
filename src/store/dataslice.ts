import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface dataState {
  loading: boolean;
  data: any;
}

const initialState: dataState = {
  loading: false,
  data: [],
};

export const fetchUsers = createAsyncThunk("data/fetchUsers", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let ans = await response.json();
  return ans;
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
    toggleLoading: (state, action) => {
      state.loading = !state.loading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        return { ...state, data: payload, loading: false };
      });
  },
});

export const { addData, toggleLoading } = dataSlice.actions;
export default dataSlice.reducer;
