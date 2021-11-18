import styled from "styled-components"
import { guild } from "."
import Leader from "./Leader"
import Logs from "./Logs"
import Members from "./Members"
import Set from "./Set"
import SuperPowers from "./SuperPowers"

const Guild: React.FC<{ guild: guild }> = ({ guild }) => {
  return (
    <StyledGuild>
      <div className="infoContainer">
        <div>
          <h4>guild Name: </h4>
          {guild.guildName}
        </div>
        <div>
          <h4>Join Code: </h4>
          {guild.guildCode}
        </div>
      </div>
      <div className="infoContainer">
        <div>
          <h4>Score: </h4>
          {guild.moles}
        </div>
        <div>
          <h4>Question Number: </h4>
          {guild.questionNo}
        </div>
      </div>
      <div className="infoContainer">
        <div>
          <h4>Hints:</h4> {guild.hints.length}
        </div>
      </div>
      <Leader leader={guild.leader} />
      <Members members={guild.members} />
      <Set questions={guild.questions} />
      <SuperPowers superPowers={guild.superpowers} />
      <Logs logs={guild.logs} />
    </StyledGuild>
  )
}

const StyledGuild = styled.div`
  padding: clamp(0.5rem, 2vw, 1rem);
  background: #fff;
  border-radius: 15px;
  border-top: 2px solid var(--secondary);
  border-bottom: 2px solid var(--secondary);
  margin-bottom: 2rem;
  font-size: clamp(0.75rem, 2vw, 1rem);
  div + div {
    margin: 1rem 0;
  }
  li {
    margin-top: 0.5rem;
  }
  .infoContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 !important;
    div {
      flex: 1;
      margin: 0.5rem 0 !important;
    }
  }
`

export default Guild
