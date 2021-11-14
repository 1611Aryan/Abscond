import styled from "styled-components"

import { FiExternalLink } from "react-icons/fi"

import anime_png from "./../../Media/Home/sponsors.png"
import anime_webp from "./../../Media/Home/sponsors.webp"

import build_webp from "./../../Media/Home/Sponsors/build.webp"

import gmc_webp from "./../../Media/Home/Sponsors/gmc.webp"

import grabOn_webp from "./../../Media/Home/Sponsors/grabOn.webp"

import paperNest_webp from "./../../Media/Home/Sponsors/paperNest.webp"

function Sponsors() {
  const sponsors = [
    {
      img: build_webp,
      name: "BUILD GEEKS",
      link: "https://www.buildgeeks.in/",
    },
    {
      img: gmc_webp,
      name: "GIVE MY CERTIFICATE",
      link: "https://givemycertificate.com/",
    },
    {
      img: grabOn_webp,
      name: "GRAB ON",
      title: "OUR SAVING PARTNER",
      link: "https://www.grabon.in/",
    },
    {
      img: paperNest_webp,
      name: "PAPER NEST",
      link: "http://papernest.in/",
    },
    {
      img: build_webp,
      name: "BUILD GEEKS",
      link: "https://www.buildgeeks.in/",
    },
  ]

  return (
    <StyledSponsors id="sponsors">
      <picture>
        <source srcSet={anime_webp} type="image/webp" />
        <source srcSet={anime_png} type="image/png" />
        <img src={anime_png} alt="h"></img>
      </picture>
      <div className="color1"></div>
      <div className="heading">
        <h2>Sponsors</h2>
      </div>
      <div className="logos">
        {sponsors.map((sponsor, index) => (
          <div className="logo" key={index}>
            <div className="container">
              <div className="front">
                <img src={sponsor.img} alt="" />
              </div>
              <div className="back">
                {sponsor.title && <span>{sponsor.title}</span>}
                <span className="name">
                  <a href={sponsor.link} target="_blank" rel="noreferrer">
                    {sponsor.name} <FiExternalLink />
                  </a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyledSponsors>
  )
}

const StyledSponsors = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 0 var(--padding);

  h2 {
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 500;
  }

  picture {
    z-index: 2;
    width: 24%;
    position: absolute;
    left: 75%;
    top: 20%;
    img {
      display: block;
      width: 100%;
    }
  }
  .color1 {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #ffde8488;

    left: 70%;
    top: 23%;
  }

  .logos {
    --parentHeight: 75;
    width: 70%;
    height: calc(100vh * var(--parentHeight) / 100);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    .logo {
      --height: 40;
      width: calc((100vh * var(--parentHeight) / 100) * var(--height) / 100);
      height: calc(100% * var(--height) / 100);

      border-radius: 50%;

      margin: 0 1rem;

      position: relative;

      &:hover {
        .container {
          transform: rotateY(180deg);
        }
      }

      .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;

        transform-style: preserve-3d;

        transition: all ease 300ms;

        > * {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        .front {
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: contain;
          }
        }
        .back {
          transform: rotateY(180deg);

          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.2);
          padding: 10px;

          span {
            font-size: clamp(0.8rem, 1.5vw, 1.3rem);
            text-align: center;
            font-weight: 600;
          }

          .name {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    picture {
      left: auto;
      right: -10%;
      top: auto;
      bottom: 0;
      width: 70%;
      opacity: 0.8;
    }
    .color1 {
      left: auto;
      right: -25%;
      width: 400px;
      height: 400px;
    }

    .logos {
      z-index: 10;
      width: 100%;
      --parentHeight: 60;
      .logo {
        --height: 25;
        .container {
          .front {
            background: #fff;
          }
          .back {
            background: rgb(255, 255, 255);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .logos {
      z-index: 10;
      width: 100%;
      --parentHeight: 65;
      .logo {
        --height: 27;
      }
    }
  }
`
export default Sponsors
