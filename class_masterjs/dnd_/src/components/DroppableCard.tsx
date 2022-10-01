import {Droppable, Id} from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import {useRecoilState} from "recoil";
import {toDosAtom, Categories} from "../atoms";
import styled from "styled-components";

interface IDroppableCard {
    droppableId : Categories;
}

const Board = styled.div<{isDraggingOver : boolean , isDraggingFromThis : boolean}>`
    display:flex;
    flex-direction: column;

    
    width:500px;
    background-color: ${props => props.isDraggingOver ? "blue" : props.isDraggingFromThis ? "red" : "skyblue"};
    border-radius: 5px;
    border:5px solid black;
    margin: 0px 20px;
    font-size: 15px;

    p {
        font-family: 'Courier New', Courier, monospace;
        font-size: 30px;
        text-align: center;
        margin: 10px auto;
    }
`

export default function DroppableCard ({droppableId}:IDroppableCard){
    const [toDos,setToDos] = useRecoilState(toDosAtom);
    return (
        <Droppable droppableId={droppableId}>
            {(provided,snapshot)=>
                <Board isDraggingOver = {snapshot.isDraggingOver} isDraggingFromThis = {Boolean(snapshot.draggingFromThisWith)} ref = {provided.innerRef} {...provided.droppableProps}>
                    <p>{droppableId}</p>
                    {toDos[droppableId].map((toDo,index) => 
                    <DraggableCard key = {toDo.id} toDoId = {toDo.id} toDoText={toDo.text} toDoCategory = {toDo.category} index = {index}/> 
                    )}
                </Board>
            }
        </Droppable>
    )
}