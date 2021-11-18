import React, { useState } from "react"
import styled from "styled-components"
import Guild from "./Guild"
import SearchBar from "./SearchBar"

export type member = {
  name: string
  email: string
  phone: string
}

export type guild = {
  guildName: string
  guildCode: string
  moles: number
  hints: boolean[]
  superpowers: {
    name: string
    info: string
  }[]
  questions: { id: string }[]
  leader: member
  members: member[]
  questionNo: number
  logs: { logtype: string; message: string }[]
}

const Guilds = () => {
  const [guilds, setGuilds] = useState<guild[]>([])

  return (
    <StyledMain>
      <SearchBar setGuilds={setGuilds} />
      <section>
        {guilds.map((guild, index) => (
          <Guild guild={guild} key={index} />
        ))}
      </section>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  width: 100%;
  height: var(--contentHeight);
  padding: 1rem var(--padding);

  section {
    margin-top: 1.5rem;

    ul {
      list-style-type: circle;
      list-style-position: inside;
    }
  }

  h3 {
    width: 100%;
    height: auto;
    font-size: clamp(0.9rem, 2vw, 1.25rem);
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        margin-left: 0.5rem;
        cursor: pointer;
      }
    }
    .line {
      margin-left: 0.5rem;
      width: 100%;
      height: 1px;
      background: #727272;
    }
  }
  h4 {
    font-size: clamp(0.9rem, 2vw, 1.25rem);
    font-weight: 500;
    display: inline;
  }

  h5 {
    font-size: clamp(0.8rem, 2vw, 1.15rem);
    font-weight: 500;
    display: inline;
  }
`

export default Guilds
