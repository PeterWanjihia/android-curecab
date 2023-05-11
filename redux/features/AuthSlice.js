import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    signOut: (state) => {
      AsyncStorage.clear();
      state.user = null;
    },
    setUser: (state, action) => {
      AsyncStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
  },
});

export const { signOut, setUser } = AuthSlice.actions;
export default AuthSlice.reducer;
