import styled from "styled-components"

const Navbar = () => {
  return (
    <Styledbar>
      <h1>Abscond</h1>
    </Styledbar>
  )
}
const Styledbar = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  background: black;

  padding: 0 var(--padding);

  h1 {
    color: white;

    align-self: center;
    font-weight: 500;
  }
`
export default Navbar
