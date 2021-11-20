import { useEffect, useState } from "react"
import styled from "styled-components"

const Countdown: React.FC = () => {
  const countDownDate = new Date("Nov 20, 2021 21:00:00").getTime()

  const [days, setDays] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const x = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))

      if (days >= 0) {
        setDays(days)
      }
      if (hours >= 0) {
        setHours(hours)
      }
      if (minutes >= 0) {
        setMinutes(minutes)
      }

      if (distance < 0) {
        clearInterval(x)
      }
    }, 100)
    return () => {
      clearInterval(x)
    }
  }, [countDownDate])
  return (
    <StyledCountdown>
      <h1>The Battle Starts in...</h1>
      <div className="counter">
        <div>
          <span className="days">{days}</span>
          <div className="smalltext">Days</div>
        </div>
        <div>
          <span className="hours">{hours}</span>
          <div className="smalltext">Hours</div>
        </div>
        <div>
          <span className="minutes">{minutes}</span>
          <div className="smalltext">Minutes</div>
        </div>
        <div>
          <span className="seconds">{seconds}</span>
          <div className="smalltext">Seconds</div>
        </div>
      </div>
    </StyledCountdown>
  )
}

const StyledCountdown = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: var(--padding);
  h1 {
    width: 100%;
    text-align: center;

    font-size: clamp(3rem, 5vw, 5rem);
  }
  .counter {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 5%;
  }
  .counter > div {
    width: 20%;
    height: calc((90vw) / 5);
    background: #353535;
    display: inline-block;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    padding: clamp(0.5rem, 2vw, 1rem);
  }
  span {
    width: 100%;
    flex: 1;
    border-radius: 2px;
    background: #e7e7e7;
    display: inline-block;
    display: flex;

    justify-content: center;
    align-items: center;
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: 0.5rem;
  }
  .smalltext {
    color: white;
    font-size: clamp(1.2rem, 3vw, 2rem);
  }
  @media (max-width: 465px) {
    .counter {
      flex: 0.75;
      padding: 0 3%;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .counter > div {
      width: 45%;
      height: calc((90vw) / (100 / 45));
    }
  }
`

export default Countdown
