import React, { useState } from 'react';
import './App.css';

import { Card , CardBody,
  CardTitle, CardSubtitle, Col, Button, Input } from 'reactstrap'



export default class Ticket extends React.Component{


    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.updateMsg = this.updateMsg.bind(this);
        this.closeClick = this.closeClick.bind(this);
        this.state = {message:"hoi", disabled: false}
        console.log(props)

             }
    

   handleDeleteClick() {
      
      this.props.deleteMethod(this.props.id);

   }

   handleEditClick(){

    this.setState({disabled: !this.state.disabled})
    if (this.state.disabled === true){
      this.setState({disabled:false})

    }else{

      this.props.editMethod(this.props.id, this.state.message)


    }


   }

   updateMsg(event){

    this.state.message = event.target.value;
   }

   closeClick(){

    this.setState({disabled: !this.state.disabled})
   }
    
    render(){
    
     
    return(
    
     <Col sm="3">
        <Card className = "Ticket" active >
            <CardBody >
             
              <Button close aria-label="Cancel" onClick={this.closeClick}>
                
              <span aria-hidden>&ndash;</span>
            </Button>


              <CardSubtitle active>{this.props.status}</CardSubtitle>
              <hr></hr>
              <Input className="ed"  type="textarea" rows={5}
          cols={5} placeholder={this.props.title}  disabled = {(this.state.disabled)? "disabled" : ""} onChange={this.updateMsg}/>
              <hr/>

              <Button  color='primary' onClick={this.handleEditClick} >Edit</Button>
              
              &nbsp;
              <Button color='danger' onClick={this.handleDeleteClick}>Delete</Button>
               &nbsp;

      
            </CardBody>
      
      </Card>


    
      </Col>
     
      

     
     )
    
    };
    
    }