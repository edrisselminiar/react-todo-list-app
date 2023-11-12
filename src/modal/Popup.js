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

        resetForm();
    };

    const resetForm = () => {
        setTaskName('');
        setDescription('');
    };


    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Task</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSave}>
                        <div className='form-group px-3'>
                            <label className='text-info'>Name task</label>
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
                            <label className='mt-3 text-info'>Detail task</label> {/* Fixed the label typo */}
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