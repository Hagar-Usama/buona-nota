import React from 'react';
import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


export default class Head extends React.Component{

    constructor(props){

        super(props);
        this.state = {message : ""}
        console.log("Head props")
        console.log(props)
        this.handleMsg = this.handleMsg.bind(this)

    }

handleMsg(message){

    this.props.addMethod(this.state.message);
    console.log("add new task")


}
render(){

    return(

        <div>

        <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>+</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Add/Edit a Task" />
            <Button  color='warning' onClick={this.handleMsg}>Add</Button>
          </InputGroup>
          <br />

          
        
        
            </div>
            


    )
    


};



}