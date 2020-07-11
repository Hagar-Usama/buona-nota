import axios from 'axios';

import React, { Component } from 'react';



import { Card , CardText, CardBody,
  CardTitle, CardSubtitle,Row, Col, Button } from 'reactstrap'



import Ticket from './ticket'

const getStatus = ({status} ) => 
(status ? "Done" : "Complete me!");


class App extends Component {
  state = {
    todos: []
  }
  
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }


  //<Ticket title="todo.title" status='todo.completed'></Ticket>

 render() {
    
  return (
     <div className="container" >
     
     <Row>
      {this.state.todos.map((todo) => (

        <Ticket title={todo.title} status= {getStatus(todo.completed)} ></Ticket>

                
      ))}
      
      </Row>
     </div>
  );
}

}

export default App;
