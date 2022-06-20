import styled  from "styled-components"
import TrelloLogo from "../../trelloLogo/TrelloLogo"
import Input from "../../UI/Input"
import searchIcon from '../../../assets/searchIcon.png'


const BoardHeader = () => {

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
        <Input type="text" placeholder="Search" />
        <SearchIcon src={searchIcon}/>
        </div>
      </Nav>
    </div>
  )
}

export default BoardHeader



const Nav = styled.nav`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 45px;
    background-color: #76b6c4;   
    
    & div{
      display: flex;
      align-items: center;
      & input {
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        background-color: rgba(0, 0, 0, 0.04);
        width: 250px;
        height: 32px;
        padding: 8px 8px 8px 30px;
        margin-right: 30px;
        font-size: 14px;
        &:focus {
            outline: none;
            border: none;
            color: #676767;
            background-color:white;
        }
      }
     }
`
const SearchIcon = styled.img`
        width: 18px;
        height: 18px;
        position: absolute;
        padding: 0 5px;
`
const Ul = styled.ul`
    display: flex;
    align-items: center;
    & li {
        list-style: none;
        text-decoration: none;
        padding: 6px 10px 6px 12px;
        & a{
            text-decoration: none;
            font-family: sans-serif;
            color: rgb(23, 43, 77);
        }
    }
    & img {
        width: 75px;
        height: 31px;
    }
`
