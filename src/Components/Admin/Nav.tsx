import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {
  const location = useLocation()

  return (
    <Styledbar>
      <Link to="/">
        <h1>Abscond</h1>
      </Link>
      {location.pathname === "/admin/signup" ? (
        <Link to="/admin">
          <button>Login</button>
        </Link>
      ) : (
        <Link to="/admin/signup">
          <button>Register</button>
        </Link>
      )}
    </Styledbar>
  )
}
const Styledbar = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 var(--padding);

  h1 {
    color: white;
    font-weight: 500;
  }

  button {
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 1rem;
  }
`
export default Navbar
