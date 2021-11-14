import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

const PREFIXED_KEY = "ABSCOND-LOGGEDIN"

const toBool = (str: string | null) => (str === "true" ? true : false)

export const authenticationSlice = createSlice({
  name: "authenticate",
  initialState: {
    loggedIn: toBool(localStorage.getItem(PREFIXED_KEY)) || false,
    admin: false,
  },
  reducers: {
    login: state => {
      state.loggedIn = true
      localStorage.setItem(PREFIXED_KEY, JSON.stringify(true))
    },
    loginAdmin: state => {
      state.loggedIn = false
      state.admin = true
      localStorage.setItem(PREFIXED_KEY, JSON.stringify(false))
    },
    logoutAdmin: state => {
      state.loggedIn = false
      state.admin = false
      localStorage.setItem(PREFIXED_KEY, JSON.stringify(false))
    },
    logout: state => {
      state.loggedIn = false
      localStorage.setItem(PREFIXED_KEY, JSON.stringify(false))
    },
  },
})

export const { login, logout, loginAdmin, logoutAdmin } =
  authenticationSlice.actions

export const selectAuthentication = (state: RootState) => state.authentication

const authenticationReducer = authenticationSlice.reducer

export default authenticationReducer
