import { useState } from "react"
import styled from "styled-components"

import vector1 from "./../../Media/Register/vector1.png"
import vector2 from "./../../Media/Register/vector2.png"

const CreateTeam = () => {
  const [page, setPage] = useState(1)

  const changePage = (pageNumber: number) => setPage(pageNumber)

  return (
    <StyledCreateTeam>
      <div className=" left">
        <img src={vector1} className="vector1" alt="blob" />
        <p>
          Let's <br /> Get <br /> You <br /> Started
        </p>
      </div>
      <div className="right">
        <img src={vector2} className="vector2" alt="blob" />
        <form>
          {page === 1 ? (
            <>
              <div className="inputContainer">
                <label htmlFor="guild">Your Guild Name</label>
                <input type="text" name="guild" required autoFocus />
              </div>
              <div className="inputContainer">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="inputContainer">
                <label htmlFor="guild">Create Guild Password</label>
                <input type="password" name="guild" required autoFocus />
              </div>

              <button type="button" onClick={() => changePage(2)}>
                Next
              </button>
            </>
          ) : (
            <>
              <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="inputContainer">
                <label htmlFor="number">Phone Number</label>
                <input type="text" name="number" required />
              </div>
              <div className="inputContainer">
                <label htmlFor="name">Branch</label>
                <input type="text" name="name" required />
              </div>
              <div className="inputContainer">
                <label htmlFor="email">Year</label>
                <input type="text" name="email" required />
              </div>
              <div className="btnContainer">
                <button type="button" onClick={() => changePage(1)}>
                  Previous
                </button>
                <button type="submit">Create</button>
              </div>
            </>
          )}
        </form>
      </div>
    </StyledCreateTeam>
  )
}

const StyledCreateTeam = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #385a7c;

  display: flex;
  .left {
    width: 30%;
    height: 100%;
    display: grid;
    place-items: center;
    text-align: left;
    background: #f97171;
    padding: var(--padding);

    p {
      font-size: clamp(1.5rem, 5vw, 5rem);
      color: #fff;
      line-height: 1.1;
      font-weight: 600;
      z-index: 2;
    }
    box-shadow: 8px 0px 12px rgba(0, 0, 0, 0.2);

    overflow: hidden;

    position: relative;

    .vector1 {
      position: absolute;
      bottom: -10%;
      left: -30%;
      width: 70%;
    }
  }
  .right {
    width: 70%;
    height: 100%;

    display: grid;
    place-items: center;

    padding: var(--padding);

    position: relative;
    overflow: hidden;

    .vector2 {
      position: absolute;
      bottom: 3%;
      right: -30%;
      width: 70%;
    }

    form {
      width: 60%;
      height: 80%;
      display: flex;
      align-items: flex-start;
      justify-content: space-evenly;
      flex-direction: column;
      z-index: 2;

      background: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      padding: var(--padding);

      > * + * {
        margin-top: clamp(0.5rem, 1vw, 1rem);
      }

      .inputContainer {
        width: 100%;
        > * + * {
          margin-top: clamp(0.5rem, 1vw, 1rem);
        }
      }

      label {
        font-size: clamp(0.9rem, 2vw, 1.5rem);
        color: #fff;
      }

      input {
        width: 100%;
        padding: clamp(0.2rem, 1vw, 0.5rem);
        font-size: clamp(0.9rem, 2vw, 1.2rem);
        background: #aed6dc;

        transition: all 100ms;

        &:focus {
          background: #d5f2f7;
        }
      }
      .btnContainer {
        width: 100%;
        display: flex;
        > * + * {
          margin-left: clamp(0.7rem, 1vw, 1.5rem);
        }
      }
      button {
        padding: clamp(0.2rem, 1vw, 0.4rem) clamp(0.6rem, 2vw, 1rem);
        font-size: clamp(0.9rem, 2vw, 1.25rem);
        background: #303447;
        color: #fff;

        transition: all 100ms;

        &:hover {
          background: #fff;
          color: #303447;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .left {
      width: 40%;
      .vector1 {
        position: absolute;
        top: -20%;
        left: -60%;
        width: 180%;
      }
    }
    .right {
      width: 60%;

      .vector2 {
        position: absolute;
        bottom: -10%;
        right: -50%;
        width: 200%;
      }
      form {
        width: 100%;
        height: 70%;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .left {
      width: 35%;
      .vector1 {
        position: absolute;
        top: -20%;
        left: -60%;
        width: 180%;
      }
    }
    .right {
      width: 65%;

      .vector2 {
        position: absolute;
        bottom: -10%;
        right: -50%;
        width: 200%;
      }
      form {
        width: 100%;
        height: 75%;
        padding: calc(var(--padding) / 2);
      }
    }
  }
`

export default CreateTeam
