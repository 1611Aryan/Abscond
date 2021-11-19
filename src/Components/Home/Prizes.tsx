import styled from "styled-components"

import anime_webp from "./../../Media/Home/prizes.webp"
import anime_png from "./../../Media/Home/prizes.png"

function Prizes() {
  return (
    <StyledPrizes id="prizes">
      <picture>
        <source srcSet={anime_webp} type="image/webp" />
        <source srcSet={anime_png} type="image/png" />
        <img src={anime_png} alt="anime_character" />
      </picture>
      <div className="color1"></div>
      <h2>Prizes</h2>

      <div className="prize">
        <div className="head">
          <h3>FIRST</h3>
          <div className="money">&#8377;5000</div>
        </div>
        <div className="head">
          <h3>SECOND</h3>
          <div className="money">Gift Set By Papernest</div>
        </div>
        <div className="head">
          <h3>THIRD</h3>
          <div className="money">Coupons By Build Geeks</div>
        </div>
      </div>
    </StyledPrizes>
  )
}
const StyledPrizes = styled.div`
  width: 100%;
  height: 100vh;

  overflow: hidden;
  position: relative;
  display: flex;
  //justify-content: space-evenly;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  --left: 35%;

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
    z-index: 2;
    position: absolute;
    top: 20%;
    left: 0;
    width: 18%;
    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }

  h2 {
    width: 100%;
    z-index: 2;
    color: #000;
    padding: 0 var(--left);
    font-weight: 500;
    font-size: clamp(3rem, 5vw, 5rem);
  }

  h4 {
    width: 100%;
    z-index: 2;
    color: #000;
    padding: 0 var(--padding) 0 var(--left);
    font-weight: 400;
    font-size: clamp(2rem, 4vw, 4rem);
  }

  .prize {
    z-index: 2;

    margin-left: var(--left);

    width: calc(100% - var(--left) - var(--padding));
    display: flex;
    justify-content: space-between;
    align-items: center;

    .head {
      width: 32%;
      height: 17rem;

      background-color: #f3c4f4;
      text-align: center;

      border-radius: 10px;
      font-size: clamp(1rem, 3vw, 2rem);

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
        font-size: clamp(0.8rem, 2vw, 1.75rem);
      }
    }
  }
  @media only screen and (max-width: 500px) {
    --left: var(--padding);
    justify-content: center;

    picture {
      top: auto;
      bottom: 5%;
      width: 65%;
      filter: contrast(80%);
    }

    .color1 {
      top: 60%;
      transform: translateY(-50%);
      left: 1%;
      width: 350px;
      height: 350px;
    }
    h2 {
      text-align: right;
    }
    h4 {
      align-self: flex-end;
      width: 80%;
      text-align: right;
    }
    .prize {
      margin-top: 2rem;
      justify-content: space-between;
      align-items: center;

      .head {
        width: 30%;
        height: 8rem;
      }
    }
  }
`
export default Prizes
