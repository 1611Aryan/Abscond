import styled from "styled-components"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { AiFillPhone } from "react-icons/ai"
import { AiFillMail } from "react-icons/ai"
import dog_webp from "./dog.webp"
import dog_png from "./dog.png"

function Social() {
  return (
    <StyledSocial>
      <div className="heading">
        <h2>Let's Talk</h2>
      </div>
      <div className="content">
        <div className="info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit unde
          obcaecati mollitia consequuntur accusamus vel ab pariatur nulla, minus
          deleniti, nam asperiores, accusantium quis maiores? Repellendus
          placeat enim, id fuga asperiores commodi labore excepturi eos.
        </div>
        <div className="contact">
          <ul className="number-contact">
            <li>
              <AiFillPhone className="phone"></AiFillPhone>Parth : +917986810284
            </li>
            <li>
              <AiFillMail className="call"></AiFillMail>iiche.tiet@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/iiche.tiet/">
          <div className="group">
            <BsInstagram className="Instagram"></BsInstagram>
          </div>
        </a>
        <a href="https://twitter.com/IIChE_TIET">
          <div className="group">
            <BsTwitter className="Twitter"></BsTwitter>
          </div>
        </a>
        <a href="https://www.facebook.com/iiche.tiet">
          <div className="group">
            <BsFacebook className="Facebook"></BsFacebook>
          </div>
        </a>
        <a href="https://www.linkedin.com/company/indian-institute-of-chemical-engineers-iiche-tiet/mycompany/">
          <div className="group">
            <BsLinkedin className="Linkedin"></BsLinkedin>
          </div>
        </a>
      </div>
      <picture>
        <source srcSet={dog_webp} alt="dog"></source>
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
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  padding: 4rem;

  .heading {
  }
  h2 {
    font-weight: 500;
    font-size: 5rem;
  }
  .content {
    margin-top: 7rem;
    display: flex;
    justify-content: space-between;
    box-sizing: margin-box;

    .info {
      width: 60%;
      font-size: 1.5rem;
    }
    .contact {
      .number-contact {
        list-style-type: none;
        li {
          font-size: 1.75rem;
          line-height: 1.5;
          display: flex;
          align-items: center;
          .call,
          .phone {
            font-size: 4rem;
            font-weight: 500;
            margin-right: 1.5rem;
          }
        }
      }
    }
  }
  .icons {
    font-size: 2rem;

    margin-top: 4rem;
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
      width: 100%;
      object-fit: cover;
    }
  }
`
export default Social
