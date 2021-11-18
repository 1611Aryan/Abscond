import { Link } from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Styledbar>
      <Link to="/">
        <h1>Abscond</h1>
      </Link>
    </Styledbar>
  )
}
const Styledbar = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;

  padding: 0 var(--padding);

  h1 {
    color: white;
    font-weight: 500;
  }
`
export default Navbar
