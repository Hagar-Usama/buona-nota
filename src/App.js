
import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Ticket from './ticket'
import Head from './head'
import './App.css';
import axios from 'axios';

const getStatus = ({status} ) => 
(status ? "Done" : "Complete me!");


class App extends Component {

  constructor(props){
    super(props);
    this.state = {todos: [] , id: 0};
    this.deleteNote = this.deleteNote.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.incrementId = this.incrementId.bind(this);
  }

  deleteNote(id){

    let filtered = this.state.todos.filter(it => it.id !== id);
    this.setState({todos: filtered});

  }

  handleEdit(id, message){
   let elementsIndex = (this.state.todos.findIndex(element => element.id === id ))
   let newArray = [...this.state.todos]
   newArray[elementsIndex] = {...newArray[elementsIndex], title: message}
    
    this.setState({
      todos: newArray,
      });
   


  }

 
  getId(){
   
    if (this.state.id === 0){

      //this.setState({id: this.state.todos[2].id})
    //this.state.id =  this.state.todos[this.state.todos.length-1].id
    this.setState({id: this.state.todos[this.state.todos.length-1].id});

    }
    

  }

  incrementId(){

    //this.state.id++;
    this.setState({id: this.state.id + 1});
    
  }
 handleDelete(id){

    
    this.deleteNote(id)
  }

  handleAdd(message){

    this.getId();
    this.incrementId();
    console.log("Id ")
    console.log(this.state.id)
    console.log("Hello from App");
    let msg = {

      userId: 1,
      id:this.state.id,
      title: message,
      completed: false
    };

    this.addNote(msg)

  

  }

  addNote(taskObj){

    this.setState(
      { todos: [taskObj, ...this.state.todos] });

  }
 
  componentDidMount() {
    document.title = "Buoana Nota"
    
    // fetch('http://jsonplaceholder.typicode.com/todos')
    // .then(result => result.json())
    // .then((data) => {
    //   this.setState({ todos: data })
    // })
    // .catch(console.log)

    

  const url = 'http://jsonplaceholder.typicode.com/todos'
  //axios.get(url).then(response => console.log(response));
 

  axios.get(url).then((repos) => {
    const data = repos.data;
   
    this.setState({ todos: data })
  });
   }
   
   
   render() {

  return (
     <div className= "App">
      
      <h1> Getting started with React testing library</h1>
     <Head className="navbar" addMethod={this.handleAdd}/>
     <hr/>
    
     <Row>
      {this.state.todos.map((todo) => (

        <Ticket  title={todo.title} status= {getStatus(todo.completed)} id={todo.id}  deleteMethod={this.handleDelete} editMethod={this.handleEdit} addMethond={this.handleAdd}/>
        
                
      ))}
      
      </Row>
      
     </div>
  );
}

}

export default App;
