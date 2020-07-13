import React from 'react';
import './App.css';

import {
  Card, CardBody,
  CardSubtitle, Col, Button, Input
} from 'reactstrap'



export default class Ticket extends React.Component {


  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.updateMsg = this.updateMsg.bind(this);
    this.closeClick = this.closeClick.bind(this);
    this.state = { message: "", disabled: true }
    

  }


  handleDeleteClick() {

    this.props.deleteMethod(this.props.id);

  }

  handleEditClick() {
    this.setState({ message: this.props.title })
    this.setState({ disabled: !this.state.disabled });
    if (this.state.disabled === true) {
      this.setState({ disabled: false })

    } else {

      this.props.editMethod(this.props.id, this.state.message)
      console.log("task edited")

    }


  }

  updateMsg(event) {

    this.setState({ message: event.target.value });

    //this.state.message = event.target.value;
  }

  closeClick() {

    this.setState({ disabled: !this.state.disabled })
  }

  render() {


    return (

      <Col sm="4">

        &nbsp;
        <Card className="Ticket" >
          <CardBody  >

            <Button close aria-label="Cancel" onClick={this.closeClick}>

              <span aria-hidden>&ndash;</span>
            </Button>


            <CardSubtitle active>{this.props.status}</CardSubtitle>
            <hr></hr>
            <Input className="ed" type="textarea" rows={5}
              cols={5} placeholder={this.props.title} disabled={(this.state.disabled) ? "disabled" : ""} onChange={this.updateMsg} />
            <hr />

            <Button color='primary' onClick={this.handleEditClick} >Edit</Button>

              &nbsp;
              <Button color='danger' onClick={this.handleDeleteClick}>Delete</Button>


          </CardBody>

        </Card>


        <hr />
       &nbsp;
      </Col>




    )

  };

}