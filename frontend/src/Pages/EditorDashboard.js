import React from "react";
import { useState } from "react";
import EdCards from "../Components/EdCards";
import { FaSquarePlus } from "react-icons/fa6";
import CreateTask from "../Components/CreateTask";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Editor from "../Components/Editor";
import AssignedPage from "./AssignedPage";

export const EditorDashboard = (props) => {
  const setISLoggedIn = props.setISLoggedIn;
  const [allpage, setAllPage] = useState(true);
  const [edPage, setEdPage] = useState("All");
  let [count, setCount] = useState(0);
  const [showTask, setShowTask] = useState(false);
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState({ allYoutuber: [] });
  const [category, setCategory] = useState("All");

  useEffect(() => {
    console.log(showTask);
    console.log(count);
  }, []);

  useEffect(() => {
    const savedAccount = localStorage.getItem("accountType");
    if (savedAccount === "Editor") {
      setISLoggedIn(true);
      navigate("/EditorDashboard");
    }
  }, []);

  const createHandler = () => {
    setShowTask(true);
    setCount(++count);
    navigate("/EditorDashboard");
  };

  const changeHandler = (event) => {
    event.preventDefault();
    // setCategory(event.target.value);
    localStorage.setItem("category", event.target.value);
    setCategory(localStorage.getItem("category"));
  };

  const setEditorPage = (event) => {
    setEdPage(event.target.value);
    event.target.value === "All"
      ? setAllPage(true)
      : setAllPage(false);
  };

  const callFun = async (req, res) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getYtAllDetail`,
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
      console.error(err);
    }
  };

  useEffect(() => {
    callFun();
    setCategory(localStorage.getItem("category"));
  }, []);
  // console.log("EdPage",edPage)

  return (
    <div>
      <div className="mt-24 border-solid border border-red-500">
        {!showTask && (
          <div className="gap-x-16 flex flex-row justify-center mt-[20px] ">
            <button
              onClick={setEditorPage}
              value="All"
              className="bg-white rounded-md text-black w-[50px] h-[30px]"
            >
              All
            </button>
            <button
              onClick={setEditorPage}
              value="Requested"
              className="bg-white rounded-md text-black px-4 h-[30px]"
            >
              Requested
            </button>
            <button
              onClick={setEditorPage}
              value="Assigned"
              className="bg-white p-[3px] rounded-md text-black text-md w-[100px] h-[30px]"
            >
              Assigned
            </button>
            <button
              onClick={setEditorPage}
              value="Done"
              className="bg-white p-[3px] rounded-md text-black text-md w-[80px] h-[30px]"
            >
              Done
            </button>
            <div className="mb-[17px]">
              <label className="text-white" htmlFor="category">
                Category:-{" "}
              </label>
              <select
                name="category"
                value={category}
                onChange={changeHandler}
                id="category"
                className="rounded-md p-[5px] ml-[6px] bg-transparent hover:border-solid border border-white "
              >
                <option value="All">All</option>
                <option value="Gaming">Gaming</option>
                <option value="Food Vlogs">Food Vlogs</option>
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className=" border-solid border border-red-500 text-white flex justify-center items-center h-[80vh] mt-[20px] w-full ">
        <div className="border-r border-white w-10/12 h-full ">
          <div className="flex justify-center items-center h-full w-full mx-auto">
            {count === 0 ? (
              <div className="flex justify-center items-center h-full w-full mx-auto px-5 ">
                <EdCards category={category} edPage={edPage}></EdCards>
              </div>
            ) : showTask ? (
              <CreateTask setShowTask={setShowTask}></CreateTask>
            ) : (
              <EdCards category={category}></EdCards>
            )}
          </div>
        </div>

        { allpage && (
          <div className="border-left border-white w-4/12 h-full">
            <div className=" h-full w-[85%] mx-auto flex-col overflow-y-scroll">
              {fetchData?.allYoutuber.map((data, index) => {
                return <Editor data={data} key={index}></Editor>;
              })}
            </div>
          </div>
         ) 
        //  : (
        //   <AssignedPage></AssignedPage>
        // )
      }
      </div>
    </div>
  );
};
