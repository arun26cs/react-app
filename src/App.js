import React,{Component} from 'react'; 
import './App.css';
import Person from './Person/Person'

class App extends Component{

  state={
    persons:[
      {name:'max',age:23},
      {name:'Arun1',age:34}
    ],
    newPerson:'Gooder'
  };

  nameHandler = () =>{
    this.setState({
      persons:[
        {name:'max!!',age:23},
        {name:'Arun1',age:34}
      ],
      newPerson:'GoodMillain'
    }); 
    console.log(this.state.newPerson);/*this is checking if the previous state is also maintained --> yes it is */
  }

  
   render(){
     return(
       <div className="App">
         <p>this is a para test from a class component of react</p>
         <h1>this is the heading component</h1>
         <button onClick={this.nameHandler}>Click here</button> 
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
         <Person name={this.state.newPerson} age="24"/> 
       </div>
     );
   }
}

export default App;
