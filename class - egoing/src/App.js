import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props){
  return (
    <header onClick={function(event){
      event.preventDefault();
      props.onClickFunc();
    }}>{props.title}</header>
  )
}

function Navigator(props){
  let list = [];
  for (let i=0;i<props.data.length;i++){
    let dat = props.data[i]
    list.push(
      <li key={dat.id}>
        <a href={"/read/"+dat.id} onClick={function(event){
          event.preventDefault();
          props.onClickFunc(dat.id);
        }}>{dat.title}</a>
      </li>
    )
  }
  return (
    <ol>
      {list}
    </ol>
  )
}

function Article(props){
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </article>
  )
}

function Create(props){
  return (
    <article>
      <form onSubmit={function(event){
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onClickFunc(title,body);
        }}>
        <p><input type="text" name='title' /></p>
        <p><textarea name="body" id="" cols="30" rows="10"></textarea></p>
        <p><input type="submit" value="create"/></p>
      </form>
    </article>
  )
}

function Update(props){
  const [title,setTitle] = useState(props.title);
  const [body,setBody] = useState(props.body);
  return(
    <article>
      <form onSubmit={function(event){
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onClickFunc(title,body);
        }}>
        <p><input type="text" name='title' value={title} onChange={function(event){
          event.preventDefault();
          setTitle(event.target.value);
        }} /></p>
        <p><textarea name="body" id="" cols="30" rows="10" value={body} onChange={function(event){
          event.preventDefault();
          setBody(event.target.value);
        }}></textarea></p>
        <p><input type="submit" value="update"/></p>
      </form>
    </article>
  )
}


function App() {
//states
  const [data,setData] = useState([
    {id:1,title:"html",body:"html is ..."},
    {id:2,title:"css",body:"css is ..."},
    {id:3,title:"javascript",body:"javascript is ..."}
  ]);
  const [id,setId] = useState(null);
  const [nextId,setNextId] = useState(4);
  const [mode,setMode] = useState('MAIN');
//
  let buttonByPage = null;
  let content = null;

//mode 
  if (mode === 'MAIN'){
    content = <Article title = "MAIN" body = "BODY"></Article>
  } else if (mode === "READ"){
    // set content on READ mode
    let title,body = null;
    for (let i =0; i<data.length;i++){
      if (id === data[i].id){
        title = data[i].title;
        body = data[i].body;
      }
    }
    content = <Article title = {title} body = {body}></Article>
    buttonByPage = 
    <>
      <li>
        <a href="/update" onClick = {function(event){
          event.preventDefault();
          setMode('UPDATE')
        }}>UPDATE</a>;
        <a href="/delete" onClick = {function(event){
          event.preventDefault();
           const newData = [];
           let k = 1;
           for (let i=0;i<data.length;i++){
             if (data[i].id !== id){
               newData.push({id:k,title:data[i].title,body:data[i].body})
               k++;
             }
           }
           setData(newData);
           setMode('MAIN');
        }}>DELETE</a>
      </li>
    </>
  } else if (mode === "CREATE"){
    content = <Create onClickFunc={function(_title,_body){
      const newData = [...data];
      newData.push({id:nextId,title:_title,body:_body});
      setData(newData);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  } else if (mode === "UPDATE"){
    // find current page data
    let title,body = null;
    for (let i =0; i<data.length;i++){
      if (id === data[i].id){
        title = data[i].title;
        body = data[i].body;
      }
    }
    content = <Update title = {title} body = {body} onClickFunc = {function(_title,_body){
      const newData = [...data];
      const newDat = {id:id,title:_title,body:_body};
      for (let i=0;i<data.length;i++){
        if (data[i].id === id){
          newData[i] =newDat;
          break;
        }
      }
      setData(newData);
      setMode('READ');
    }}></Update>
  }
//
  return (
    <div className="App">
      <Header title="WEB" onClickFunc={function(){
        setMode('MAIN')
      }}></Header>
      <Navigator data={data} onClickFunc={function(_id){
        setMode('READ')
        setId(_id)
      }}></Navigator>
      {content}
      <a href="/create" onClick = {function(event){
        event.preventDefault();
        setMode('CREATE')
      }}>CREATE</a>
      {buttonByPage}
    </div>
  );
}

export default App;
