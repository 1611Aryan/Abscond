import { useState } from "react"

import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import styled from "styled-components"
import { member } from "."

const Member: React.FC<{ member: member; ind: number }> = ({ member, ind }) => {
  const [toggle, setToggle] = useState(false)

  const change = () => setToggle(!toggle)

  return (
    <StyledMember>
      Member {ind + 1}:
      {toggle ? (
        <FaCaretUp onClick={change} />
      ) : (
        <FaCaretDown onClick={change} />
      )}
      {toggle && (
        <>
          <li>
            <h5>Name: </h5>
            {member.name}
          </li>
          <li>
            <h5>Number: </h5>
            {member.phone}
          </li>
          <li>
            <h5>Email: </h5> {member.email}
          </li>
        </>
      )}
    </StyledMember>
  )
}

const StyledMember = styled.ul`
  svg {
    cursor: pointer;
  }

  li {
    margin-top: 0.25rem;
    font-size: clamp(0.7rem, 1vw, 0.9rem);
    font-weight: 300;
    h5 {
      font-size: clamp(0.8rem, 1vw, 1rem);
      font-weight: 400;
      display: inline;
    }
  }
`

export default Member
