import React from 'react';
import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


export default class Head extends React.Component{

    constructor(props){

        super(props);
        this.state = {message : ""}
        console.log("Head props")
        console.log(props)
        this.handleMsg = this.handleMsg.bind(this)
        this.updateMsg = this.updateMsg.bind(this)
        this.handleEdit = this.handleEdit.bind(this)

    }

handleMsg(message){

    this.props.addMethod(this.state.message);
    console.log("add new task");
    console.log(this.state.message)

}

updateMsg(event){
    console.log( event.target.value)
    //this.setState(this.state.message, event.target.value)
    this.state.message = event.target.value;
    
}

handleEdit(){
    console.log("handle Edit")
    
    //document.getElementById("ed").style.visibility = vis
    //console.log("handle Edit")

}


render(){

    return(

        <div>


        <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>+</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Add/Edit a Task"  onChange={this.updateMsg}/>
            <Button  color='warning' onClick={this.handleMsg}>Add</Button>
          </InputGroup>
          <br />
        
            </div>
            


    )
    


};



}