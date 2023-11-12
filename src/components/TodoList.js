
import React, { useEffect, useState } from 'react';
import Popup from '../modal/Popup';
import Card from './Card';
import logo from './../logo.svg';

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [tasklist, setTasklist] = useState([]);



  useEffect(() => {
    let arr = localStorage.getItem('taskList');
    if (arr) {
      let obj = JSON.parse(arr);
      setTasklist(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = tasklist
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTasklist(tempList)
    window.location.reload()


  }

  const updateListArray = (obj , index) => {
    let tempList = tasklist
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTasklist(tempList)
    window.location.reload()

  }





  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = [...tasklist]; // Creating a new array to avoid direct mutation
    tempList.push(taskObj);
    //localstorage
    localStorage.setItem('taskList', JSON.stringify(tempList)); // consistent key
    setTasklist(tempList); // setting updated list to state
    setModal(false);
  };

  return (
    <div className='todo'>
      <div className="header text-center ">
        <div className='logo'>
          <img src={logo} alt="Logo" />   
        </div>

        <div className='butontask'>
          <button className="btn btn-info" onClick={() => setModal(true)}>
            New task
          </button>  
        </div>

      
    
      </div>


      <div className="container">
        <div class="row row-cols-1 row-cols-md-4 g-4">

        {tasklist.map((obj, index) => 
            <Card taskObj = {obj} index = {index} deleteTask ={deleteTask} updateListArray={updateListArray} />
        
        )}
      </div>
         
      </div>




        
         
           
 







      <Popup toggle={toggle} modal={modal} save={saveTask} />
    </div>
  );
};

export default TodoList;


