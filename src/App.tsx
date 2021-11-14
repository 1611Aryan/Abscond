import styled from "styled-components"

import routes from "./routes"
import { useSelector } from "react-redux"
import { selectAuthentication } from "./Redux/Slices/authentication.slice"
import { useRoutes } from "react-router"

//? Main App Component
function App() {
  const { loggedIn, admin } = useSelector(selectAuthentication)
  const routing = useRoutes(routes(loggedIn, admin))

  return <StyledApp>{routing}</StyledApp>
}

const StyledApp = styled.div`
  width: 100%;
`

export default App
