import styled from "styled-components"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { AiFillPhone } from "react-icons/ai"
import { AiFillMail } from "react-icons/ai"
import dog_webp from "./../../Media/Home/dog.webp"
import dog_png from "./../../Media/Home/dog.png"

function Social() {
  return (
    <StyledSocial>
      <h2>Let's Talk</h2>

      <div className="content">
        <div className="info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit unde
          obcaecati mollitia consequuntur accusamus vel ab pariatur nulla, minus
          deleniti, nam asperiores, accusantium quis maiores? Repellendus
          placeat enim, id fuga asperiores commodi labore excepturi eos.
        </div>
        <div className="contact">
          <ul>
            <li>
              <AiFillPhone className="phone" />
              <span> Parth : +917986810284</span>
            </li>

            <li>
              <a href="mailto:  iiche.tiet@gmail.com">
                <AiFillMail className="call" />
                <span> iiche.tiet@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="icons">
        <a
          href="https://www.instagram.com/iiche.tiet/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="group">
            <BsInstagram className="Instagram" />
          </div>
        </a>
        <a
          href="https://twitter.com/IIChE_TIET"
          target="_blank"
          rel="noreferrer"
        >
          <div className="group">
            <BsTwitter className="Twitter" />
          </div>
        </a>
        <a
          href="https://www.facebook.com/iiche.tiet"
          target="_blank"
          rel="noreferrer"
        >
          <div className="group">
            <BsFacebook className="Facebook" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/indian-institute-of-chemical-engineers-iiche-tiet/mycompany/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="group">
            <BsLinkedin className="Linkedin" />
          </div>
        </a>
      </div>
      <picture>
        <source srcSet={dog_webp} type="image/webp" />
        <source srcSet={dog_png} type="image/png" />
        <img src={dog_png} alt="dog" />
      </picture>
    </StyledSocial>
  )
}
const StyledSocial = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;

  padding: 4rem;

  h2 {
    font-weight: 500;
    font-size: 5rem;
  }
  .content {
    display: flex;
    justify-content: space-between;
    box-sizing: margin-box;

    .info {
      width: 60%;
      font-size: 1.5rem;
    }
    .contact {
      ul {
        list-style-type: none;

        > * + * {
          margin-top: 1rem;
        }

        li,
        a {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          svg {
            font-size: 2.5rem;
            margin-right: 1rem;
          }
        }
      }
    }
  }
  .icons {
    font-size: 2rem;

    display: flex;
    justify-content: space-between;
    width: 20%;
  }
  picture {
    position: absolute;
    bottom: 0;
    width: 20%;
    right: 0;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }
`
export default Social
