import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDosAtom, Categories } from "./atoms";
import DroppableCard from "./components/DroppableCard";


export default function App() {
  const [toDos,setToDos] = useRecoilState(toDosAtom);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => { 
    if (!destination) return; 
    // setToDos(prev => {
    //   const oldToDos = [...prev];
    //   const oldToDo = oldToDos.splice(source.index,1)[0];
    //   oldToDos.splice(destination.index,0,oldToDo);
    //   const newToDos = oldToDos;
    //   return newToDos
    // })
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        {Object.keys(toDos).map(droppableId => 
          <DroppableCard key = {droppableId} droppableId = {droppableId as Categories}></DroppableCard>  
        )}
      </div>
    </DragDropContext>
  );
}

