import { useState } from "react"

import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import { guild } from "."

const Set: React.FC<{ questions: guild["questions"] }> = ({ questions }) => {
  const [toggle, setToggle] = useState(false)

  const change = () => setToggle(!toggle)

  const transformQuestions = (questions: guild["questions"]) =>
    questions.map((question, index) => {
      const set =
        question.id === "0"
          ? "A"
          : question.id === "1"
          ? "B"
          : question.id === "2"
          ? "C"
          : "D"

      return `Set: ${set} Question: ${index + 1}`
    })

  return (
    <div>
      <h3>
        <span>
          Set
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
          transformQuestions(questions).map((data, ind) => (
            <li key={ind}>
              <h5>
                Question {ind + 1} {`=>`}
              </h5>
              <span>&nbsp;{data}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Set
