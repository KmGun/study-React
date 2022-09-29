import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {ItoDo, toDoListAtom, toDoSelectorAtom} from "../atom";
import ToDo from "./ToDo";



function ToDoList (){
    const toDoList = useRecoilValue(toDoSelectorAtom);
    console.log(toDoList)
    return (
        <ul>
            {toDoList.map(toDo => 
                <ToDo key = {toDo.id} id={toDo.id} category={toDo.category} text={toDo.text} ></ToDo>
            )}
        </ul>
    )
}
export default ToDoList;