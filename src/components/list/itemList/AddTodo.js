import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { tasksActions } from "../../../store/slices/tasksSlice"
import Button from "../../UI/Button"


const AddTodo = (props) => {

    const [textareaValue, setTextareaValue] = useState('')
    const dispatch = useDispatch()

    const textareaValueHandler = (e) => {
        setTextareaValue(e.target.value)
    }

    const submitHandler = (e) => {
    
     if(textareaValue.trim()!==''){
      const taskData = {
        text: textareaValue,
        idtext: Math.random().toString(),
        id: props.id
      }
    
      dispatch(tasksActions.addNewTask(taskData))
     }

    setTextareaValue('')
        
    }


  return (
    <>
    <DivCont>
      <textarea placeholder="Enter a title for this card..." onChange={textareaValueHandler} value={textareaValue} />
      <Button text='Add card'click={submitHandler} />
    </DivCont>
    </>
  )
}

export default AddTodo

const DivCont = styled.div`
  /* background-color: aqua; */
  border: none;

  & button {
    width: 80px;
    height: 32px;
    padding: 6px 12px;
    background-color: #0079bf;
    color: white;
    font-size: 13px;
  }

  & textarea{
      height: 55px;
      width: 247px;
      border: none;
      background-color: #E8E8E8;
      color: #172b4d;
  }
`
