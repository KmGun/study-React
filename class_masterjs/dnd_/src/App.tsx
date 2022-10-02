import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDosAtom, Categories, ItoDos, ItoDo } from "./atoms";
import DroppableCard from "./components/DroppableCard";
import styled from "styled-components";
import { useEffect } from "react";
import produce from "immer";

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`
const AddToDoBtn = styled.button`
  width : 50px; height : 50px;
  background-color: aliceblue;
  border-radius: 10px;
`

export default function App() {
  const [toDos,setToDos] = useRecoilState(toDosAtom);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => { 
    if (!destination) return; 
    if (destination.droppableId === source.droppableId){
      setToDos(oldToDos => {
        // prev 리스트를 받아서, newTodos 리스트로 바꿔주는 로직
        const oldToDoList = [...oldToDos[source.droppableId]];
        const oldToDo = oldToDoList.splice(source.index,1)[0];
        oldToDoList.splice(destination.index,0,oldToDo);
        const newToDoList = oldToDoList;
        const newToDos = {...oldToDos}
        newToDos[source.droppableId] = newToDoList;
        return newToDos;

      })
    
    }
    if (destination.droppableId !== source.droppableId){
        setToDos(oldToDos => {


          //1. source array의 요소를 삭제, moving생성

          const sourceToDoList = [...oldToDos[source.droppableId]];
          const moving = sourceToDoList.splice(source.index,1)[0];

           //2.  destination array의 요소 추가
          const destinToDoList = [...oldToDos[destination.droppableId]];
          destinToDoList.splice(destination.index,0,moving);

           //3. newToDos에 배정
          const newToDos = {...oldToDos};
          newToDos[source.droppableId] = sourceToDoList;
          newToDos[destination.droppableId] = destinToDoList;

          return newToDos;

        })
    }

  };
  const onClickAddToDoBtn = () => {
    setToDos(current => 
      produce(current,(draft) => {
        const newToDo : ItoDo = {id:Date.now(),text:"여기를 수정해주세요",category:Categories.미완}
        draft[Categories.미완].push(newToDo);
        return draft;
      })
    )
  }
  // downlaod ""
    useEffect(()=> {
      setToDos(current => 
        produce(current,(draft)=>{
          for (let key in toDos){
            let stored = JSON.parse(localStorage.getItem(key) as string);
            draft[key] = stored;
          }
          return draft;
        })
      )
    },[])
  // upload toDos on localStorage
    useEffect(()=> {
      for (let key in toDos) {
        let toDo = toDos[key];
        localStorage.setItem(key,JSON.stringify(toDo));
      }
    },[toDos])


  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
          <Wrapper>
          {Object.keys(toDos).map(droppableId => 
              <DroppableCard key = {droppableId} droppableId = {droppableId as Categories}></DroppableCard>  
          )}
          </Wrapper>
      </DragDropContext>
      <AddToDoBtn onClick={onClickAddToDoBtn}>+</AddToDoBtn>
    </>
  );
}

