import styled from "styled-components"
import logo from "./../../Media/iiche_logo.png"

function Navbar() {
  return (
    <StyledNav>
      <div className="alpha">
        <img src={logo} alt="logo" />
        <h1>Abscond</h1>
      </div>
      <nav>
        <ul>
          <li>Prizes</li>
          <li>Sponsors</li>
          <li>Get In Touch</li>
        </ul>
        <button>Register</button>
      </nav>
    </StyledNav>
  )
}

const StyledNav = styled.header`
  width: 100%;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  padding: 0 4rem;

  .alpha {
    cursor: pointer;
    display: flex;
    align-items: center;

    img {
      width: 3rem;
      height: auto;
      object-fit: cover;
    }
    h1 {
      margin-left: 1rem;
      font-size: 1.75rem;
      font-weight: 400;
    }
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      li {
        font-size: 1rem;
        margin-right: 2rem;
      }
    }
    button {
      padding: 9px 25px;
      background-color: white;
      border: none;
      border-radius: 2px;

      cursor: pointer;
      transition: all 0.1s;
      :hover {
        background: transparent;
        outline: 2px solid #fff;
        color: #fff;
      }
    }
  }
`
export default Navbar
