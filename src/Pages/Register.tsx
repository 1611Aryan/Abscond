import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import styled from "styled-components"
import LogoLoader from "../Components/Loaders/logo"
import Navbar from "../Components/Navbar"

const Regsiter: React.FC<{}> = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 250)
  }, [])
  return (
    <StyledRegister>
      {loading && <LogoLoader />}

      <Navbar />
      <Outlet />
    </StyledRegister>
  )
}

const StyledRegister = styled.main`
  width: 100vw;
  height: 100vh;

  .banner {
    padding: var(--padding);
    color: #256;
    font-size: clamp(3rem, 5vw, 4rem);
  }
`

export default Regsiter
