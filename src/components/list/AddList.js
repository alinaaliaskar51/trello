// import { useEffect, useRef } from "react"
import styled from "styled-components";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useDispatch } from "react-redux";
import { listActions } from "../../store/slices/listSlice";
import { useState } from "react";
import { tasksActions } from "../../store/slices/tasksSlice";
import TodoList from "./TodoList";

const AddList = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const inputValueHandler = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const closeInputHandler = () => {
    dispatch(listActions.showAddInput());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      tasksActions.addTask({
        task: value,
        id: Math.random().toString(),
      })
    );

    setValue("");
  };

  return (
    <MainDiv>
    <List>
      <TodoList />
      <Cont>
        <Input
          type="text"
          placeholder="Enter a list title..."
          value={value}
          onchange={inputValueHandler}
        />
        <InnserCont>
          <Button text="Add list" click={submitHandler}/>
          <div onClick={closeInputHandler}>×</div>
        </InnserCont>
      </Cont>
    </List>
    </MainDiv>
  );
};

export default AddList;

const MainDiv = styled.div`
overflow: auto;
max-width: 1200px;
height: 526px;
`

const List = styled.div`
  display: flex;
  height: 80px;

`;

const Cont = styled.form`

  padding: 4px;
  background-color: #ebecf0;
  border-radius: 3px;
  text-align: left;
  & input {
    width: 265px;
    height: 35px;
    padding: 8px 12px;
    box-sizing: border-box;
    border: 1px #fff;
    &:focus {
      outline: none;
      border-color: #0079bf;
    }
  }
`;

const InnserCont = styled.div`
  display: flex;
  align-items: center;
  & button {
    width: 70px;
    height: 35px;
    padding: 4px 12px;
    background-color: #0079bf;
    border: none;
    color: white;
    opacity: 1;
    font-size: 14px;
    margin: 4px 10px 0 0;
    border-radius: 4px;
  }

  & div {
    font-size: 33px;
    font-weight: 600;
    color: #1b3752;
    cursor: pointer;
  }
`;
