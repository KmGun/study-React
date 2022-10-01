import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";
import produce from "immer";
import { Categories, toDosAtom } from "../atoms";
import { useRecoilState } from "recoil";


interface IDraggableCard {
    toDoId:number;
    toDoText:string;
    index:number;
    toDoCategory : Categories;
}

const Card = styled.div`
    font-size: 20px;
    height:30px;
    background-color: tomato;
    border-radius: 10px;
`


function DraggableCard ({toDoText,toDoId,toDoCategory,index}:IDraggableCard) {
    const [toDos,setToDos] = useRecoilState(toDosAtom);
    const onClickChangeCategory = (newCategory : Categories) => {
        setToDos(current => 
            produce(current,(draft) => {
                const index = draft[toDoCategory].findIndex(toDo => toDo.id === toDoId)
                // 1. 삭제 
                const targetToDo = draft[toDoCategory].splice(index,1)[0]
                // 2. category를 변경
                targetToDo.category = newCategory;
                // 3. 그놈을 자기 draft.newCategory 배열에 push
                draft[newCategory].push(targetToDo)
                return draft
            })    
        )
    }
    const onClickDel = ()=> {

    }
    return (
        <Draggable draggableId={toDoId+""} index={index}>
            {(provided) =>
            <Card ref={provided.innerRef} {...provided.draggableProps}>
                <span {...provided.dragHandleProps}>✊</span>
                {toDoText}
                {toDoCategory !== Categories.완료 && <button onClick={()=>onClickChangeCategory(Categories.완료)}>완료</button>}
                {toDoCategory !== Categories.진행중 && <button onClick={()=>onClickChangeCategory(Categories.진행중)}>진행중</button>}
                {toDoCategory !== Categories.미완 && <button onClick={()=>onClickChangeCategory(Categories.미완)}>미완</button>}
                <button>🗑</button>
            </Card>
            }
        </Draggable>
    );
}

export default React.memo(DraggableCard)