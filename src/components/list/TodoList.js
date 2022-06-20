import { useSelector } from "react-redux"
import styled from "styled-components"
import TodoItem from "./TodoItem"


const TodoList = () => {
  const {items} = useSelector(state => state.tasks)
    console.log(items);
  return (
    <div>
      <List>
        {items.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} item={todo.item} tasks={todo.newItems}/>
        ))}
      </List>
    </div>
  )
}


export default TodoList

const List = styled.ul`
    display: flex;
`
