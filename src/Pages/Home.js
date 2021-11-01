import styled from "styled-components"
import Main from "../Components/Main"
import Navbar from "../Components/Navbar"
import Prizes from "../Components/Prizes"
import Social from "../Components/Social"
import Sponsors from "../Components/Sponsors"

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
  background: linear-gradient(to bottom, #9c99ef, #fac7d5);
  height: 400vh;
`

export default Home
