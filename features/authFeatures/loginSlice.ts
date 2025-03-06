import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface LoginPayload {
  email: string;
}

interface SignupPayload extends LoginPayload {
  name: string;
  address: string;
}

interface AuthState {
  loggedInUser: SignupPayload | null;
  registeredUsers: SignupPayload[];
  loginError: string | null;
}

const initialState: AuthState = {
  loggedInUser: null,
  registeredUsers: [],
  loginError: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action: PayloadAction<SignupPayload>) => {
      const newUser = { id: nanoid(), ...action.payload };
      state.registeredUsers.push(newUser);
    },

    login: (state, action: PayloadAction<LoginPayload>) => {
      const { email } = action.payload;
      const user = state.registeredUsers.find((user) => user.email === email);

      if (user) {
        state.loggedInUser = user;
        state.loginError = null;
      } else {
        state.loggedInUser = null;
        state.loginError = "Invalid email or password";
      }
    },

    logout: (state) => {
      state.loggedInUser = null;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
