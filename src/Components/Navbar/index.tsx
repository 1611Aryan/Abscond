import styled from "styled-components"
import logo_black from "./../../Media/iiche_logo_black.png"
import logo_white from "./../../Media/iiche_logo_white.webp"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const Navbar = () => {
  const location = useLocation()
  const [scheme, setScheme] = useState({
    color: "#000",
    background: "none",
    logo: logo_black,
    nav: true,
    buttons: [
      {
        text: "Register",
        link: "/register",
      },
    ],
  })

  useEffect(() => {
    if (location.pathname === "/register") {
      return setScheme(scheme => ({
        ...scheme,
        color: "#fff",
        logo: logo_white,
        //background: " linear-gradient(#000, transparent)",
        nav: false,
        buttons: [
          {
            text: "Login",
            link: "/",
          },
        ],
      }))
    }

    const regex = /\b(register\w*)\b/
    if (regex.test(location.pathname))
      setScheme(scheme => ({
        ...scheme,
        color: "#fff",
        logo: logo_white,
        //background: " linear-gradient(#000, transparent)",
        nav: false,
        buttons: [
          {
            text: "Register",
            link: "/register",
          },
          {
            text: "Login",
            link: "/",
          },
        ],
      }))
  }, [location])

  return (
    <StyledNav theme={{ color: scheme.color, background: scheme.background }}>
      <Link to="/">
        <div className="alpha">
          <img src={scheme.logo} alt="logo" />
          <h1>Abscond</h1>
        </div>
      </Link>

      <nav>
        {scheme.nav && (
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
        )}
        <div className="buttons">
          {scheme.buttons.map((button, index) => (
            <Link key={index} to={button.link}>
              <button>{button.text}</button>
            </Link>
          ))}
        </div>
      </nav>
    </StyledNav>
  )
}

const StyledNav = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  padding: 0 var(--padding);

  z-index: 100;

  background: ${props => props.theme.background};

  > * {
    color: ${props => props.theme.color};
  }

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

    .buttons {
      > * + * {
        margin-left: clamp(0.5rem, 2vw, 2rem);
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
