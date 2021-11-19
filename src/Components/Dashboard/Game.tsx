import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { BsCoin } from "react-icons/bs"
import { GiLightningSaber } from "react-icons/gi"
import { useDispatch, useSelector } from "react-redux"
import {
  changeMoles,
  complete,
  nextQuestion,
  selectGuild,
} from "../../Redux/Slices/guild.slice"

import { AppDispatch } from "../../Redux/store"
import { useSocket } from "../../Context/socket.provider"
import axios from "axios"
import { getQuestion, verifyAnswer } from "../../Endpoints"
import SpinnerLoader from "../Loaders/spinner"

type question = {
  question?: string
  image?: string
  drive?: string
  type: "text" | "image" | "text-drive" | "download" | "search"
}

const Game = () => {
  const { guild } = useSelector(selectGuild)
  const [input, setInput] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { socket } = useSocket()
  const dispatch = useDispatch<AppDispatch>()

  const [question, setQuestion] = useState<question>()

  useEffect(() => {
    socket?.on("changeMoles", (amount: number) => dispatch(changeMoles(amount)))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const reqQuestion = async () => {
    try {
      const res = await axios[getQuestion.method]<{ question: question }>(
        getQuestion.url,
        {
          withCredentials: true,
        }
      )

      console.log(res.data.question.type)

      setQuestion(res.data.question)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    reqQuestion()
  }, [])

  const change = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setInput(e.target.value)

  const submitHandler = async () => {
    setError("")
    setSuccess("")
    try {
      setLoading(true)
      const res = await axios[verifyAnswer.method]<{
        message: string
        completed?: boolean
      }>(verifyAnswer.url, { answer: input }, { withCredentials: true })
      if (res.data.completed) return dispatch(complete())

      reqQuestion()
      setLoading(false)
      setSuccess("Correct Answer")
      setTimeout(() => {
        setSuccess("")
      }, 2500)
      dispatch(nextQuestion())
    } catch (error: any) {
      console.log(error)
      setLoading(false)
      if (error.response.data.message) {
        return setError(error.response.data.message)
      } else console.log("Error", error.message)
      return setError("We encountered an Error please try again later")
    } finally {
      setLoading(false)
      setInput("")
    }
  }

  return (
    <StyledGame>
      {loading && <SpinnerLoader />}
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
        <h4>Question No. {guild.questionNo}</h4>
        <h4>
          <a
            href="https://drive.google.com/file/d/1rCx2zu5C8QD1v6WCvS1zY2tG0kkSpLLy/view"
            target="_blank"
            rel="noReferrer"
          >
            View Rulebook
          </a>
        </h4>
      </div>

      <main>
        <div className="question">
          <div className="text">
            {question?.type === "text" && <span>{question.question}</span>}
          </div>

          {question?.type === "text-drive" && (
            <div className="text-drive">
              <span>{question.question}</span>
              <br />
              <span>
                <a href={question.drive} target="_blank" rel="noreferrer">
                  {question.drive}
                </a>
              </span>
            </div>
          )}

          {question?.type === "image" && (
            <div className="image">
              <img src={question.image} alt="" />{" "}
            </div>
          )}

          {question?.type === "download" && (
            <div className="download">
              <span>Download This Image</span>
              <br />
              <a href={question.image} target="_blank" rel="noreferrer">
                <img src={question.image} alt="" />
              </a>
            </div>
          )}

          {question?.type === "search" && (
            <div className="search">
              <img src={question.image} alt={question.drive} />
            </div>
          )}
        </div>
        <span className="error">{error}</span>
        <span className="success">{success}</span>
        <textarea value={input} onChange={change}></textarea>
        <button onClick={submitHandler}>Submit Answer</button>
      </main>
    </StyledGame>
  )
}

const StyledGame = styled.section`
  width: 100%;
  height: 130vh;

  padding: var(--padding);

  display: flex;
  justify-content: space-evenly;
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
    justify-content: space-between;
    h4 + h4 {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  main {
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    overflow: hidden;

    .error {
      font-size: 1rem;
      color: red;
    }

    .success {
      font-size: 1rem;
      color: green;
    }

    .question {
      width: 80%;

      font-size: clamp(0.9rem, 2vw, 1.5rem);
      text-align: center;

      .text-drive {
        width: 100%;
        span {
          width: 100%;
        }
        a {
          width: 100%;
          overflow-wrap: break-word;
          text-decoration: underline;
          font-style: italic;
        }
      }

      .image,
      .search {
        height: calc(130vh * 7 / 10 * 35 / 100);
        img {
          height: 100%;
          object-fit: cover;
        }
      }
    }

    textarea {
      width: 60%;
      height: 50%;
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

  @media only screen and (max-width: 450px) {
    justify-content: space-evenly;
    main {
      .question {
        width: 100%;
        text-align: left;
      }
      textarea {
        width: 100%;
      }
    }
  }
`

export default Game
