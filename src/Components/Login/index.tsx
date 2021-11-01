import React from "react"
import styled from "styled-components"

const Login: React.FC<{
  setLoginVis: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLoginVis }) => {
  const closeModal = () => {
    setLoginVis(false)
  }

  const dontClose = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <StyledLogin onClick={closeModal}>
      <form onClick={dontClose}>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="inputContainer">
          <label htmlFor="guild">Guild Name</label>
          <br />
          <input type="text" name="guild" autoFocus required />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" required />
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

    width: 50%;
    height: 60%;
    background: #00a8dd;
    border-radius: 25px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: clamp(2rem, 5vw, 4rem) clamp(3rem, 7vw, 6rem);

    .circle1 {
      position: absolute;
      top: 20px;
      left: 10px;
      width: 300px;
      height: 300px;
      background: #64daff;
      border-radius: 50%;
    }
    .circle2 {
      position: absolute;
      bottom: 20px;
      right: 10px;
      width: 250px;
      height: 250px;
      background: #64daff;
      border-radius: 50%;
    }

    .inputContainer {
      z-index: 2;
      margin-top: 1rem;
      width: 100%;
    }

    label {
      font-size: 1.5rem;
    }

    input {
      margin-top: 1rem;
      width: 100%;

      padding: 0.4rem;
      font-size: 1rem;
      font-family: inherit;
      transition: all 0.1s;

      &:focus {
        box-shadow: 0px 0px 0px 2px #495aad88;
      }
    }

    button {
      z-index: 2;
      margin-top: 1rem;
      padding: 0.6rem 1.25rem;
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
`
export default Login
