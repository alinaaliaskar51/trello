import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}



const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            const newItem = action.payload
            state.items.push({
                id: newItem.id,
                item: newItem.task,
                newItems: []
            })
     
        },
        addNewTask (state, action){
            console.log(action.payload);
            state.items.find((i)=>i.id===action.payload.id).newItems.push({text: action.payload.text, idtext: action.payload.idtext})
            // console.log(payload);
            // const currentItem = state.items.find((item) => item.id === payload.key)
            // return  currentItem.tasks.push({task: payload.task, id:payload.id})
            // const newItem = action.payload
            // state.taskItems.push({
            //     id: newItem.id,
            //     taskItems: newItem.title,
            // })
        }
    }
})

export const tasksActions = tasksSlice.actions
export default tasksSlice