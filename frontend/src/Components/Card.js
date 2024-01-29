import React from "react";

const Card = (props) => {
  const ytUrl = props.data.ytfileUrl;
  const ytVidName = props.data.ytVidName;
  const ytVidCategory = props.data.ytCategory;
  const ytVidDescription = props.data.ytVidDescription;
  const ytImage='';
  const ytFirstName='';
  const ytLastName='';

  const savedAccount = localStorage.getItem("accountType");
    let YouTuber = false;
    let editor=false;
    savedAccount === "YouTuber" ? (YouTuber = true):(editor = true);
    function clickHandler() {

    }
  return (
    <div className="flex flex-col border border-white w-[300px] max-h-[400px] ">
      <div className="w-full ">
        <video controls width={300} className='h-[200px]'>
          <source src={ytUrl}></source>
        </video>
      </div>
      <div className=" p-[20px]">
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg text-gray-200">{ytVidName}</h1>
          </div>
          <div>
            <h2 className="text-red-400">{ytVidCategory}</h2>
          </div>
        </div>
        <div>
          {
            YouTuber &&
            <div className="flex">
              <div>
                <img src={ytImage}></img>
              </div>
              <div>
                <h2>{ytFirstName}</h2>
              </div>
              <div>
                <h2>{ytLastName}</h2>
              </div>
            </div>
          }
        </div>
        <div className="flex flex-wrap py-6 ">
          <h3 className=" text-xs text-gray-300">{ytVidDescription}</h3>
        </div>
        
        {/* button */}
        <div className="flex flex-col gap-1.5">
        { editor &&
            <div className="bg-gray-500 text-center rounded-md  p-1.5 text-black hover:font-bold hover:bg-gray-700 bg-fixed transition-all duration-200 ">
            <button onClick={clickHandler}>Accept</button>
          </div>
        }
        <div className="flex gap-2 justify-around">
        {   YouTuber &&
            <div className="w-[100px] bg-gray-500 text-center rounded-md  p-1.5 text-black hover:font-bold hover:bg-gray-700 bg-fixed transition-all duration-200 ">
            <button>Approve</button>
          </div>
        }  
        {   YouTuber &&
            <div className="w-[100px] bg-gray-500 text-center rounded-md  p-1.5 text-black hover:font-bold hover:bg-gray-700 bg-fixed transition-all duration-200 ">
            <button>Reject</button>
          </div>
        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
