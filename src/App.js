import React,{Component, useState} from 'react'; 
import './App.css';
import Person from './Person/Person'

const App=()=>{

   const [personState,setPersonState] = useState({
    persons:[
      {name:'max',age:23},
      {name:'Arun1',age:34}
    ]
   });
   const [newPersonState,setNewPerson] = useState({
      newPerson:'Gooder'
   });
  var nameHandler = () =>{
    setPersonState({
      persons:[
        {name:'maxiiiiiiiiiiiiiiiiiiiii',age:23},
        {name:'Arun1',age:34}
      ]
    });
    setNewPerson({
      newPerson:'maxgoodperson'
    });
  }

     return(
       <div className="App">
         <p>this is a para test from a class component of react</p>
         <h1>this is the heading component</h1>
         <button onClick={nameHandler}>Click here</button> 
         <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
         <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
         <Person name={newPersonState.newPerson} age="24"/> 
       </div>
     );

}

export default App;
