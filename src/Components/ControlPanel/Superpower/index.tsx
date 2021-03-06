import axios from "axios"
import React, { useState } from "react"
import styled from "styled-components"
import { UseSuperpowers } from "../../../Endpoints"

const Superpower = () => {
  const [input, setInput] = useState({ name: "", power: "" })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const change = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const use = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios[UseSuperpowers.method]<{ message: string }>(
        UseSuperpowers.url,
        input
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
    <StyledSuperpower>
      <form onSubmit={use}>
        <span className="error"> {error}</span>
        <span className="success">{success}</span>
        <br />
        <br />
        <label htmlFor="name">Enter Guild Name:</label>
        <br />
        <br />
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={change}
          autoFocus
          required
        />
        <br />
        <br />
        <label htmlFor="power">Enter Superpower(Use Correct Spellings):</label>
        <br />
        <br />
        <input
          type="text"
          name="power"
          value={input.power}
          onChange={change}
          required
        />
        <br />
        <br />
        <button>Use Superpower</button>
      </form>
    </StyledSuperpower>
  )
}

const StyledSuperpower = styled.main`
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

export default Superpower
