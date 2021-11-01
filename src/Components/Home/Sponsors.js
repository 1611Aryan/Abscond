import styled from "styled-components"
import anime_png from "./../../Media/Home/sponsors.png"
import anime_webp from "./../../Media/Home/sponsors.webp"

function Sponsors() {
  return (
    <StyledSponsors>
      <div className="color1"></div>
      <picture>
        <source srcSet={anime_webp} type="image/webp" />
        <source srcSet={anime_png} type="image/png" />
        <img src={anime_png} alt="h"></img>
      </picture>
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

  .heading {
    position: absolute;
    top: 10%;
    h2 {
      margin-left: 4rem;
      font-size: 5rem;
      font-weight: 500;
    }
  }

  picture {
    width: 24%;
    position: absolute;
    left: 75%;
    top: 20%;
    img {
      width: 100%;
    }
  }
  .color1 {
    // overflow:hidden;
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #ffde84;

    left: 70%;
    top: 23%;
  }
`
export default Sponsors
