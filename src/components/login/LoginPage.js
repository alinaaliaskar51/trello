import styled, { createGlobalStyle } from "styled-components"
import Button from "../UI/Button"
import Input from "../UI/Input"
import Spinner from "./loading/Spinner"
import TrelloLogo from "../trelloLogo/TrelloLogo"
import { useDispatch } from "react-redux"
import { userActions } from "../../store/slices/userSlice"
import { useState } from "react"
import { useSelector } from "react-redux/es/exports"
import { spinnerActions } from "../../store/slices/loadingSlice"
import WorkSpace from "../workSpace/WorkSpace"
import { Link } from "react-router-dom"
import { useRef } from "react"



const LoginPage = () => {
  // const [email, setEmail] = useState('')
  const validEmail = useSelector((state) => state.user.validEmail)
  const validPassword = useSelector((state) => state.user.validPassword)
  const spinner = useSelector((state) => state.spinner.isLoading);
  const  [state, setState]=useState({
  isvalidemail: false,
  isvalidpassword: false,
  
})
  const dispatch = useDispatch()

  const emailHandler = (e) => {
    dispatch(userActions.email(e.target.value))
    setState({
      ...state,
      isvalidemail: true,
    })
  }
  const passwordHandler = (e) => {
    dispatch(userActions.password(e.target.value))
    setState({
      ...state,
      isvalidpassword: true
    })
  }
let click = useRef()

const submitHandler = (e) => {
  e.preventDefault();
  dispatch(spinnerActions.loading());
  setTimeout(() => {
    if(validEmail && validPassword){
      click.current.click()
    }
    dispatch(spinnerActions.endLoading())
  }, 3000);
  

};
let email = !validEmail && state.isvalidemail
let password = !validPassword && state.isvalidpassword
  

  return (
    <div>
    <MainDiv>
    <TrelloLogo />
      
      <Form onSubmit={submitHandler}>
      <h1>Log in to Trello</h1>

      {email && <p style={{color : "red", fontFamily: 'sans-serif'}} >Invalid login</p>}
      <Input placeholder='Enter email' onchange={emailHandler} type='email'/>
      {password  && <p style={{color : "red", fontFamily: 'sans-serif'}} >Invalid password</p>}
      <Input placeholder='Enter password' onchange={passwordHandler} type='password' />
     <Link ref={click} to="/workSpace"></Link> 
     <Button text='Log in'/>
      <Illustrations/>
      </Form>
    </MainDiv>
    <div>
    {spinner && <Spinner />}
    </div>

    </div>
  )
}

export default LoginPage

const Illustrations = createGlobalStyle`
body{
    background: url('https://site.eventplanon.com/wp-content/uploads/2020/06/all-in-one-tools.png') 2% 90% no-repeat fixed ,
    url('https://i.pinimg.com/originals/ef/d4/28/efd428cd0e9766626929d2ec12f04bcb.png') 98% 90% no-repeat fixed  ;
    background-size: 30%, 30%;
}
`

const DivContainer = styled.div`
  position: absolute;
`

const MainDiv = styled.div`
  background-image: url(backgroundImage.jpg);
  display: inline-block;
  /* justify-content: center; */
  position: absolute;
  left: 35%;
  & img {
    width: 197px;
    height: 43px;
    margin: 40px 0;
  }
`

const Form = styled.form`
    width: 320px;
    padding: 25px 40px;
    height: 240px;
    background-color: #FFFFFF;
    border-radius: 3px;
    padding: 25px 40px;
    box-shadow: rgb(0 0 0 / 10%) 0 0 10px;

    & h1 {
        text-align: center;
        color: #5E6C84;
        font-size: 16px;
        font-family: sans-serif;
        margin: 10px 0 25px;
    }

    & input {
        width: 320px;
        height: 44px;
        font-size: 14px;
        background-color: #FAFBFC;
        border: 2px solid #DFE1E6;
        border-radius: 3px;
        margin:  0 0 19.2px;
        box-sizing: border-box;
        padding: 8px;
        &:focus {
            outline: none;
            border-color: #4C9AFF;
            color: #676767;
        }
         }
    & Button {
        width: 320px;
        padding: 9.6px 20.8px;
        border: none;
        border-radius: 4.8px;
        background: #61BD4F;
        color: white;
        font-weight: bold;
    }

`


