import React from 'react';

import { Card , CardBody,
  CardTitle, CardSubtitle, Col, Button } from 'reactstrap'



export default class Ticket extends React.Component{


    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        console.log(props)

             }
    

    handleDeleteClick() {
      
      this.props.deleteMethod(this.props.id);

   }

   handleEditClick(message){

    this.props.editMethod(this.props.id, message)

   }
    
    render(){
    
     
    return(
    

      <Col sm="3">
        <Card className = "Ticket" >
            <CardBody>
              <CardTitle>{this.props.title}</CardTitle>
              <CardSubtitle>{this.props.status}</CardSubtitle>
              <CardSubtitle>{this.props.id}</CardSubtitle>
              <hr></hr>
              <Button  color='primary'>Edit</Button>
              &nbsp;
              <Button color='danger' onClick={this.handleDeleteClick}>Delete</Button>
            </CardBody>
      
      </Card>
      &nbsp;
      </Col>

  
    
     
     )
    
    };
    
    }