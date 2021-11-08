import { RiFileCopyLine } from "react-icons/ri"
import styled from "styled-components"
import { Link } from "react-router-dom"

import bg1_avif from "./../Media/Dashboard/bg1.avif"
import bg1_webp from "./../Media/Dashboard/bg1.webp"
import bg1_jpg from "./../Media/Dashboard/bg1.jpg"

import logo_black from "./../Media/iiche_logo_black.png"
//import logo_white from "./../Media/iiche_logo_white.webp"

const Dashboard = () => {
  return (
    <StyledDashboard>
      <picture className="bg">
        <source srcSet={bg1_avif} type="image/avif" />
        <source srcSet={bg1_webp} type="image/webp" />
        <source srcSet={bg1_jpg} type="image/jpg" />
        <img src={bg1_jpg} alt="anime battleground" />
      </picture>

      <header>
        <nav>
          <div className="logo">
            <img src={logo_black} alt="" />
            <h1>Abscond</h1>
          </div>
          <Link to="/">
            <button>Logout</button>
          </Link>
        </nav>
      </header>

      <section>
        <h1>Hello Marauders</h1>
        <div className="content">
          <div className="left">
            <h3>Guild Members</h3>
            <ol className="members">
              <li>Aryan</li>
              <li>Harry</li>
              <li>Hermione</li>
              <li>Ron</li>
            </ol>
          </div>
          <div className="right">
            <div className="code">
              <h3>Guild Code</h3>
              <span>sd67Fh6me5gI</span>
            </div>
            <div className="share">
              <h3>Invite To Guild</h3>
              <div className="link">
                <div className="box">
                  <span>https://abscond.com/register/join/sd67Fh6me5gI</span>
                </div>
                <button>
                  <RiFileCopyLine />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledDashboard>
  )
}

const StyledDashboard = styled.main`
  width: 100%;
  height: 200vh;
  overflow: hidden;

  position: relative;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 120%;
    transform: translate(-10%, -10%);
    z-index: -1;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(10px);
    }
  }

  header {
    width: 100%;
    height: 10vh;
    nav {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 var(--padding);

      .logo {
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
  }

  section {
    padding: 0 var(--padding);
    height: 90vh;

    h1 {
      margin-top: clamp(0.5rem, 2vw, 1rem);
      font-size: clamp(1.75rem, 4vw, 3rem);
    }

    .content {
      margin-top: clamp(1rem, 3vw, 2rem);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-size: clamp(1rem, 3vw, 1.75rem);
        font-weight: 500;
      }

      .left {
        width: 40%;

        ol {
          margin-top: clamp(0.75rem, 2vw, 1.5rem);
          padding: calc(var(--padding) / 2);
          height: 45vh;

          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-direction: column;

          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(5px);
          border-radius: 0px 10px 10px 0;
          list-style-position: inside;

          li {
            font-size: clamp(0.9rem, 2vw, 1.25rem);
          }
        }
      }

      .right {
        > * + * {
          margin-top: clamp(1rem, 2vw, 1.75rem);
        }

        .code {
          line-height: 1.2;
          span {
            font-weight: 600;
            font-size: calc(1.25 * clamp(1rem, 3vw, 1.75rem));
          }
        }

        .share {
          .link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            > * {
              flex: 1;
            }

            .box {
              background: rgba(255, 255, 255, 0.4);
              backdrop-filter: blur(5px);
              padding: 0.4rem;
              line-height: 1.2;
              span {
                font-size: clamp(0.9rem, 2vw, 1.25rem);
              }
            }
            button {
              background: rgba(0, 0, 0, 0.4);
              padding: 0.4rem;
              display: grid;
              place-items: center;
              svg {
                font-size: clamp(0.9rem, 2vw, 1.25rem);
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`

export default Dashboard
