import styled from "styled-components"
import anime_png from "./image.png"
import anime_webp from "./image.webp"
import anime_jpg from "./image.jpg"

function Main() {
  return (
    <StyledMain>
      <div className="firstPageWithImage">
        <div className="content">
          <div className="eventName">Abscond</div>
          <div className="eventDescription">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium, temporibus perspiciatis. Commodi fuga veniam
              excepturi blanditiis iure eaque, perspiciatis necessitatibus.
            </p>
          </div>
          <div className="loginButton">
            <a className="cta" href="google.com">
              <button class="buttonTwo">Login</button>
            </a>
          </div>
        </div>

        <span className="dot"></span>

        <picture>
          <source srcSet={anime_webp} alt="Tanjaro"></source>
          <source srcSet={anime_png} alt="Tanjaro"></source>

          <img src={anime_jpg} alt="Tanjaro" />
        </picture>
      </div>
    </StyledMain>
  )
}

const StyledMain = styled.div`
  width: 100%;
  position: relative;

  // overflow-x : hidden ;
  .firstPageWithImage {
    width: 100%;
    height: 90vh;
  }

  .content {
    width: 50%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 4rem;
    gap: 1rem;
  }

  .eventName {
    font-size: 4rem;
  }

  .eventDescription {
    font-size: 1.75rem;
    z-index: 2;
  }

  .loginButton {
    text-decoration: none;
    font-size: 2rem;
  }

  .dot {
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 460px;
    width: 460px;
    background-color: #57c39e88;
    border-radius: 50%;
  }

  .firstPageWithImage {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .firstPage {
    display: inline-block;
    width: 50px;
  }

  picture {
    width: 25%;
    position: absolute;
    top: 1%;
    left: 75%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .temp {
    font-size: 5rem;
  }

  .buttonTwo {
    padding: 9px 25px;
    background-color: white;
    border: none;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
  }

  .cta :hover {
    background: transparent;
    outline: 2px solid #fff;
    color: #fff;
  }
`

export default Main
