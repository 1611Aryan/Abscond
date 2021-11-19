import styled from "styled-components"
import { menuOption } from "../../Pages/AdminControlPanel"

const Menu: React.FC<{
  setMenuOption: React.Dispatch<React.SetStateAction<menuOption>>
  menuOption: menuOption
}> = ({ setMenuOption, menuOption }) => {
  const selectOption = (option: menuOption) => setMenuOption(option)

  return (
    <StyledMenu>
      <ul>
        <li
          className={menuOption === "guilds" ? "active" : ""}
          onClick={() => selectOption("guilds")}
        >
          Search Guild
        </li>
        <li
          className={menuOption === "buySuperpower" ? "active" : ""}
          onClick={() => selectOption("buySuperpower")}
        >
          Buy Superpower
        </li>
        <li
          className={menuOption === "hint" ? "active" : ""}
          onClick={() => selectOption("hint")}
        >
          Buy Hint
        </li>
        <li
          className={menuOption === "superpower" ? "active" : ""}
          onClick={() => selectOption("superpower")}
        >
          Use Superpower
        </li>
        <li
          className={menuOption === "trade" ? "active" : ""}
          onClick={() => selectOption("trade")}
        >
          Trade
        </li>
        <li
          className={menuOption === "bonus" ? "active" : ""}
          onClick={() => selectOption("bonus")}
        >
          Bonus Level
        </li>{" "}
        <li
          className={menuOption === "skip" ? "active" : ""}
          onClick={() => selectOption("skip")}
        >
          Skip Bonus Level
        </li>
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.menu`
  width: 100%;
  height: var(--menuHeight);

  ul {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    padding: 0 var(--padding);

    li {
      padding: 1rem;
      font-size: 1rem;
      border-radius: 10px;
      background: lavender;
      color: #1d1d1d;
      cursor: pointer;

      + li {
        margin-left: 1.5rem;
      }

      transition: all 200ms;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 0px 2px #1d1d1d;
      }
    }

    .active {
      color: lavender;
      background: #1d1d1d;

      &:hover {
        transform: scale(1);
        box-shadow: none;
      }
    }
  }
`

export default Menu
