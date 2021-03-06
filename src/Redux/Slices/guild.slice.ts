import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "../store"

export type guild = {
  guildName: string
  guildCode: string
  moles: number
  hints: boolean[]
  superpowers: { name: string; info: string }[]
  questionNo: number
  leader: { name: string }
  members: { name: string }[]
  completed: boolean
}

const initialState = {
  guild: {
    guildName: "",
    guildCode: "",
    moles: 0,
    hints: [],
    superpowers: [],
    questionNo: 1,
    leader: {
      name: "",
    },
    members: [],
    completed: false,
  } as guild,
}

export const guildSlice = createSlice({
  name: "guild",
  initialState: initialState,
  reducers: {
    addGuild: (state, action: PayloadAction<guild>) => {
      state.guild = { ...action.payload }
    },
    changeMoles: (state, action: PayloadAction<number>) => {
      state.guild.moles += action.payload
    },
    useHint: (state, action: PayloadAction<number>) => {
      state.guild.hints[action.payload] = false
    },
    addSuperpower: (
      state,
      action: PayloadAction<{ name: string; info: string }>
    ) => {
      state.guild.superpowers.push(action.payload)
    },
    removeSuperpower: (
      state,
      action: PayloadAction<{ name: string; info: string }>
    ) => {
      state.guild.superpowers = state.guild.superpowers.filter(
        power => power.name !== action.payload.name
      )
    },
    nextQuestion: state => {
      state.guild.questionNo += 1
    },
    complete: state => {
      state.guild.completed = true
    },

    resetGuild: state => {
      state.guild = initialState.guild
    },
  },
})

export const {
  addGuild,
  resetGuild,
  changeMoles,
  useHint,
  addSuperpower,
  removeSuperpower,
  nextQuestion,
  complete,
} = guildSlice.actions

export const selectGuild = (state: RootState) => state.guild

const guildReducer = guildSlice.reducer

export default guildReducer
