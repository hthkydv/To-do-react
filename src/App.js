import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


function App() {
  let [todoli,settodoli]=useState([])
  
  


  let SaveTodoList=(event)=>{
    

    let toname=event.target.toname.value;
    if(!todoli.includes(toname)){
      let finalTodo=[...todoli,toname]
      NotificationManager.success('Task Added', )
      settodoli(finalTodo)

    }
    else{
      NotificationManager.error('Data already exist !')
    }
    event.preventDefault();


  }

  let list=todoli.map((value,index)=>{
    
    return(
      <div>
        <NotificationContainer/>
      <Todolistitem value={value} key={index} indexNumber={index} todoli={todoli}
      settodoli={settodoli}
      
      /></div>
    )

  })


 
  return (
    <div className='body'>
    <div >
      <h1 className='head'>Todo list</h1>
      <form onSubmit={SaveTodoList}>
        <input type='text' name='toname'/><button>Save</button>
      </form>

      <div className='outerDiv'>
      <ul>
      {list}
      </ul>
      </div>
      <h5 className='try'>.</h5>
      </div>


    </div>
    
  );
}

export default App;

function Todolistitem({value,indexNumber,todoli,settodoli}){
  let [statuts,setStatus]=useState(false)
  let deleteRow=()=>{
    let finalData=todoli.filter((v,i)=>i!=indexNumber)
    NotificationManager.success('Task compelted', 'Congrats !')
    settodoli(finalData)
  }
  let checkStatus=()=>{
    setStatus(!statuts)

  }
  return(
    <li className={(statuts)?'complete':''} onClick={checkStatus}> {indexNumber+1}.  {value}<span onClick={deleteRow}>&times;</span></li>
 )
}
