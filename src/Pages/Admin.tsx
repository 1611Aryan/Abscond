import { Outlet } from "react-router"
import styled from "styled-components"
import NavBar from "./../Components/Admin/Nav"

const Admin = () => {
  return (
    <StyledAdmin>
      <NavBar />
      <Outlet />
    </StyledAdmin>
  )
}

const StyledAdmin = styled.main`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background: linear-gradient(135deg, #c1e3ca, #f9b98b);

  --height: 90vh;
`

export default Admin
