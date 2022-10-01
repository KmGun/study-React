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

interface ItoDos {
    미완:ItoDo[];
    완료:ItoDo[];
    진행중:ItoDo[];
}

export const toDosAtom = atom<ItoDos>({
    key : "toDos",
    default : {
        미완 : [{id:1,text:"hi",category:Categories.미완},{id:2,text:"hi2",category:Categories.미완}],
        완료 : [],
        진행중 : [],
    }
})

