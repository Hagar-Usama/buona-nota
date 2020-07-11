
import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Ticket from './ticket'


const getStatus = ({status} ) => 
(status ? "Done" : "Complete me!");


class App extends Component {

  constructor(props){
    super(props);
    this.state = {todos: []};
    this.deleteNote = this.deleteNote.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  deleteNote(id){

    let filtered = this.state.todos.filter(it => it.id !== id);
    this.setState({todos: filtered});

  }

  handleEdit(id, message){
   console.log("edit from App");

  }
 handleDelete(id){

    console.log("Hello from App");
    this.deleteNote(id)
  }

 
  componentDidMount() {
    document.title = "Buoana Nota"
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log("todos in mount")
      console.log(this.state.todos)
      let filtered = this.state.todos.filter(it => it.id > 150);
      console.log(filtered)
    })
    .catch(console.log)
  }

 render() {
    
  return (
     <div className="container" >
       
       
     
     <Row>
      {this.state.todos.map((todo) => (

        <Ticket title={todo.title} status= {getStatus(todo.completed)} id={todo.id}  deleteMethod={this.handleDelete} editMethod={this.handleEdit}> </Ticket>

                
      ))}
      
      </Row>
      
     </div>
  );
}

}

export default App;
