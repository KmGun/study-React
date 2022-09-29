import { Categories, ItoDo } from "../atom";
import { toDoListAtom } from "../atom";
import { useRecoilState } from "recoil";

export default function ToDo({id,category,text} : ItoDo){
    const [toDoList,setToDoList] = useRecoilState(toDoListAtom);
    const onClickBtn = (newCategory : ItoDo["category"], e :React.MouseEvent<HTMLButtonElement>)=> {
        const targetIndex = toDoList.findIndex(toDo=> toDo.id === Number(e.currentTarget.parentElement?.id))
        const oldToDo = toDoList.filter(toDo => toDo.id === Number(e.currentTarget.parentElement?.id))[0]
        setToDoList(oldToDoList => 
            [...oldToDoList.slice(0,targetIndex),{text:oldToDo.text,id:oldToDo.id,category:newCategory},...oldToDoList.slice(targetIndex+1)]    
        )
    }
    return(

    <li key={id} id={String(id)}>
        {text}
        {category!=="미완" && <button onClick={(e)=>onClickBtn(Categories.미완,e)}>미완</button>}
        {category!=="하는중" && <button onClick={(e)=>onClickBtn(Categories.하는중,e)}>하는중</button>}
        {category!=="완료" && <button onClick={(e)=>onClickBtn(Categories.완료,e)}>완료</button>}
    </li>

    )
};