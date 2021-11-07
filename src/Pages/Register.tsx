import { Outlet } from "react-router"
import styled from "styled-components"
import Navbar from "../Components/Navbar"

const Regsiter: React.FC<{}> = () => {
  return (
    <StyledRegister>
      <Navbar />
      <Outlet />
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
