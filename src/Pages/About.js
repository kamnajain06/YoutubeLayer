import React from 'react'
import { ContactUs } from '../Components/ContactUs'
import { Footer } from "../Components/Footer";
const About = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center mt-[50px]'>
      <style>
        {`
        body {
          overflow-x: hidden;
        }
      `}
      </style>
      <div>
        <section className="container mt-5">
          <h2 className="text-center mb-10 font-serif text-[50px]"> YouTube Layer</h2>

          <p className='font-mono text-center'>
            Welcome to YouTube Layer, your go-to destination for engaging and informative content! We are passionate about providing quality tutorials, tips, and insights to our viewers.
          </p>
          <br/>
          <p className='font-mono text-center'>
            Our mission is to make cool intractive between YouTuber and Editor so that a youTuber can never face problem for searching a good editor.
          </p>

          <h3 className="mt-4 font-mono px-4 text-2xl font-bold"> -> What You'll Find Here:</h3>
          <ul className='font-mono mt-2 px-8'> 
            <li>🫂 Best Intraction between YouTuber and Editor</li>
            <li>💡 Project showcases and vedio Editing</li>
            <li>🌐 Edited vedio upload on YouTube and make money Transfer</li>
          </ul>

          <h3 className="mt-10 font-mono px-4 text-2xl font-bold"> -> Meet the Team:</h3>
          <p className='font-mono mt-2 px-4'>
            Our team is a passionate group of individuals dedicated to creating high-quality content for our audience. We believe in the power of knowledge-sharing and community building.
          </p>

          <div className="flex w-[60%] mt-5 justify-center items-center mx-auto">
            <div className='flex flex-col lg:flex-row md:flex-row items-center gap-4 mx-auto lg:justify-evenly  w-full  mt-4'>
              <div
                className=' items-center justify-center flex flex-col'>
                <img
                  src='https://res.cloudinary.com/du6cdpmzi/image/upload/v1710073017/samples/WhatsApp_Image_2023-12-20_at_01.53.34_jg6cyv.jpg'
                  width={125}
                  height={100}
                  className='rounded-[50%] border shadow-md shadow-white'
                  alt='Ankul Raja Patel'
                />
                <span className='text-orange-500 mt-4 text-lg'>Ankul Raja Patel</span>

              </div>
              <div
                className=' items-center justify-center flex flex-col'>
                <img
                  src='https://res.cloudinary.com/du6cdpmzi/image/upload/v1710073016/samples/WhatsApp_Image_2024-03-08_at_15.18.42_kgjylq.jpg'
                  width={120}
                  height={100}
                  className='rounded-[50%] border shadow-md shadow-white'
                  alt='Kamna Jain'
                />
                <span className='text-orange-500 mt-2 text-lg'>Kamna Jain</span>

              </div>
              <div
                className=' items-center justify-center flex flex-col '>
                <img
                  src='https://res.cloudinary.com/du6cdpmzi/image/upload/v1710065398/samples/my_pic_ptcezp.jpg'
                  width={125}
                  height={100}
                  className='rounded-[50%] border shadow-md shadow-white'
                  alt='Priyanshu Jaiswal'
                />
                <span className='text-orange-500 mt-2 text-lg'>Priyanshu Jaiswal</span>
              </div>
            </div>
          </div>
          <ContactUs className="mb-48"></ContactUs>

        </section>
      </div>
      <div className='w-[100vw]'>
        <Footer className="footer" />
      </div>

    </div>
  )
}

export default About