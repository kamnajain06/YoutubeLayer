import React,{useEffect, useState} from "react";
import "./Card.css"

const Card = (props) => {
  const ytUrl = props.data.ytfileUrl;
  const ytVidName = props.data.ytVidName;
  const ytVidCategory = props.data.ytCategory;
  const ytVidDescription = props.data.ytVidDescription;
  const userId = props.data.userId;
  const dashPage = localStorage.getItem('dashPage');
  
  const [refresh,setRefersh] =useState(false);
  const [ytImage,setYtImage]=useState("");
  const [ytFirstName,setYtFirstName]=useState("");
  const [ytLastName,setYtLastName]=useState(""); 
  const [isClicked, setIsClicked]= useState(false);
  const [readMore, setReadMore] = useState(false);
  
  const savedAccount = localStorage.getItem("accountType");
  let YouTuber = false;
  let editor=false;
  savedAccount === "YouTuber" ? (YouTuber = true):(editor = true);


  function clickHandler(){
    if(!isClicked){
      setIsClicked(true);
    }
  }


   
  async function RequestClickHandler(event) {
    // console.log(event.target.value);
    // console.log(props.data._id)

    try {
      const formData = new FormData();
      formData.append("id",props.data._id);
      formData.append("newStatus",event.target.value);
      const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/updateInCard`,
      {
        method: "POST",
        body: formData
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch User Name");
    }
    const result = await response.json();
  } catch (err) {
    console.error(err);
  }
}

    const callFun = async (req, res) => {
      try {
          const formData = new FormData();
          formData.append("userId",userId);
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/getUserDetails`,
          {
            method: "POST",
            body: formData
          }
        );
  
        if (!response.ok) {
          throw new Error("Failed to fetch User Name");
        }
        const result = await response.json();

        // console.log(result.data.firstName);
        setYtImage(result.data.image)
        setYtFirstName(result.data.firstName)
        setYtLastName(result.data.lastName)
      } catch (err) {
        console.error(err);
      }
    };

    useEffect(()=>{
        callFun()
    },[userId]);





  return (
    <div className="flex flex-col border border-white w-[300px] max-h-[600px] ">
      <div>
          {
            editor &&
            <div className="flex items-center gap-3 py-2 px-4 cursor-pointer" >
              <div>
                <img className="w-9 rounded-[50%]" src={ytImage}></img>
              </div>
              <div>
                <h2>{ytFirstName} <span>{ytLastName}</span></h2>
              </div>

            </div>
          }
        </div>
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
        
        <div className="flex flex-wrap py-6 ">
          <h3 className=" text-xs text-gray-300">
            {
              ytVidDescription.length > 100?
              (
                <div>
                  {
                    readMore? ytVidDescription : 
                    ytVidDescription.slice(0,100) + "..." 
                  }
                  <button onClick={()=> setReadMore(!readMore)} className='text-blue-500'> {readMore? "Read Less" : "Read More"} </button>
                </div>
              ) : (ytVidDescription)
            }
          </h3>
        </div>
        

        <div className="flex flex-col gap-1.5">
        { editor &&
            <div >
            <button value="Requested" onClick={RequestClickHandler} className={`w-full bg-gray-500 text-center rounded-md  p-1.5 text-black hover:font-bold hover:bg-gray-700 bg-fixed transition-all duration-200 ${isClicked? "clicked" : ""}`}>
                {
                  isClicked == false ? "Request" : "Requested"
                }
            </button>
          </div>
        }
        <div className="flex gap-2 justify-around">
        {   YouTuber && dashPage === "Requested" &&
            <div className='w-[100px] bg-gray-500 text-center rounded-md  p-1.5 text-black hover:font-bold hover:bg-gray-700 bg-fixed transition-all duration-200 $'>
            <button value="Assigned" onClick={RequestClickHandler}>Approve</button>
          </div>
        }  
        {   YouTuber && dashPage === "Requested" &&
            <div className="w-[100px] bg-gray-500 text-center rounded-md  p-1.5 text-black hover:font-bold hover:bg-gray-700 bg-fixed transition-all duration-200 ">
            <button value="All" onClick={RequestClickHandler}>Reject</button>
          </div>
        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
