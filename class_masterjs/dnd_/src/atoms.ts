import {atom,selector} from "recoil";

export enum Categories {
    "미완" = "미완",
    "완료" = "완료",
    "진행중" = "진행중",
}

interface ItoDo {
    id:number;
    text:string;
    category:Categories
}

export interface ItoDos {
    [keys:string] : ItoDo[];
}

export const toDosAtom = atom<ItoDos>({
    key : "toDos",
    default : {
        미완 : [{id:1,text:"hi",category:Categories.미완},{id:2,text:"hi2",category:Categories.미완},{id:1.5,text:"hi1.5",category:Categories.미완}],
        완료 : [{id:3,text:"hi3",category:Categories.완료},{id:4,text:"hi4",category:Categories.완료}],
        진행중 : [{id:5,text:"hi5",category:Categories.진행중},{id:6,text:"hi6",category:Categories.진행중}],
    }
})



export const toDosSelectorComplete = selector({
    key:"toDoSelectorComplete",
    get:({get}) => {
        const toDos = get(toDosAtom);
        return toDos[Categories.완료]
    }
})
export const toDosSelectorDoing = selector({
    key:"toDoSelectorDoing",
    get:({get}) => {
        const toDos = get(toDosAtom);
        return toDos[Categories.진행중]
    }
})
export const toDosSelectorUnComplete = selector({
    key:"toDoSelectorUnComplete",
    get:({get}) => {
        const toDos = get(toDosAtom);
        return toDos[Categories.미완]
    }
})
