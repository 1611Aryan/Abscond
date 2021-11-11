import styled from "styled-components"
import AbscondLogo from "./../../Media/abscond_logo.png"

const LogoLoader = () => {
  return (
    <StyledLogo>
      <img src={AbscondLogo} alt="" />
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;

  z-index: 9999;
  background: #222;

  img {
    width: 40%;
    object-fit: cover;
    animation: animate ease 700ms infinite alternate;
  }

  @keyframes animate {
    from {
      transform: scale(1);
      filter: saturate(10%);
    }
    to {
      transform: scale(1.1);
      filter: saturate(150%);
    }
  }

  @media only screen and (max-width: 550px) {
    img {
      width: 75%;
    }
  }
`

export default LogoLoader
