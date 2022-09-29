import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryStateAtom, toDoListAtom } from "../atom";
import {ItoDo} from "../atom";
import {useForm} from "react-hook-form";


export default function CreateForm(){
  const {register,handleSubmit,watch,setError,formState : {errors},setValue} = useForm<ItoDo>();
  const setToDoList = useSetRecoilState(toDoListAtom);
  const categoryState = useRecoilValue(categoryStateAtom);

  const onValid = (data : ItoDo)=> {
    setToDoList(prev => [...prev,{text : data.text, id: Date.now(),category : categoryState as ItoDo["category"]}])
    setValue("text","");
  }
    return (
        <form onSubmit={handleSubmit(onValid)}>
            <input type="text" {...register('text',{required : true})}/>
            <button>Add</button>
        </form>
    );
}

