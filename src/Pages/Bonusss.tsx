import axios from "axios"
import React, { useState } from "react"
import styled from "styled-components"
import { award } from "../Endpoints"

const Bonus = () => {
  const [input, setInput] = useState({
    name: "",
    option: "",
    power: "",
  })

  const [message, setMessage] = useState("")

  const change = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await axios[award.method](award.url, input)

      setMessage(res.data.message)
    } catch (error: any) {
      console.log(error)
      if (error.response.data.message) {
        return setMessage(error.response.data.message)
      } else console.log("Error", error.message)
      return setMessage("We encountered an Error please try again later")
    }
  }

  return (
    <StyledBonus>
      <form onSubmit={submitHandler}>
        {message}
        <br />
        <label htmlFor="name">Guild</label>
        <br /> <br />
        <input
          type="text"
          value={input.name}
          onChange={change}
          name="name"
          required
          autoFocus
        />
        <br /> <br />
        <label htmlFor="option">Moles or Superpowers</label>
        <br /> <br />
        <input
          type="text"
          value={input.option}
          onChange={change}
          name="option"
        />
        <br /> <br />
        <label htmlFor="power">Power</label>
        <br /> <br />
        <input type="text" value={input.power} onChange={change} name="power" />
        <br />
        <br />
        <button>Award</button>
      </form>
    </StyledBonus>
  )
}

const StyledBonus = styled.main`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;

  background: #256;

  form {
    width: 50%;
    padding: var(--padding);
    background: rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    label {
      font-size: 1.5rem;
    }

    input {
      width: 100%;
      padding: 0.5rem;
    }

    button {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  }
`

export default Bonus
