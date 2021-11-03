import styled from "styled-components"
import Home from "./Pages/Home"
import Regsiter from "./Pages/Register"
import { Switch, Route } from "react-router-dom"

//? Main App Component
function App() {
  return (
    <StyledApp>
      <Switch>
        <Route path="/register" exact>
          <Regsiter />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  width: 100%;
`

export default App
