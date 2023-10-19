import React from 'react';

const Card = ({taskObj , index }) => {
    const colors = [
        {
            primaryColor : "#A5AD9F",
            secondaryColor : "#40414F",
    
        },
        {
            primaryColor : "#FFE4C4",
            secondaryColor : "#A5AD9F",
    
        },
        {
            primaryColor : "#7EE765",
            secondaryColor : "#7EE765",
    
        },
        {
            primaryColor : "#000000",
            secondaryColor : "#FFE4C4",
    
        },
        {
            primaryColor : "#000000",
            secondaryColor : "#40414F",
    
        }
      ]
    
    return (
        <div>
            <div>
           

           <div class="col">
           <div class="card">
               {/* <img src="https://via.placeholder.  com/300" class="card-img-top" alt="..."> */}
               <div class="card-body" index={index}> {/*props */}
                   <h5 class="card-title">{taskObj.Name}</h5>
                   <p class="card-text">{taskObj.Description}</p>
                   <div>
                        <i class="far fa-edit" style={{"color" : "#BC4C24","margin" : "10px"}}></i>
                        <i class="fas fa-trash-alt" style={{"color" : colors[index%5].primaryColor ,"margin" : "10px"}}></i>
                   </div>
               </div>
           </div>
           </div>
       </div>
            
        </div>
    );
};

export default Card;