import styled from "styled-components"
import Home from "./Pages/Home"

//? Main App Component
function App() {
  return (
    <StyledApp>
      <Home />
    </StyledApp>
  )
}

const StyledApp = styled.div`
  width: 100%;
`

export default App
