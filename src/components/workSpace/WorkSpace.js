import styled from "styled-components"
import AddList from "../list/AddList"
import Button from "../UI/Button"
import BoardHeader from "./boardHeader/BoardHeader"
import { useDispatch, useSelector } from "react-redux"
import { listActions } from "../../store/slices/listSlice"
// import ocean from '../../assets/ocean.jpg'



const WorkSpace = () => {

    const showInput = useSelector(state => state.list.isShown)
    // console.log(showInput);

    const dispatch = useDispatch()

    const addListHandler = () => {
        dispatch(listActions.showAddInput())
    }

  return (
    <div>
    
        <BoardHeader/>
        <div >
        <Cont>
        {showInput && <AddList/> ||  <CreateButton text='+ Add a list' click={addListHandler}/>}
       
        
        </Cont>


        <ImgContainer>
            <img src='https://media.istockphoto.com/photos/clean-ocean-waves-breaking-on-white-sand-beach-with-turquoise-emerald-picture-id1302343043?b=1&k=20&m=1302343043&s=170667a&w=0&h=d0IJEMqMp1A6Ih9FYrhmludHY4EnqxJkXMrm1cZ1-bw='/>
        </ImgContainer>
       </div>
    </div>
  )


}

export default WorkSpace


const ImgContainer = styled.div`
    & img {
        background-image: url('');
        background-size: cover;
        width: 100%;
        height: 560px;
    }
   
`
const Cont = styled.div`
    position: absolute;
    margin: 30px;
 
`
const CreateButton = styled(Button)`
         width: 265px;
         height: 35px;
        color: #000;
        padding: 6px 8px;
        font-size: 15px;
        text-align: left;
        border: none;
        border-radius: 4px;
        opacity: 0.4;
        cursor: pointer;
        &:hover{
            background-color: #9ba6a5;
        }
`