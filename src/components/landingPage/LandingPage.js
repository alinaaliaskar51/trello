import Header from "./header/Header"
import styled from "styled-components"
import illustration from '../../assets/illustration.webp'

const LandingPage = () => {
  return (
    <>
      <Header/>
      <Div>
      <div>
      <h1>Trello helps teams move work forward.</h1>
      <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
      </div>
      <Img src={illustration} alt="illustration"/>
      </Div>
    </>
  )
}


const Div = styled.div`
  display: flex;
  align-items: center;
  background-image: linear-gradient(rgb(234, 230, 255), rgb(255, 255, 255));
  box-sizing: border-box;
  width: 100%;
  padding: 50px 0;
  & div {
    text-align: left;
    margin: 0 50px;

    & h1 {
      font-size: 48px;
      font-family: sans-serif;
      margin: 0 0 8px;
      color: rgb(9, 30, 66);
    }
    & p {
      font-size: 20px;
      font-family:  sans-serif;
      letter-spacing: 1.3px;
      line-height: 1.5;
      margin: 0 0 8px;
      color: rgb(9, 30, 66);
    }
  }
`

const Img = styled.img`
  width: 488px;
  height: 450px;
`

export default LandingPage
