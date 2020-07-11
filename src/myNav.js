import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


export default class myNav extends React.Component{


constructor(props) {
    super(props);
  
    }

render(){

    

return(

  <div>
    <h1> Todo List</h1>
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>@</InputGroupText>
    </InputGroupAddon>
    <Input placeholder="username" />
  </InputGroup>
  <br />
  
</div>

   

   
)

};

}
