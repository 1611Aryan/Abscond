import { useState } from "react"
import styled from "styled-components"
import Hint from "../Components/ControlPanel/Hint"
import Menu from "../Components/ControlPanel/Menu"
import Nav from "../Components/ControlPanel/Nav"
import Guilds from "../Components/ControlPanel/Guilds"
import Trade from "../Components/ControlPanel/Trade"
import Superpower from "../Components/ControlPanel/Superpower"

export type menuOption = "guilds" | "hint" | "superpower" | "trade"

const AdminDashboard = () => {
  const [menuOption, setMenuOption] = useState<menuOption>("guilds")

  return (
    <StyledAdminDashboard>
      <Nav />
      <Menu setMenuOption={setMenuOption} menuOption={menuOption} />
      {menuOption === "guilds" ? (
        <Guilds />
      ) : menuOption === "hint" ? (
        <Hint />
      ) : menuOption === "superpower" ? (
        <Superpower />
      ) : (
        <Trade />
      )}
    </StyledAdminDashboard>
  )
}

const StyledAdminDashboard = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden auto;

  background: linear-gradient(135deg, #c1e3ca, #f9b98b);

  --navHeight: 10vh;
  --menuHeight: 8vh;
  --contentHeight: calc(100vh - var(--navHeight) - var(--menuHeight));
`
export default AdminDashboard
