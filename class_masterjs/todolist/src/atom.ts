import {atom , selector} from "recoil"
export enum Categories {"미완"="미완","하는중"="하는중","완료"="완료"}

export interface ItoDo {
    text : string;
    id : number;
    category : Categories
  }

export const isDarkAtom = atom({
    key: "isDark", 
    default : false, 
})

export const toDoListAtom = atom<ItoDo[]>({
    key : "toDoList",
    default : [],
})

export const categoryStateAtom = atom({
    key:"categoryState",
    default: Categories.미완,
})



export const toDoSelectorAtom = selector({
    key : "toDoSelector",
    get : ({get}) => {
        const categoryState = get(categoryStateAtom);
        const toDoList = get(toDoListAtom);
        return toDoList.filter(toDo => toDo.category === categoryState);
    }
})