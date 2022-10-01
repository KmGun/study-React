import {Droppable, Id} from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import {useRecoilState} from "recoil";
import {toDosAtom, Categories} from "../atoms";

interface IDroppableCard {
    droppableId : Categories;
}

export default function DroppableCard ({droppableId}:IDroppableCard){
    const [toDos,setToDos] = useRecoilState(toDosAtom);
    return (
        <Droppable droppableId="one">
            {(provided)=>
                <ul ref = {provided.innerRef} {...provided.droppableProps}>
                    {toDos[droppableId].map((toDo,index) => 
                    <DraggableCard key = {toDo.id} toDoId = {toDo.id} text={toDo.text} index = {index}/> 
                    )}
                </ul>
            }
        </Droppable>
    )
}