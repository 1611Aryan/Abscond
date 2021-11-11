import axios from "axios"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import styled from "styled-components"
import { loginEndpoint } from "../../Endpoints"
import { login } from "../../Redux/Slices/authentication.slice"
import { addGuild, guild } from "../../Redux/Slices/guild.slice"
import { AppDispatch } from "../../Redux/store"
import SpinnerLoader from "../Loaders/spinner"

const Login: React.FC<{
  setLoginVis: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLoginVis }) => {
  const [input, setInput] = useState({
    guildName: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>()

  const closeModal = () => setLoginVis(false)

  const dontClose = (e: React.MouseEvent) => e.stopPropagation()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")
      const res = await axios[loginEndpoint.method]<{
        message: string
        guild: guild
      }>(loginEndpoint.url, input, {
        withCredentials: true,
      })
      dispatch(login())
      dispatch(addGuild(res.data.guild))
      setLoading(false)
      navigate("/dashboard")
    } catch (error: any) {
      setLoading(false)
      if (error.response.data.message) {
        return setError(error.response.data.message)
      } else console.log("Error", error.message)
      return setError("We encountered an Error please try again later")
    }
  }

  return (
    <StyledLogin onClick={closeModal}>
      {loading && <SpinnerLoader />}
      <form onClick={dontClose} onSubmit={submitHandler}>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="error">{error}</div>
        <div className="inputContainer">
          <label htmlFor="guildName">Guild Name</label>
          <br />
          <input
            type="text"
            name="guildName"
            autoFocus
            required
            value={input.guildName}
            onChange={changeHandler}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            required
            value={input.password}
            onChange={changeHandler}
          />
        </div>
        <button>Login</button>
      </form>
    </StyledLogin>
  )
}

const StyledLogin = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);

  display: grid;
  place-items: center;

  form {
    position: relative;

    overflow: hidden;

    width: 50%;
    height: 60%;
    background: #00a8dd;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: clamp(1.5rem, 5vw, 4rem) clamp(2rem, 7vw, 6rem);

    .circle1 {
      --size: 300px;
      position: absolute;
      top: 20px;
      left: 10px;
      width: var(--size);
      height: var(--size);
      background: #64daff;
      border-radius: 50%;
    }
    .circle2 {
      --size: 250px;
      position: absolute;
      bottom: 20px;
      right: 10px;
      width: var(--size);
      height: var(--size);
      background: #64daff;
      border-radius: 50%;
    }

    > * + * {
      margin-top: 1rem;
    }

    .error {
      z-index: 2;
      color: red;
      font-size: clamp(0.8rem, 2vw, 1rem);
    }

    .inputContainer {
      z-index: 2;
      width: 100%;
    }

    label {
      font-size: clamp(1.2rem, 2vw, 1.5rem);
    }

    input {
      margin-top: 1rem;
      width: 100%;

      padding: clamp(0.2rem, 1vw, 0.4rem);
      font-size: 1.1rem;
      font-family: inherit;
      transition: all 0.1s;

      &:focus {
        box-shadow: 0px 0px 0px 2px #495aad88;
      }
    }

    button {
      z-index: 2;

      padding: clamp(0.4rem, 1vw, 0.6rem) clamp(1rem, 1vw, 1.25rem);

      font-size: 1.2rem;
      background: #5f74e0;
      color: #fff;
      transition: all ease 0.2s;
      &:hover {
        background: #fff;
        color: #5f74e0;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    form {
      border-radius: 10px;
      width: 90%;
      height: 48%;
      .circle1 {
        --size: 175px;
      }
      .circle2 {
        --size: 125px;
      }
    }
  }
`
export default Login
