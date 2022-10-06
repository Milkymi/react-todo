import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";


function App() {
  const [todos, setTodo] = useState([
    {
      text: 'buy smth',
      favorite: true,
    },
    {
      text: 'buy apple',
      favorite: false,
    },
    {
      text: 'buy lipstick',
      favorite: true,
    },
    
  ]
  );
    const deleteTodo = (indexOfRemove) => {
      const filtered = todos.filter((todo, index) => {
        if(index === indexOfRemove){
          return false;
        }
        return true;
      });
      setTodo(filtered);
    };
    const makeFavorite = (i) => {
      const newTodos = todos.map((item, index)=>{
        if(i === index){
          return {
            ...item, 
            favorite: !item.favorite
          };
        }
        return item;
      });
      setTodo(newTodos);
    };
    const [text, setText] = useState('');
    const addTodo = () =>{
      setTodo( [ {
        text: text,
        favorite: false
      },
        ...todos
    ]);
    setText('');
    }; 
  return (
    <div className="App">
      <Header />
      <Form text = {text} setText = {setText} addTodo = {addTodo}/>
      <Todos todos ={todos} makeFavorite= {makeFavorite} deleteTodo = {deleteTodo}/>
    </div>
  );
}

export default App;
