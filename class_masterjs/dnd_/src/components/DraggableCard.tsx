import { Draggable } from "react-beautiful-dnd";
import React from "react";

interface IDraggableCard {
    toDoId:number;
    text:string;
    index:number;
}
function DraggableCard ({text,toDoId,index}:IDraggableCard) {
    console.log(text,"rendered")
    return (
        <Draggable draggableId={toDoId+""} index={index}>
            {(provided) =>
            <li ref={provided.innerRef} {...provided.draggableProps}>
                <span {...provided.dragHandleProps}>🔥</span>
                {text}
            </li>
            }
        </Draggable>
    );
}

export default React.memo(DraggableCard)