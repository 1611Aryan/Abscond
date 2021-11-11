import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { addGuild, guild, selectGuild } from "../Redux/Slices/guild.slice"

import bg1_avif from "./../Media/Dashboard/bg1.avif"
import bg1_webp from "./../Media/Dashboard/bg1.webp"
import bg1_jpg from "./../Media/Dashboard/bg1.jpg"

import { useEffect, useState } from "react"

import axios from "axios"
import { profileEndpoint } from "../Endpoints"
import { AppDispatch } from "../Redux/store"
import Profile from "../Components/Dashboard/Profile"
import LogoLoader from "../Components/Loaders/logo"

//import logo_white from "./../Media/iiche_logo_white.webp"

const Dashboard = () => {
  const { guild } = useSelector(selectGuild)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    ;(async () => {
      try {
        const res = await axios[profileEndpoint.method]<{ guild: guild }>(
          profileEndpoint.url,
          {
            withCredentials: true,
          }
        )
        dispatch(addGuild(res.data.guild))
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledDashboard>
      {loading && <LogoLoader />}
      <picture className="bg">
        <source srcSet={bg1_avif} type="image/avif" />
        <source srcSet={bg1_webp} type="image/webp" />
        <source srcSet={bg1_jpg} type="image/jpg" />
        <img src={bg1_jpg} alt="anime battleground" />
      </picture>

      <Profile guild={guild} />
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
`

export default Dashboard
