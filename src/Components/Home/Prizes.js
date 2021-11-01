import styled from "styled-components"

import anime_webp from "./../../Media/Home/prizes.webp"
import anime_png from "./../../Media/Home/prizes.png"

function Prizes() {
  return (
    <StyledPrizes>
      <div className="color1"></div>
      <picture>
        <source srcSet={anime_webp} type="image/webp" />
        <source srcSet={anime_png} type="image/png" />
        <img src={anime_png} alt="anime_character" />
      </picture>

      <h2>Prizes</h2>

      <div className="prize">
        <div className="head">
          <h3>FIRST</h3>
          <div className="money">&#8377;5000</div>
        </div>
        <div className="head">
          <h3>SECOND</h3>
          <div className="money">&#8377;3000</div>
        </div>
        <div className="head">
          <h3>THIRD</h3>
          <div className="money">&#8377;1500</div>
        </div>
      </div>
    </StyledPrizes>
  )
}
const StyledPrizes = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  .color1 {
    border-radius: 50%;
    background: #9a475d88;

    position: absolute;
    top: 50%;
    left: 0;
    width: 500px;
    height: 500px;
    transform: translate(-20%, -50%);
  }
  picture {
    position: absolute;
    top: 20%;
    left: 0;
    width: 18%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  h2 {
    color: #000;
    margin-left: 35%;
    font-weight: 500;
    font-size: 5rem;
  }

  .prize {
    margin-top: 4rem;
    margin-left: 35%;

    width: calc(100% - 35% - 4rem);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .head {
      width: 30%;
      height: 17rem;

      background-color: #f3c4f4;
      text-align: center;

      border-radius: 10px;
      font-size: 2rem;

      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;

      h3 {
        font-weight: 500;
      }
      .money {
        width: 80%;
        height: 50%;

        background-color: #f8a9f9;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        font-size: 1.75rem;
      }
    }
  }
`
export default Prizes
