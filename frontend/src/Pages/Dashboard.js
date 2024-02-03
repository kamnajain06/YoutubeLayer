import React from "react";
import { useState } from "react";
import Cards from "../Components/Cards";
import { FaSquarePlus } from "react-icons/fa6";
import CreateTask from "../Components/CreateTask";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Editor from "../Components/Editor";
import { useToken } from "../context/tokenContext";

export const Dashboard = (props) => {

  const [dashPage, setDashPage] = useState("All");

  const setISLoggedIn = props.setISLoggedIn;
  const [category, setCategory] = useState("All");
  let [count, setCount] = useState(0);
  const [showTask, setShowTask] = useState(false);
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState({ allEditor: [] });
  useEffect(() => {}, []);

  useEffect(() => {
    const savedAccount = localStorage.getItem("accountType");
    if (savedAccount === "YouTuber") {
      setISLoggedIn(true);
      navigate("/dashboard");
    }
  }, []);

  const createHandler = () => {
    console.log("click to ");
    console.log(showTask);
    setShowTask(true);
    console.log(showTask);
    setCount(++count);
    navigate("/dashboard");
  };

  const callFun = async (req, res) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getEdAllDetail`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setFetchData(result);
    } catch (err) {
      console.log(err);
    }
  };

  const setEditorPage =(event)=>{
    console.log(event.target.value);
    setDashPage(event.target.value);
}


  useEffect(() => {
    callFun();
  }, []);

  return (
    <div className=" text-white flex justify-center items-center h-[80vh] mt-[100px] w-full px-[20px]">
      <div className="w-10/12 h-full ">
        {
          <div className="gap-x-16 flex flex-row justify-center mt-[20px] ">
            {/* <button
              onClick={() => setCategory("All")}
              className="bg-white p-[3px] rounded-md text-black text-md w-[100px] gap-x-4"
            >
              All
            </button>
            <button
              onClick={() => setCategory("Pending")}
              className="bg-white p-[3px] rounded-md text-black text-md w-[100px] gap-x-4"
            >
              Requested
            </button>
            <button
              onClick={() => setCategory("Pending")}
              className="bg-white p-[3px] rounded-md text-black text-md w-[100px] gap-x-4"
            >
              Assigned
            </button>
            <button
              onClick={() => setCategory("Done")}
              className="bg-white p-[3px] rounded-md text-black text-md w-[100px] gap-x-4"
            >
              Done
            </button> */}
            <button onClick={setEditorPage} value="All" className='bg-white rounded-md text-black w-[50px] h-[30px]'>All</button>
              <button onClick={setEditorPage} value="Requested" className='bg-white rounded-md text-black px-4 h-[30px]'>Requested</button>
              <button onClick={setEditorPage} value="Assigned" className='bg-white p-[3px] rounded-md text-black text-md w-[100px] h-[30px]'>Assigned</button>
              <button onClick={setEditorPage} value="Done" className='bg-white p-[3px] rounded-md text-black text-md w-[80px] h-[30px]'>Done</button>
            <div className="flex gap-2">
              {" "}
              Create Task
              <button
                onClick={createHandler}
                className="text-3xl px-1 cursor-pointer"
              >
                <FaSquarePlus />
              </button>
            </div>
          </div>
        }
        {/* <div className="flex justify-center items-center h-full  mt-[10px] w-full mx-auto px-5 ">
          {count === 0 ? (
            <div className="text-3xl flex gap-x-4 relative justify-center space-x-2 items-center ">
              Create Your Task Here...
              <button
                onClick={createHandler}
                className="text-3xl px-1 cursor-pointer"
              >
                <FaSquarePlus />
              </button>
            </div>
          ) : showTask ? (
            <CreateTask setShowTask={setShowTask}></CreateTask>
          ) : (
            <Cards></Cards>
          )}
        </div> */}

        {
          <div className="flex justify-center items-center h-full  mt-[10px] w-full mx-auto px-5 ">
            {showTask ? (
              <CreateTask setShowTask={setShowTask}></CreateTask>
            ) : (
              <Cards dashPage={dashPage}></Cards>
            )}
          </div>
        }
      </div>
      <div className="border-left border-white w-4/12 h-full">
        <div className=" h-full w-[85%] mx-auto flex-col overflow-y-scroll">
          {fetchData?.allEditor.map((data, index) => {
            return <Editor data={data} key={index}></Editor>;
          })}
        </div>
      </div>
    </div>
  );
};
