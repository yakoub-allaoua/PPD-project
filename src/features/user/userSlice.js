import { signUpUser, loginUser, UpdatePassword } from "./userAPI";
import { createSlice } from "@reduxjs/toolkit";

const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    return jwt_decode(token);
  } catch (error) {
    return null;
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: getUserFromToken(),
    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.error = null;
      localStorage.removeItem("token");
    },
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        localStorage.setItem("token", action.payload.token); // Optional: store token if needed
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //sign up
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //reset password
      .addCase(UpdatePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(UpdatePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        localStorage.setItem("token", action.payload.token);
        state.message = "password reset successful";
      })
      .addCase(UpdatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { logout, clearError, clearMessage } = userSlice.actions;
export default userSlice.reducer;
