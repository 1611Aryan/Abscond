import styled from "styled-components"

const Completed: React.FC = () => {
  return (
    <StyledCompleted>
      <h1>Congratulations!!!</h1>
      <h2>You Have Successfully Completed The Game</h2>
    </StyledCompleted>
  )
}

const StyledCompleted = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding);

  > * + * {
    margin-top: 1rem;
  }
  h1 {
    width: 100%;
    text-align: center;

    font-size: clamp(3rem, 5vw, 5rem);
  }
  h2 {
    width: 100%;
    text-align: center;

    font-size: clamp(1.5rem, 4vw, 3rem);
  }
`

export default Completed
