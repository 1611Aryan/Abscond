import axios from "axios"
import React, { useState } from "react"
import styled from "styled-components"
import { skipEndpoint } from "../../../Endpoints"

const Skip = () => {
  const [input, setInput] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const change = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)

  const skip = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios[skipEndpoint.method]<{ message: string }>(
        skipEndpoint.url,
        { name: input }
      )

      setError("")
      setSuccess(res.data.message)
    } catch (error: any) {
      setSuccess("")
      if (error.response.data.message) {
        return setError(error.response.data.message)
      } else console.log("Error", error.message)
      return setError("We encountered an Error please try again later")
    }
  }

  return (
    <StyledSkip>
      <form onSubmit={skip}>
        <span className="error"> {error}</span>
        <span className="success">{success}</span>
        <br />
        <br />
        <label htmlFor="guild">Enter Guild Name:</label>
        <br />
        <br />
        <input type="text" value={input} onChange={change} autoFocus required />
        <br />
        <br />
        <button>Skip Bonus Level</button>
      </form>
    </StyledSkip>
  )
}

const StyledSkip = styled.main`
  width: 100%;
  height: var(--contentHeight);
  padding: 1rem var(--padding);

  display: grid;
  place-items: center;

  form {
    width: 40%;
    padding: var(--padding);
    background: rgba(0, 128, 128, 0.5);
    border-radius: 5px;

    .error {
      color: red;
      white-space: pre-line;
    }
    .success {
      color: green;
      white-space: pre-line;
    }

    label {
      font-size: 1.25rem;
    }
    input {
      width: 100%;
      padding: 0.3rem;
      font-size: 1.25rem;

      &:focus {
        box-shadow: 0px 0px 0px 2px #1d1d1d;
      }
    }
    button {
      padding: 0.5rem;
      font-size: 1rem;

      background: #1d1d1d;
      color: lavender;

      &:hover {
        background: lavender;
        color: #1d1d1d;
      }
    }
  }
`

export default Skip
