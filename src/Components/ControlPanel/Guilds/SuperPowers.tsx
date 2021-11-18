import { useState } from "react"

import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import { guild } from "."

const SuperPowers: React.FC<{ superPowers: guild["superpowers"] }> = ({
  superPowers,
}) => {
  const [toggle, setToggle] = useState(false)

  const change = () => setToggle(!toggle)

  return (
    <div>
      <h3>
        <span>
          SuperPowers
          {toggle ? (
            <FaCaretUp onClick={change} />
          ) : (
            <FaCaretDown onClick={change} />
          )}
        </span>
        <div className="line"></div>
      </h3>
      <ul>
        {toggle &&
          superPowers.map((superpower, ind) => (
            <li key={ind}>{superpower.name}</li>
          ))}
      </ul>
    </div>
  )
}

export default SuperPowers
