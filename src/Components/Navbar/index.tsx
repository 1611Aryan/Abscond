import styled from "styled-components"
import logo from "./../../Media/iiche_logo.png"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <StyledNav>
      <Link to="/">
        <div className="alpha">
          <img src={logo} alt="logo" />
          <h1>Abscond</h1>
        </div>
      </Link>

      <nav>
        <ul>
          <a href="#prizes">
            <li>Prizes</li>
          </a>
          <a href="#sponsors">
            <li>Sponsors</li>
          </a>
          <a href="#contact_us">
            <li>Get In Touch</li>
          </a>
        </ul>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </nav>
    </StyledNav>
  )
}

const StyledNav = styled.header`
  width: 100vw;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  padding: 0 var(--padding);

  .alpha {
    cursor: pointer;
    display: flex;
    align-items: center;

    img {
      width: clamp(1.5rem, 3vw, 3rem);
      height: auto;
      object-fit: cover;
    }
    h1 {
      margin-left: clamp(0.5rem, 2vw, 1rem);
      font-size: clamp(0.9rem, 3vw, 1.75rem);
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
        font-size: clamp(0.7rem, 2vw, 1.1rem);
        margin-right: clamp(0.5rem, 2vw, 2rem);
      }
    }
    button {
      font-size: clamp(0.7rem, 2vw, 1.1rem);
      padding: clamp(0.2rem, 1vw, 0.5rem) clamp(0.4rem, 1vw, 0.75rem);
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