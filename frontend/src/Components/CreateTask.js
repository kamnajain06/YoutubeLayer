import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {

    const navigate = useNavigate();
    
    const [taskData, setTaskData]= useState({
        fileUrl: '',
        vidName: "",
        category: "",
        vidDesc: ""
    });

    const changeHandler = (event) => {
        setTaskData((prevData)=> (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(taskData);
        toast.success("Task Created");
        navigate('/dashboard');
        // setShowTask(false);
    }

    return (
        <div className='text-black border border-white p-[20px] w-5/8' >
            <form onSubmit={submitHandler}>
                <div className='flex bg-red'>
                    <div className='flex flex-col gap-y-6'>
                        <div className='text-white'>
                            <label className='text-white' htmlFor='videoFile'>Upload video: </label>
                            <input className='mt-[7px] rounded-md p-[4px]'
                            required
                            type='file' 
                            name='fileUrl' 
                            id='fileUrl'
                            value={taskData.fileUrl}
                            onChange={changeHandler}></input>
                        </div>
                        <div>
                            <label className='text-white ' htmlFor='videoName'>Video Name: </label>
                            <br></br>
                            <input className='mt-[7px] rounded-md p-[6px]'
                            required
                            type='text' 
                            placeholder='Enter video name ' 
                            value={taskData.vidName} 
                            onChange={changeHandler}
                            id='vidName'
                            name='vidName'
                            ></input>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='mb-[17px]'>
                            <label className='text-white ' htmlFor='category'>Category:  </label>
                            <select 
                                name='category'
                                value={taskData.category}
                                onChange={changeHandler} 
                                id='category' 
                                className='rounded-md p-[5px] ml-[6px]'>
                                <option value='All'>All</option>
                                <option value='Gaming'>Gaming</option>
                                <option value='Food Vlogs'>Food Vlogs</option>                                
                                <option value='Technology'>Technology</option>                                
                                <option value='Education'>Education</option>                                
                            </select>
                        </div>
                        <div>
                            <label 
                            className='text-white '
                            htmlFor="vidDesc">Description:</label>
                            <textarea className='mt-[7px] rounded-md p-[6px]'
                            name='vidDesc'
                            id='vidDesc' 
                            value={taskData.vidDesc} 
                            rows="4" cols="30"
                            onChange={changeHandler}
                            placeholder='Enter video Description here'></textarea>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className='text-black bg-white p-[4px] rounded-sm mt-[15px]'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask;