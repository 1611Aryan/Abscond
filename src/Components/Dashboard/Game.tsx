import { useEffect, useState } from "react"
import styled from "styled-components"
import { BsCoin } from "react-icons/bs"
import { GiLightningSaber } from "react-icons/gi"
import { useDispatch, useSelector } from "react-redux"
import { changeMoles, selectGuild } from "../../Redux/Slices/guild.slice"

import { AppDispatch } from "../../Redux/store"
import { useSocket } from "../../Context/socket.provider"

const Game = () => {
  const { guild } = useSelector(selectGuild)

  const { socket } = useSocket()
  const dispatch = useDispatch<AppDispatch>()

  const [game] = useState({
    question:
      "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laudantium sapiente, dolor iure dolore harum?",
  })

  useEffect(() => {
    socket?.on("changeMoles", (amount: number) => dispatch(changeMoles(amount)))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledGame>
      <h1>Battle Time</h1>

      <div className="stats">
        <h3>
          <BsCoin />
          <span>Moles: {guild.moles}</span>
        </h3>
        <h3>
          <GiLightningSaber />
          <span>Superpowers: {guild.superpowers.length}</span>
        </h3>
      </div>
      <div className="rulebook">
        <h4>View Rulebook</h4>
      </div>

      <main>
        <div className="question">{game.question}</div>

        <textarea></textarea>
        <button>Submit Answer</button>
      </main>
    </StyledGame>
  )
}

const StyledGame = styled.section`
  width: 100%;
  height: 100vh;

  padding: var(--padding);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  color: #000d;

  h1 {
    display: inline;
    font-size: clamp(1.75rem, 4vw, 3rem);
    font-weight: 500;
    --color: #000;
    background-image: linear-gradient(var(--color), var(--color));
    background-repeat: no-repeat;
    background-size: 0% 5px;
    background-position: center bottom;

    transition: background-size ease 200ms;

    &:hover {
      background-size: 100% 5px;
    }
  }

  h3 {
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 400;
    display: flex;
    align-items: center;
    > * + * {
      margin-left: 0.5rem;
    }
  }

  h4 {
    font-size: clamp(0.9rem, 2vw, 1.35rem);
    font-weight: 400;
    display: flex;
    align-items: center;
    > * + * {
      margin-left: 0.5rem;
    }
  }

  .stats {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      transition: all 200ms;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .rulebook {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    h4 {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  main {
    width: 100%;
    height: 65%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .question {
      width: 80%;
      font-size: clamp(0.9rem, 2vw, 1.5rem);
      text-align: center;
    }

    textarea {
      width: 60%;
      height: 60%;
      resize: none;
      background: rgba(255, 255, 255, 0.4);
      padding: calc(0.25 * var(--padding));
      backdrop-filter: blur(5px);
      border-radius: 10px;
      font-size: clamp(0.9rem, 2vw, 1.25rem);
      border: none;
      &:focus {
        outline: none;
      }
    }

    button {
      background: rgba(255, 255, 255, 0.4);
      padding: 0.4rem;
      border-radius: 2px;
      display: grid;
      place-items: center;
      font-size: clamp(0.9rem, 2vw, 1.25rem);
    }
  }
`

export default Game
