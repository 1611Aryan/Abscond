import { useState } from "react"

import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import { member } from "."
import Member from "./Member"

const Members: React.FC<{ members: member[] }> = ({ members }) => {
  const [toggle, setToggle] = useState(false)

  const change = () => setToggle(!toggle)
  return (
    <div>
      <h3>
        <span>
          Members:
          {toggle ? (
            <FaCaretUp onClick={change} />
          ) : (
            <FaCaretDown onClick={change} />
          )}
        </span>
        <div className="line"></div>
      </h3>
      <ul className="members">
        {toggle &&
          members.map((member, ind) => (
            <Member key={ind} member={member} ind={ind} />
          ))}
      </ul>
    </div>
  )
}

export default Members
