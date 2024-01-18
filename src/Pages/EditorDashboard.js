import React from 'react';
import { useState } from 'react';
import Cards from '../Components/Cards';
import { FaSquarePlus } from "react-icons/fa6";
import CreateTask from '../Components/CreateTask';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import Youtubers from '../Components/Youtubers';

export const EditorDashboard = () => {
  const [editorCategory, setEditorCategory] = useState('All');
  let [count, setCount] = useState(0);
  const [showTask, setShowTask] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Printing inside useEffect")
    console.log(showTask);
    console.log(count);
  },[])

  const createHandler = () => {
    // console.log("Printing in starting of createHandler");
    // console.log(showTask);
    // console.log(count);
    setShowTask(true);
    setCount(++count);
    // console.log("Printing in ending of createHandler");
    // console.log(count);
    // console.log(showTask);
    navigate('/EditorDashboard');
  }

  return (
    <div className='text-white flex justify-center items-center h-[80vh] mt-[100px] w-full '>
      <div className='border-r border-white w-8/12 h-full '> 
        {
          !showTask && 
          (
            <div className='gap-x-16 flex flex-row justify-center mt-[20px] '>
              <button onClick={() => setEditorCategory('All')} className='bg-white p-[3px] rounded-md text-black text-md w-[100px] gap-x-4'>All</button>
              <button onClick={() => setEditorCategory('Assigned')} className='bg-white p-[3px] rounded-md text-black text-md w-[100px] gap-x-4'>Assigned</button>
              <button onClick={() => setEditorCategory('Done')} className='bg-white p-[3px] rounded-md text-black text-md w-[100px] gap-x-4'>Done</button>
            </div>
          )
        }
        <div className='flex justify-center items-center h-[10vh] mt-[200px] w-8/12 mx-auto '>
          {
            (
              count === 0 ?(
              <div className='text-3xl flex gap-x-4 relative justify-center space-x-2 items-center '>
                  No tasks yet 
                  
                </div>
              ): 
              showTask ? (<CreateTask setShowTask={setShowTask}></CreateTask>)  : (<Cards></Cards>)
            )
          }
        </div>
      </div>
      <div className='border-left border-white w-4/12 h-full'>
        {/* <Youtubers></Youtubers> */}
      </div>
    </div>
  )
}


