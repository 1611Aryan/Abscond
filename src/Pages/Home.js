import styled from "styled-components"
import Navbar from "./../Components/Navbar"
import Main from "./../Components/Home/Main"
import Prizes from "./../Components/Home/Prizes"
import Sponsors from "./../Components/Home/Sponsors"
import Social from "./../Components/Home/Social"

const Home = () => {
  return (
    <StyledHome>
      <Navbar />
      <Main />
      <Prizes />
      <Sponsors />
      <Social />
    </StyledHome>
  )
}

const StyledHome = styled.main`
  width: 100%;

  background: linear-gradient(to bottom, #9c99ef, #fac7d5);
  height: 400vh;
  overflow: hidden;
`

export default Home
