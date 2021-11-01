import styled from "styled-components"
import anime_png from "./../../Media/Home/sponsors.png"
import anime_webp from "./../../Media/Home/sponsors.webp"

function Sponsors() {
  return (
    <StyledSponsors id="sponsors">
      <picture>
        <source srcSet={anime_webp} type="image/webp" />
        <source srcSet={anime_png} type="image/png" />
        <img src={anime_png} alt="h"></img>
      </picture>
      <div className="color1"></div>
      <div className="heading">
        <h2>Sponsors</h2>
      </div>
    </StyledSponsors>
  )
}

const StyledSponsors = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2 {
    padding: 4rem var(--padding);
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 500;
  }

  picture {
    z-index: 2;
    width: 24%;
    position: absolute;
    left: 75%;
    top: 20%;
    img {
      display: block;
      width: 100%;
    }
  }
  .color1 {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #ffde8488;

    left: 70%;
    top: 23%;
  }

  @media only screen and (max-width: 500px) {
    picture {
      left: auto;
      right: -10%;
      top: auto;
      bottom: 0;
      width: 70%;
    }
    .color1 {
      left: auto;
      right: -25%;
      width: 400px;
      height: 400px;
    }
  }
`
export default Sponsors
