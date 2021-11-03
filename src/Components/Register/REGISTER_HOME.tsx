// import styled from "styled-components";
import styled from "styled-components"
import bg_webp from "./../../Media/Register/bg.webp"

import create_webp from "./../../Media/Register/create.webp"
import create_jpg from "./../../Media/Register/create.jpg"

import join_webp from "./../../Media/Register/join.webp"
import join_jpg from "./../../Media/Register/join.jpg"

const Register_HOME = () => {
  return (
    <StyledRegisterHome>
      <picture className="bg">
        <source srcSet={bg_webp} type="image/webp" />
        <img src={bg_webp} alt="anime background" />
      </picture>
      <div className="overlay"></div>
      <div className="guild">
        <span>Create a Guild</span>
        <picture>
          <source srcSet={create_webp} type="image/webp" />
          <source srcSet={create_jpg} type="image/jpg" />
          <img src={create_jpg} alt=" "></img>
        </picture>
      </div>
      <div className="guild">
        <picture>
          <source srcSet={join_webp} type="image/webp" />
          <source srcSet={join_jpg} type="image/jpg" />
          <img src={join_jpg} alt=" "></img>
        </picture>
        <span>Join a Guild</span>
      </div>
    </StyledRegisterHome>
  )
}
const StyledRegisterHome = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
  display: flex;

  width: 100%;
  align-items: center;
  justify-content: space-evenly;

  padding: 2rem;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }

  .guild {
    width: 30%;
    aspect-ratio: 1/1;

    color: white;
    display: grid;
    place-items: center;
    padding: clamp(0.5rem, 1vw, 1rem);
    text-align: center;
    font-size: clamp(1.75rem, 5vw, 4rem);
    position: relative;

    overflow: hidden;

    cursor: pointer;

    border-radius: 10px;

    transition: transform ease 200ms;

    @media (hover: hover) {
      &:hover {
        transform: scale(1.05);
      }
    }

    span {
      z-index: 2;
    }
    picture {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(35%) blur(2px);
      }
    }
  }

  @media screen and (max-width: 800px) {
    .guild {
      width: 40%;
    }
  }

  @media screen and (max-width: 500px) {
    padding-top: 10vh;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    .guild {
      width: 65%;

      margin: 0;
    }
  }
`
export default Register_HOME
