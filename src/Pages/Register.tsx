import { Route } from "react-router"
import styled from "styled-components"
import Navbar from "../Components/Navbar"
import CreateTeam from "../Components/Register/CreateTeam"
import JoinTeam from "../Components/Register/JoinTeam"
import REGISTER_HOME from "../Components/Register/REGISTER_HOME"

const Regsiter: React.FC<{}> = () => {
  return (
    <StyledRegister>
      <Navbar />
      <Route path="/register" exact>
        <REGISTER_HOME />
      </Route>
      <Route path="/register/create" exact>
        <CreateTeam />
      </Route>
      <Route path="/register/join" exact>
        <JoinTeam />
      </Route>
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
