import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./actionCreators";
interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        state.isLoading = false;
        state.users = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "error has been occured";
    });
  },
});

export default userSlice.reducer;
