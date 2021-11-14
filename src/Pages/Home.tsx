import styled from "styled-components"
import Navbar from "../Components/Navbar"
import Main from "../Components/Home/Main"
import Prizes from "../Components/Home/Prizes"
import Sponsors from "../Components/Home/Sponsors"
import ContactUs from "../Components/Home/ContactUs"
import { useEffect, useState } from "react"
import Login from "../Components/Login"
import LogoLoader from "../Components/Loaders/logo"

const Home = () => {
  const [loginVis, setLoginVis] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 250)
    document.title = "ABSCOND"
  }, [])

  return (
    <StyledHome>
      {loading && <LogoLoader />}

      <Navbar />
      <Main setLoginVis={setLoginVis} />
      <Prizes />
      <Sponsors />
      <ContactUs />

      {loginVis && <Login setLoginVis={setLoginVis} />}
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
