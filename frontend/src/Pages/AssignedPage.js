import { useContext, useEffect, useId, useState } from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { FaArrowCircleLeft } from "react-icons/fa";
import { createRef } from "react";
import { useID } from "../context/AllSchemaId";
import EditedCard from "../Components/EditedCard";
import Loader from "../Components/Loader";
const AssignedPage = () => {
  const { ytSchemaId } = useID();
  const fileInput = createRef();
  const [createTab, setCreateTab] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [discription, setDiscription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [editedVideoData, setEditedVideoData] = useState([]);
  const [editedVideoDataLength, setEditedVideoDataLength] = useState(false);
  const [refersh , setRefersh] = useState(false);
  const [taskData, setTaskData] = useState({
    fileUrl: "",
  });
  // console.log("doahdwbfoiabsfoushfohweofh",ytSchemaId)
  
  const callFun = async () => {
    try {
      const formData = new FormData();
      formData.append("ytId", ytSchemaId);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getCardDetail`,
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();
      // console.log("Result", result);
      setVideoUrl(result.result.ytfileUrl);
      setTitle(result.result.ytVidName);
      setCategory(result.result.ytCategory);
      setDiscription(result.result.ytVidDescription);
      setEditedVideoData(result.result.editedVideoList || []);
       
      // console.log("result to result", typeof(result.result.editedVideoList.length));
      result.result.editedVideoList.length === 0 ? (setEditedVideoDataLength(true)):(setEditedVideoDataLength(false))
    } catch (e) {
      console.log(e);
    }
  };


  const changeHandler = (event) => {
    event.preventDefault();
    if (event.target.type === "file") {
      handleFileUpload(event.target.files[0]);
      // console.log("Video Here");
    }
  };

  function handleFileUpload(file) {
    if (file) {
      setTaskData((old) => ({
        ...old,
        fileUrl: file,
      }));
    }
  }
  const formSubmitHandler = async (event) => {
    setLoader(true);
    // console.log(loader);
    event.preventDefault();
   
    try {
      const formData = new FormData();
      formData.append("ytId", ytSchemaId);
      formData.append("editedVideoUrl", taskData.fileUrl);
     
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/updateEditodVideo`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const result = await response.json();
        // console.log("response", result);
        setLoader(false);
      } else {
        console.log("Error Found");
      }
    } catch (e) {
      console.log(e);
    }
    setCreateTab(false);
  };

  useEffect(() => {
    callFun();
  }, [createTab, loader,refersh]);
  return (
    <div className="w-screen h-screen flex ">
      {!createTab && (
        <div className="w-3/4  h-full">
          <div className="w-full flex h-64  px-16">
            <div className="flex bg-gray-500 w-1/3 ">
              <video controls src={videoUrl}></video>
            </div>

            <div className="w-2/3  px-5 py-8 flex flex-col gap-1 overflow-hidden">
              <div className="text-xl text-green-400">
                TITLE:
                <span className="text-gray-400 text-sm"> {title}</span>
              </div>
              <h1 className="text-18 text-green-400">
                CATEGORY:{" "}
                <span className="text-gray-400 text-sm">{category}</span>
              </h1>
              <h1 className="text-17 text-green-400">
                DESCRIPTION:
                <span className="text-gray-400 text-xs">{discription}</span>
              </h1>
            </div>
          </div>

          <div className="w-full h-16 flex justify-center items-center">
            <div className="flex gap-2">
              Upload Edited Video -
              <button
                className="text-3xl px-1 cursor-pointer"
                onClick={() => {
                  setCreateTab(true);
                }}
              >
                <FaSquarePlus />
              </button>
            </div>
          </div>
          
          <div className="w-full h-full  border border-green-600 pt-5">
            <div className="w-[97%] h-80  pt-5 mx-auto flex flex-wrap gap-4 overflow-y-scroll">
            {editedVideoDataLength && (
            <div className="text-center mx-auto my-auto text-2xl">No Edited Video Yet...</div>
            )}
              {editedVideoData.map((value, index) => {
                return <EditedCard key={index} id={ytSchemaId} value={value} refersh={refersh} setRefersh={setRefersh}></EditedCard>;
              })}
            </div>
          </div>
        </div>
      )}

      {!createTab && (
        <div className="w-1/4 ml-1 border border-red-500  flex flex-col justify-center items-center">
          CHAT BOX
      
          <h2 className="m-3">Comming Soon...</h2>
        </div>
      )}

      {createTab && !loader && (
        <div className="w-full flex justify-center items-center">
          <div className="border border-dashed py-2 px-2 border-red-500 text-xl">
            <button
              className="mb-10 text-3xl"
              onClick={() => {
                setCreateTab(false);
              }}
            >
              <FaArrowCircleLeft />
            </button>
            <form
              onSubmit={formSubmitHandler}
              className="flex flex-col items-center gap-5"
            >
              <label className="text-underline underline decoration-dotted">
                Upload Edited Video
              </label>
              <input
                className="mt-[7px] rounded-md p-[4px]"
                required
                type="file"
                name="fileUrl"
                id="fileUrl"
                ref={fileInput}
                onChange={changeHandler}
              ></input>
              <button
                className=" bg-green-200 text-black py-2 px-4 font-bold border border-blue-500"
                type="submit "
              >
                Add
              </button>
            </form>
          </div>
        </div>
      )}

      {loader && createTab && <Loader></Loader>}
    </div>
  );
};
export default AssignedPage;
