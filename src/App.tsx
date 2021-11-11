import styled from "styled-components"

import routes from "./routes"
import { useSelector } from "react-redux"
import { selectAuthentication } from "./Redux/Slices/authentication.slice"
import { useRoutes } from "react-router"

//? Main App Component
function App() {
  const { loggedIn } = useSelector(selectAuthentication)
  const routing = useRoutes(routes(loggedIn))

  return <StyledApp>{routing}</StyledApp>
}

const StyledApp = styled.div`
  width: 100%;
`

export default App
