import {ThemeProvider} from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import ToDoList from "./components/ToDoList"
import CreateForm from "./components/CreateForm";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, categoryStateAtom, isDarkAtom, toDoListAtom } from "./atom";
import React from "react";


function App() {
  const [isDark,setIsDark] = useRecoilState(isDarkAtom);
  const toDoList = useRecoilValue(toDoListAtom);
  const [categoryState,setCategoryState] = useRecoilState(categoryStateAtom);
  const onInputSelect = (e :React.FormEvent<HTMLSelectElement>)=> {
    setCategoryState(e.currentTarget.value as any)
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CreateForm/>
      <select value={categoryState} onInput={onInputSelect}>
        <option value={Categories.미완}>미완</option>
        <option value={Categories.하는중}>하는중</option>
        <option value={Categories.완료}>완료</option>
      </select>
      <ToDoList/>
    </ThemeProvider>
  );
}

export default App;
