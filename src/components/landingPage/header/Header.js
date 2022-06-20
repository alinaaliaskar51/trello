import styled  from "styled-components"
import Button from "../../UI/Button"
import TrelloLogo from "../../trelloLogo/TrelloLogo"
import { useDispatch } from "react-redux"
import { loginActions } from "../../../store/slices/loginSlice"
import { Link } from "react-router-dom"


const Header = () => {
  const dispatch = useDispatch()

  const loginHandler = () => {
    dispatch(loginActions.loginPage())
  }
  return (
    <div>
      <Nav>
        <Ul>
            <li><TrelloLogo/></li>
            <li> <a href="/">Features</a></li>
            <li> <a href="/">Solutions</a></li>
            <li> <a href="/">Plans</a></li>
            <li> <a href="/">Pricing</a></li>
            <li> <a href="/">Reasources</a></li>
        </Ul>
        <div>
          <Link to="/loginpage"><Button text='Log in' click={loginHandler}/></Link>
        
        
        </div>
      </Nav>
    </div>
  )
}

export default Header



const Nav = styled.nav`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: rgb(255, 255, 255);
    
    & div{
      display: flex;
      & button {
        background-color: Transparent;
        background-repeat:no-repeat;
        border: none;
        padding: 8px 24px;
        height: 60px;
        font-size: 18px;
        font-family: sans-serif;
        color: white;
        background-color: rgb(0, 101, 255);
        cursor: pointer;  
     }
    } 
`
const Ul = styled.ul`
    display: flex;
    align-items: center;
    & li {
        list-style: none;
        text-decoration: none;
        padding: 20px 16px 16px;
        & a{
            text-decoration: none;
            font-family: sans-serif;
            color: rgb(23, 43, 77);
        }
    }
    & img {
        width: 110px;
        height: 30px;
        /* padding: 16px; */
    }
`
