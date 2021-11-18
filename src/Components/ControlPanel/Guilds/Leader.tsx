import { useState } from "react"

import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import { member } from "."

const Leader: React.FC<{ leader: member }> = ({ leader }) => {
  const [toggle, setToggle] = useState(false)

  const change = () => setToggle(!toggle)

  return (
    <div>
      <h3>
        <span>
          Leader
          {toggle ? (
            <FaCaretUp onClick={change} />
          ) : (
            <FaCaretDown onClick={change} />
          )}
        </span>
        <div className="line"></div>
      </h3>
      {toggle && (
        <ul>
          <li>Name: {leader.name}</li>
          <li>Email: {leader.email}</li>
          <li>Number: {leader.phone}</li>
        </ul>
      )}
    </div>
  )
}

export default Leader
