import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const Cards = (props) => {
  
  const category = props.category;
  console.log("Inside Ed",category);
  const [task, setTask] = useState({ data: [] });
  const [check, setCheck] = useState(false);
  const callFun = async (req, res) => {
    console.log("ed")
    try {
        const formData = new FormData();
        formData.append("category",category)
        console.log("Iside Fetch",category);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getAllTaskData`,
        {
          method: "POST",
          body: formData
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      console.log("ED Ke Andar")
      const result = await response.json();
      console.log(result);
      setTask(result);
      
      if (result.data.length === 0 && category ==="All") {
        setCheck(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    callFun();
  }, [category]);

  return (
    <div className="py-[40px] w-full h-full flex flex-wrap gap-8 overflow-y-scroll ">
      {check ? (
        <div className="text-3xl flex gap-x-4 relative justify-center space-x-2 items-center pl-[340px]">No Task Yet..</div>
      ) : (
        task?.data.map((data, index) => {
          return <Card data={data} key={index}></Card>;
        })
      )}
    </div>
  );
};

export default Cards;
