import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { leaderboard } from "../Endpoints"

const Leaderboard = () => {
  const [guilds, setGuilds] = useState<
    { guildName: string; moles: number; superpowers: number }[]
  >([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await axios[leaderboard.method]<{
          guilds: { guildName: string; moles: number; superpowers: {}[] }[]
        }>(leaderboard.url)
        console.log(res.data.guilds)

        setGuilds(
          res.data.guilds.map(guild => ({
            guildName: guild.guildName,
            moles: guild.moles,
            superpowers: guild.superpowers.length,
          }))
        )
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <StyledLeaderboard>
      <StyledNav>
        <Link to="/">
          <h1>Abscond</h1>
        </Link>
      </StyledNav>
      <h1 className="heading">Leaderboard</h1>
      <section>
        <ol>
          {guilds.map((guild, index) => (
            <li key={index}>
              <span>Guild: {guild.guildName}</span>
              <span>Moles: {guild.moles}</span>
              <span>Superpowers: {guild.superpowers}</span>
            </li>
          ))}
        </ol>
      </section>
    </StyledLeaderboard>
  )
}

const StyledLeaderboard = styled.main`
  width: 100%;
  height: 100vh;

  background: #1d1d1d;

  overflow: hidden auto;

  .heading {
    color: #fff;
    padding: 0 var(--padding);
  }
  section {
    width: 100%;
    height: auto;

    ol {
      list-style-position: inside;
      list-style-type: decimal !important;
      margin-top: 1.5rem;
      width: 100%;
      height: 100%;

      li {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem var(--padding);
        font-size: 1.25rem;
        color: #fff;
        border-bottom: 2px solid #fff;

        :nth-of-type(2n) {
          background: lavender;
          color: #1d1d1d;
        }

        span {
          flex: 1;
        }
      }
    }
  }
`

const StyledNav = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;

  padding: 0 var(--padding);

  h1 {
    color: white;
    font-weight: 500;
  }
`
export default Leaderboard
