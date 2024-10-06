import Loader from "../Components/Loader";
import { useState } from "react";
import toast from "react-hot-toast";

export const ContactUs = () => {

    const [loader, setLoader] = useState(false);
    const token = localStorage.getItem("token");
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const changeHandler = (event) => {
        event.preventDefault();
        setContactData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setLoader(true);
        try {
            const formData = new FormData();
            formData.append("name", contactData.name);
            formData.append("email", contactData.email);
            formData.append("subject", contactData.subject);
            formData.append("message", contactData.message);
            formData.append("token", token);

            console.log("Formdata", formData);

            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/contactUs`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (response.ok) {
                toast.success("Form submission successfull");
                setLoader(false);

            } else {
                console.error("Form submission unsuccessfull");
            }
        } catch (e) {
            console.error("Failure", e.message);
        }
        setLoader(false);
        setContactData({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    };
    return (
        <div className='mx-auto max-w-[500px] my-[80px] mb-[100px]'>
            <form
                className="text-center border-2 border-[#0f1734] p-5 flex flex-col gap-3 text-white shadow-[#2d3243] rounded-md"
                onSubmit={submitHandler}
            >
                <p className="text-3xl text-white font-bold ">Contact us</p>
                <div className='flex items-center gap-8'>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={contactData.name}
                        onChange={changeHandler}
                        className="h-10 rounded-md px-3 w-full text-sm text-black"
                        placeholder="Kamna Jain" />
                </div>
                <div className=' flex items-center gap-9'>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={contactData.email}
                        onChange={changeHandler}
                        className="h-10 rounded-md px-3 w-full text-sm text-black"
                        placeholder="kamnajain18@gmail.com" />
                </div>
                <div className=' flex items-center gap-6'>
                    <label>Subject: </label>
                    <select
                        name="subject"
                        className="h-10 rounded-md px-3  text-black"
                        value={contactData.subject}
                        onChange={changeHandler}
                    >
                        <option value="" disabled>Choose option</option>
                        <option value="1" selected>Feedback</option>
                        <option value="2">Report a bug</option>
                        <option value="3">Feature request</option>
                        <option value="4">Feature request</option>
                    </select>
                </div>
                <div className="form-group flex items-center gap-4">
                    <label>Message: </label>
                    <textarea
                        className="form-control h-50 rounded-md px-3 w-full text-black"
                        id="exampleFormControlTextarea2"
                        rows="3"
                        name="message"
                        placeholder="Message"
                        value={contactData.message}
                        onChange={changeHandler}
                    ></textarea>
                </div>
                <button
                    className="py-1 px-3 rounded-md bg-yellow-500 text-black text-[20px]"
                    type="submit"
                >Send</button>
            </form>
        </div>
    )
}
