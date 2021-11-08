import styled from "styled-components"
import Home from "./Pages/Home"
import Regsiter from "./Pages/Register"
import { Routes, Route } from "react-router-dom"
import REGISTER_HOME from "./Components/Register/REGISTER_HOME"
import CreateTeam from "./Components/Register/CreateTeam"
import JoinTeam from "./Components/Register/JoinTeam"
import Dashboard from "./Pages/Dashboard"

//? Main App Component
function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/register" element={<Regsiter />}>
          <Route index element={<REGISTER_HOME />} />
          <Route path="create" element={<CreateTeam />} />
          <Route path="join" element={<JoinTeam />}>
            <Route path=":guildCode" element={<JoinTeam />} />
          </Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  width: 100%;
`

export default App
