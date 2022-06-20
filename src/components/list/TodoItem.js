import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { listActions } from "../../store/slices/listSlice"
import Button from "../UI/Button"
import AddTodo from "./itemList/AddTodo"
import NewItem from "./NewItem"
import TodoList from "./TodoList"


const TodoItem = ({id, item, tasks}) => {
console.log(tasks);

 let [show, setShow]=useState(false)

  const addTitleHandler = () => {
      setShow((show)=>!show)
  }


  return (
    <div>
    <ItemDiv>
      
      <div>{item}</div>
      <ul>
    {tasks?.map((task) => (
      <li key={task.idtext}>{task.text}</li>
      ))}
    </ul>
      
     {show && <AddTodo id={id} click={addTitleHandler}/> ||  <Button text='+ Add a card' click={addTitleHandler}/>}
    
    </ItemDiv>
    </div>
  )
}

export default TodoItem

const ItemDiv = styled.div`
  width: 272px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 3px;
  margin-right: 5px;

  & div {
    box-sizing: border-box;
    text-align: left;
    padding: 15px;
    font-family: sans-serif;
    font-weight: bolder;
    color: #172b4d;
    font-size: 15px;
  }

  & button {
    width: 232px;
    height: 28px;
    text-align: left;
    padding: 0 15px;
    color: #5e6c84;
    border: none;
    border-radius: 3px;
    background-color: white;
    font-size: 15px;
    cursor: pointer;
  }
  & li{
    background-color: #E8E8E8;
    width: 240px;
    height: 20px;
    border-radius: 3px;
    box-shadow: 0 1px 0 #091e4240;
    cursor: pointer;
    margin: auto;
    margin-top: 8px;
    padding: 6px 8px 2px;
    color: #172b4d;
    list-style: none;
    font-family: sans-serif;
    font-size: 15px;
  }
`
