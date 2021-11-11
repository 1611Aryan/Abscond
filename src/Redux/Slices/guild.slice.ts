import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "../store"

export type guild = {
  guildName: string
  guildCode: string
  leader: { name: string }
  members: { name: string }[]
}

export const guildSlice = createSlice({
  name: "guild",
  initialState: {
    guild: {
      guildName: "",
      guildCode: "",
      leader: {
        name: "",
      },
      members: [],
    } as guild,
  },
  reducers: {
    addGuild: (state, action: PayloadAction<guild>) => {
      state.guild = { ...action.payload }
    },
    resetGuild: state => {
      state.guild = {
        guildName: "",
        guildCode: "",
        leader: {
          name: "",
        },
        members: [],
      }
    },
  },
})

export const { addGuild, resetGuild } = guildSlice.actions

export const selectGuild = (state: RootState) => state.guild

const guildReducer = guildSlice.reducer

export default guildReducer
