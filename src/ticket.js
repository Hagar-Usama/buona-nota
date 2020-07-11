import React from 'react';

import { Card , CardText, CardBody,
  CardTitle, CardSubtitle,Row, Col, Button } from 'reactstrap'



export default class Ticket extends React.Component{


    constructor(props) {
        super(props);
        console.log(props)
        
       
             }
    
     
    
    
    render(){
    
     
    return(
    

      <Col sm="3">
        <Card className = "Ticket" >
            <CardBody>
              <CardTitle>{this.props.title}</CardTitle>
              <CardSubtitle>{this.props.status}</CardSubtitle>
              <Button  color='primary'>Edit</Button>
              &nbsp;
              <Button color='danger'>Delete</Button>
            </CardBody>
      
      </Card>
      &nbsp;
      </Col>

  
    
     
     )
    
    };
    
    }