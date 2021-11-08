import { Link } from "react-router-dom"
import styled from "styled-components"
import dog from "./../../Media/Home/dog.webp"

const Modal: React.FC<{
  message: string
}> = ({ message }) => {
  return (
    <StyledModal>
      <div className="modal">
        <div className="content">
          <h3>{message}</h3>
          <span>
            <Link to="/">LOGIN</Link> to Access the Guild Dashboard
          </span>
        </div>
        <img src={dog} alt="dog" />
      </div>
    </StyledModal>
  )
}

const StyledModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;

  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  .modal {
    position: relative;
    padding: calc(0.8 * var(--padding));

    overflow: hidden;
    width: 45%;
    height: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

    background: #256;

    h3 {
      font-size: clamp(1.5rem, 3vw, 2rem);
    }
    span {
      a {
        text-decoration: underline;
        font-weight: 100;
        &:hover {
          color: #fff;
        }
      }
      font-size: clamp(1rem, 3vw, 1.5rem);
    }

    img {
      width: 40%;
      transform: rotate(10deg);
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 900px) {
    .modal {
      width: 60%;
      height: 40%;
    }
  }
  @media only screen and (max-width: 650px) {
    .modal {
      width: 70%;
      height: 30%;
    }
  }
  @media only screen and (max-width: 500px) {
    .modal {
      width: 85%;
      height: 40%;
    }
  }
`
export default Modal
