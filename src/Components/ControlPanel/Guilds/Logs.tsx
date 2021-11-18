import { useState } from "react"

import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import { guild } from "."

const Logs: React.FC<{ logs: guild["logs"] }> = ({ logs }) => {
  const [toggle, setToggle] = useState(false)

  const change = () => setToggle(!toggle)

  return (
    <div>
      <h3>
        <span>
          Logs
          {toggle ? (
            <FaCaretUp onClick={change} />
          ) : (
            <FaCaretDown onClick={change} />
          )}
        </span>
        <div className="line"></div>
      </h3>
      <ul>
        {toggle && logs.map((data, ind) => <li key={ind}>{data.message}</li>)}
      </ul>
    </div>
  )
}

export default Logs
