import { configureStore } from "@reduxjs/toolkit"
import authenticationReducer from "./Slices/authentication.slice"
import guildReducer from "./Slices/guild.slice"

const store = configureStore({
  reducer: {
    guild: guildReducer,
    authentication: authenticationReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
