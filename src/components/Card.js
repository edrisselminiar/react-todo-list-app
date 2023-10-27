import React, { useState } from 'react';
import EditPopup from '../modal/EditPopup';


const Card = ({taskObj , index , deleteTask , updateListArray }) => {
    const [modal, setModal] =useState(false);
     const colors = [ 
        {
            primaryColor : "#B6F640",
            secondaryColor : "#8CCDB0",
    
        },
        {
            primaryColor : "#8CCDB0",
            secondaryColor : "#E99376",
    
        },
        {
            primaryColor : "#B6F640",
            secondaryColor : "#8CCDB0",
    
        },
        {
            primaryColor : "#E99376",
            secondaryColor : "#D8A167",
    
        },
        {
            primaryColor : "#E99376",
            secondaryColor : "#D8A167",
    
        }
      ]
      const handleDelete = () => {
        deleteTask(index )

      }
    
    const toggle = () =>{
      setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj , index)

    }
    
    return (
        
        <div>
            <div>
           

           <div class="col">
           <div class="card">
               {/* <img src="https://via.placeholder.  com/300" class="card-img-top" alt="..."> */}
               <div class="card-body" index={index}> {/*props */}
                   <h5 class="card-title" style={{"color" : colors[index%5].secondaryColor}}>{taskObj.Name}</h5>
                   <p className="overflw card-text">{taskObj.Description}</p>
                   <div>
                        <i class="far fa-edit" style={{"color" : colors[index%5].secondaryColor,"margin" : "10px"}} onClick={() => setModal(true)}></i>
                        <i class="fas fa-trash-alt" style={{"color" : colors[index%5].primaryColor ,"margin" : "10px"}} onClick={handleDelete}></i>
                   </div>
               </div>
           </div>
           </div>
       </div>
       <EditPopup modal={modal} toggle={toggle} updateTask={updateTask} taskObj ={taskObj} />
           
        </div>
           

        
         
    );
};

export default Card;