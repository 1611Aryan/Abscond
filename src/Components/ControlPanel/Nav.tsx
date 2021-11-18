import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import styled from "styled-components"
import { logoutAdmin } from "../../Redux/Slices/authentication.slice"
import { AppDispatch } from "../../Redux/store"

const Nav = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const logout = () => {
    dispatch(logoutAdmin())
    navigate("/admin", { replace: true })
  }

  return (
    <StyledNav>
      <h1>Abscond</h1>
      <nav>
        <button onClick={logout}>Logout</button>
      </nav>
    </StyledNav>
  )
}

const StyledNav = styled.div`
  height: var(--navHeight);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 var(--padding);

  h1 {
    color: white;
    font-weight: 500;
  }

  nav {
    button {
      padding: 1rem;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: 1rem;
    }
  }
`

export default Nav
