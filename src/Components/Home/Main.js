import styled from "styled-components"

import anime_webp from "./../../Media/Home/main.webp"
import anime_png from "./../../Media/Home/main.png"

function Main() {
  return (
    <StyledMain>
      <div className="content">
        <h1>Abscond</h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
          temporibus perspiciatis. Commodi fuga veniam excepturi blanditiis iure
          eaque, perspiciatis necessitatibus.
        </p>

        <button>Login</button>
      </div>

      <span className="circle"></span>

      <picture>
        <source srcSet={anime_webp} type="image/webp" />
        <source srcSet={anime_png} type="image/png" />
        <img src={anime_png} alt="Tanjaro" />
      </picture>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  width: 100%;
  position: relative;

  height: 90vh;

  .content {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 4rem;
    line-height: 1.2;

    > * + * {
      margin-top: 1.25rem;
    }

    h1 {
      font-weight: 500;
      font-size: 4rem;
    }

    p {
      font-size: 1.75rem;
      z-index: 2;
    }

    button {
      border: 0;
      padding: 0.5rem 1.25rem;
      font-size: 1.25rem;
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
    width: 25%;
    position: absolute;
    top: 1%;
    left: 75%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`

export default Main
