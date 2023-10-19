import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Popup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else {
            setDescription(value);
        }
    };

    const handleSave = (e) => {
        e.preventDefault(); // Preventing default form submission behavior

        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        save(taskObj);
    };

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Task</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSave}>
                        <div className='form-group px-3'>
                            <label className='text-danger'>Name task</label>
                            <input
                                type="text"
                                placeholder='name task'
                                className='form-control'
                                value={taskName}
                                onChange={handleChange}
                                name="taskName"
                            />
                        </div>
                        <div className='form-group px-3'>
                            <label className='mt-3 text-danger'>Detail task</label> {/* Fixed the label typo */}
                            <textarea
                                placeholder='Detail task'
                                rows={"5"}
                                className='form-control'
                                value={description}
                                onChange={handleChange}
                                name="description"
                            ></textarea>
                        </div>
                        <ModalFooter>
                            <Button color="primary" onClick={handleSave}>
                                Create
                            </Button>{' '}
                            <Button color="secondary" onClick={toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Popup;


// import React, { useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


// const Popup = ({modal , toggle , save }) => {
//     const [taskName, setTaskName ] = useState('');
//     const [description, setDescription] = useState('');

//     const handelchange= (e) => {
//         // const name = e.target.name
//         // const value = e.target.value

//         const {name , value} =e.target
//         if(name === "taskName"){
//             setTaskName(value)
//         }else{
//             setDescription(value)
//         }

//     }
//     const handelsave= (e) => {
//         e.preventDefault(); // Preventing default

//         let taskObj = {}
//         taskObj["Name"] = taskName
//         taskObj["Description"] = description
//         save(taskObj)
    
        

//     }



//     return (
//         <div >  
//         <Modal isOpen={modal} toggle={toggle} >   
//             <ModalHeader toggle={toggle} >new task</ModalHeader>
//             <ModalBody>
//                     <form>
//                         <div className=' form-group px-3 '>
//                             <label className=' text-danger '>Name task</label>
//                             <input type="text" placeholder='name task'  className=' form-control' value = {taskName} onChange = {handelchange} name = "taskName" />

//                         </div>
//                         <div className=' form-group px-3 '>
//                             <label className='mt-3 text-danger '>Deatai task</label>
//                             <textarea placeholder='Deatai task' rows={"5"} className=' form-control' value={description} onChange={handelchange} name="description" ></textarea>

//                         </div>
//                     </form>
//             </ModalBody>
//             <ModalFooter>
//             <Button color="primary" onClick={handelsave}>
//                 Create 
//             </Button>{' '}
//             <Button color="secondary" onClick={toggle}>
//                 Cancel
//             </Button>
//             </ModalFooter>
      
//       </Modal>
      

//         </div>
//     );
// };

// export default Popup;