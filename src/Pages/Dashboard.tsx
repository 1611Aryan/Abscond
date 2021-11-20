import styled from "styled-components"
import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../Redux/store"
import { addGuild, guild, selectGuild } from "../Redux/Slices/guild.slice"
import { logout } from "../Redux/Slices/authentication.slice"

import axios from "axios"

import { profileEndpoint } from "../Endpoints"

import Profile from "../Components/Dashboard/Profile"
import LogoLoader from "../Components/Loaders/logo"
import Game from "../Components/Dashboard/Game"

import Countdown from "../Components/Dashboard/Countdown"
import randomImage from "../Util/images"
import Completed from "../Components/Dashboard/Complted"

const Dashboard = () => {
  const { guild } = useSelector(selectGuild)
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState(false)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    ;(async () => {
      const CancelToken = axios.CancelToken
      const source = CancelToken.source()
      const timeOut = setTimeout(() => {
        dispatch(logout())
        setLoading(false)
        source.cancel("")
      }, 5000)
      try {
        const res = await axios[profileEndpoint.method]<{
          guild: guild
          active: boolean
        }>(profileEndpoint.url, {
          withCredentials: true,
          cancelToken: source.token,
        })
        clearTimeout(timeOut)
        dispatch(addGuild(res.data.guild))
        setActive(res.data.active || false)
        setLoading(false)
      } catch (err) {
        dispatch(logout())
        setLoading(false)
        console.error(err)
      }
    })()

    document.title = "ABSCOND • DASHBOARD"

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledDashboard>
      {loading && <LogoLoader />}
      <picture className="bg">
        <img src={randomImage} alt="anime battleground" />
      </picture>

      <Profile guild={guild} />
      {guild.completed ? <Completed /> : active ? <Game /> : <Countdown />}
    </StyledDashboard>
  )
}

const StyledDashboard = styled.main`
  width: 100%;
  min-height: 200vh;
  max-height: 220vh;
  overflow: hidden;

  position: relative;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 120%;
    transform: translate(-10%, -10%);
    background: #444;
    z-index: -1;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(15px) contrast(90%) saturate(120%);
    }
  }
`

export default Dashboard
