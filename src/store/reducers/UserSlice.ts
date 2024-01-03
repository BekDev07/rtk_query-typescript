import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export const { increment } = userSlice.actions;
export default userSlice.reducer;
