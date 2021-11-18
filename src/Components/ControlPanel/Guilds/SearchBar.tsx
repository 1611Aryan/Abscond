import React, { useState } from "react"
import styled from "styled-components"
import { ImSearch } from "react-icons/im"
import { guild } from "."
import axios from "axios"
import { GuildByName } from "../../../Endpoints"

const SearchBar: React.FC<{
  setGuilds: React.Dispatch<React.SetStateAction<guild[]>>
}> = ({ setGuilds }) => {
  const [input, setInput] = useState("")

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)

  const getTeams = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios[GuildByName.method]<{ guilds: guild[] }>(
        GuildByName.url,
        { name: input },
        { withCredentials: true }
      )

      setGuilds(res.data.guilds)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <StyledSearchBar onSubmit={getTeams}>
      <input
        type="text"
        placeholder="Enter guild Name"
        value={input}
        onChange={changeHandler}
        autoFocus
      />
      <button>
        <ImSearch />
      </button>
    </StyledSearchBar>
  )
}

const StyledSearchBar = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    padding: 1rem;
    border-radius: 10px 0 0 10px;
    font-size: 1rem;
    background: #fff;
    line-height: 1;
  }
  button {
    background: #1d1d1d;
    color: #fff;
    font-size: 1rem;
    padding: 1rem;
    line-height: 1;
    border-radius: 0 10px 10px 0;
  }
`

export default SearchBar
