import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const Cards = (props) => {
  const setCount = props.setCount;
  const [task, setTask] = useState({ data: [] });
  const [check, setCheck] = useState(false);
  const token = localStorage.getItem("token");
  const callFun = async (req, res) => {
    try {
      const formData = new FormData();
      formData.append("token", token);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getTaskData`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      console.log(result);
      setTask(result);
      //  console.log("result",result)
      // console.log("length of array",result.data.length);
      if (result.data.length === 0) {
        setCheck(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    callFun();
  }, []);

  return (
    <div className="py-[40px] w-full h-full flex flex-wrap gap-8 overflow-y-scroll ">
      {check ? (
        <div className="text-3xl flex gap-x-4 relative justify-center space-x-2 items-center pl-[340px]">No Task Created Yet..</div>
      ) : (
        task?.data.map((data, index) => {
          return <Card data={data} key={index}></Card>;
        })
      )}
    </div>
  );
};

export default Cards;
