import styled from "styled-components"

import anime_webp from "./../../Media/Home/main.webp"
import anime_png from "./../../Media/Home/main.png"
const Main: React.FC<{
  setLoginVis: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLoginVis }) => {
  const openModal = () => setLoginVis(true)

  return (
    <StyledMain>
      <div className="content">
        <h1>Abscond</h1>

        <p>
          The ultimate event where participants will be divided into teams of 5,
          hypothetically trapped in a room. For escaping the room you will have
          to solve various types of mysteries to unlock your next level. Escape
          first to&nbsp;
          <span className="win">
            <span>W</span>
            <span>i</span>
            <span>n</span>
          </span>
          .
          <br />
          <span> “Turn your ultra instinct on”.</span>
        </p>

        <button onClick={openModal}>Login</button>
      </div>

      <picture>
        <source srcSet={anime_webp} type="image/webp" />
        <source srcSet={anime_png} type="image/png" />
        <img src={anime_png} alt="Tanjaro" />
      </picture>
      <span className="circle"></span>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  width: 100%;
  position: relative;

  height: 100vh;
  padding: 0 var(--padding);
  .content {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 3;

    line-height: 1.2;

    > * + * {
      margin-top: clamp(0.75rem, 3vw, 1.25rem);
    }

    h1 {
      font-weight: 500;
      font-size: clamp(2rem, 5vw, 4rem);
    }

    p {
      font-size: clamp(1rem, 3vw, 1.75rem);
      z-index: 2;
      span {
        color: lavenderblush;
      }
      .win {
        span {
          display: inline-block;
          :nth-of-type(1) {
            animation: jump 300ms ease-out infinite alternate;
          }
          :nth-of-type(2) {
            animation: jump 300ms ease-out 100ms infinite alternate;
          }
          :nth-of-type(3) {
            animation: jump 300ms ease-out 200ms infinite alternate;
          }
        }
      }
      @keyframes jump {
        from {
          transform: translateY(5px);
        }
        50% {
          animation-timing-function: ease-in;
        }
        to {
          transform: translateY(-5px);
        }
      }
    }

    button {
      border: 0;
      padding: clamp(0.2rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1.25rem);
      font-size: clamp(0.8rem, 2vw, 1.25rem);
      background-color: white;

      border-radius: 2px;

      cursor: pointer;
      transition: all 0.2s;
      :hover {
        background: #0004;
        outline: 2px solid #fff;
        color: #fff;
      }
    }
  }

  .circle {
    position: absolute;
    top: 50%;
    right: 0;

    transform: translateY(-50%);
    height: 460px;
    width: 460px;
    background-color: #57c39e88;
    border-radius: 50%;
  }

  picture {
    z-index: 2;
    position: absolute;
    top: 10%;
    left: 75%;

    width: 25%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 500px) {
    .content {
      width: 90%;
    }

    .circle {
      z-index: 2;
      background-color: hsla(160, 60%, 55%, 0.8);
    }

    picture {
      z-index: 1;
      top: auto;
      left: auto;
      bottom: 0;
      right: 0;
      width: 100%;

      img {
        display: block;
      }
    }
  }
`

export default Main
