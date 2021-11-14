import styled from "styled-components"

import anime_webp from "./../../Media/Admin/anime.webp"
import anime_png from "./../../Media/Admin/anime.png"
import { useState } from "react"
import axios from "axios"
import { adminSignup } from "../../Endpoints"

const AdminSignup = () => {
  const [input, setInput] = useState({
    code: "",
    name: "",
    password: "",
  })

  const [message, setMessage] = useState("")

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios[adminSignup.method]<{ message: string }>(
        adminSignup.url,
        input
      )
      setInput({ code: "", name: "", password: "" })
      setMessage(res.data.message)
    } catch (error: any) {
      setInput({ code: "", name: "", password: "" })
      if (error.response.data.message) {
        return setMessage(error.response.data.message)
      } else console.log("Error", error.message)
      return setMessage("We encountered an Error please try again later")
    }
  }

  return (
    <StyledAdminSignup>
      <div className="login">
        <div className="details">
          <h2>Admin Register</h2>
          <form onSubmit={submitHandler}>
            {message}
            <input
              type="text"
              name="code"
              value={input.code}
              onChange={changeHandler}
              required={true}
              autoFocus
              placeholder="Register Code"
            ></input>
            <br></br>
            <input
              type="text"
              value={input.name}
              name="name"
              required={true}
              onChange={changeHandler}
              placeholder="Username"
            />
            <br></br>
            <input
              type="password"
              value={input.password}
              name="password"
              required={true}
              onChange={changeHandler}
              placeholder="Password"
            />
            <br></br>
            <button>Log In</button>
          </form>
        </div>
        <picture>
          <source srcSet={anime_webp} type="image/webp" />
          <source srcSet={anime_png} type="image/png" />
          <img src={anime_png} alt="anime" />
        </picture>
      </div>
    </StyledAdminSignup>
  )
}

const StyledAdminSignup = styled.section`
  width: 100%;
  height: var(--height);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  overflow: hidden;
  .login {
    width: 100%;
    height: 60%;
    position: absolute;
    .details,
    picture {
      width: 40%;
      height: 100%;
      float: left;
      margin-left: 5%;
      margin-right: 5%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .details {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      background-color: #f5dbcb;
      opacity: 0.8;
      border-radius: 20px;
      h2 {
        font-size: 2.3rem;
      }
      form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        input {
          font-size: 1rem;
          padding: 0.8rem;
          height: 2.5rem;
          width: 25rem;
          border-radius: 10px;
          background-color: white;
        }
        button {
          width: 5.3rem;
          height: 2.1rem;
          border-radius: 9px;
          outline: none;
          font-size: 1rem;
        }
        button:hover {
          background: white;
          border: none;
          cursor: pointer;
          color: red;
        }
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .login {
      .details {
        h2 {
          font-size: 1.5rem;
        }
        form {
          input {
            width: 18rem;
            padding: 0.5rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 800px) {
    picture {
      display: none;
    }
    .login {
      display: flex;
      justify-content: space-evenly;
      height: 80%;
      .details {
        width: 80%;
        height: 100%;
        margin: 0 0;
        // justify-content: space-evenly;
        h2 {
          font-size: 2rem;
        }
      }
      picture {
        position: absolute;
        left: 0%;
        width: 0%;
        margin: 0;
      }
    }
  }
`
export default AdminSignup
