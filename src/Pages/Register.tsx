import styled from "styled-components"
import Navbar from "../Components/Navbar"
import REGISTER_HOME from "../Components/Register/REGISTER_HOME"

const Regsiter: React.FC<{}> = () => {
  return (
    <StyledRegister>
      <Navbar />
      <REGISTER_HOME />
    </StyledRegister>
  )
}

const StyledRegister = styled.main`
  width: 100vw;
  height: 100vh;

  .banner {
    padding: var(--padding);
    color: #256;
    font-size: clamp(3rem, 5vw, 4rem);
  }
`

export default Regsiter
