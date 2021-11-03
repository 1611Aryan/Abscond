import styled from "styled-components"

const CreateTeam = () => {
  return (
    <Styled>
      <h1>Create</h1>
    </Styled>
  )
}

const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #256;
  display: grid;
  place-items: center;
  font-size: clamp(3rem, 5vw, 5rem);
`

export default CreateTeam
