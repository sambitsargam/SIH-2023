import React from 'react'

const CardStyle = ""

const Footer = () => {
  return (
    <div className="w-full gradient-bg-footer min-h-screen flex flex-col items-center justify-center p-5 gap-10" id='About'>
      <h1 className='text-white text-center text-5xl '>Developed By</h1>
      <div className="flex w-full justify-center flex-col gap-10 md:flex-row gap-y-20 pt-10">

        <a href="https://portfolio.sambitsargam.in/" target='_blank' rel="noreferrer">
          <div className={`${CardStyle} flex flex-col items-center p-2 gap-2 border rounded-md hover:shadow-2xl hover:scale-110 transition-all developer-card  cursor-pointer`}>
            <img src={"https://avatars.githubusercontent.com/u/70655824?v=4"} alt="Sambit" className="h-40 w-40 rounded-full shadow-2xl" />
            <h2 className="text-white text-center text-2xl">Sambit Sargam Ekalabya</h2>
            <h2 className="text-white text-center">Phone: 100000000000</h2>
            <h2 className="text-white text-center">Email: sambitsargam2003@gmail.com</h2>
          </div>
        </a>

        <div className={`${CardStyle} flex flex-col items-center p-2 gap-2 border rounded-md hover:shadow-2xl hover:scale-110 transition-all developer-card `}>
          <img src={"https://avatars.githubusercontent.com/u/96484862?v=4"} alt="charan" className="h-40 w-40 rounded-full shadow-2xl" />
          <h2 className="text-white text-center text-2xl">V. Charan Raju</h2>
          <h2 className="text-white text-center">Phone: 0221122111</h2>
          <h2 className="text-white text-center">Email: vcharan@gmail.com </h2>
        </div>

      </div>
      <h2 className='text-white text-center text-base pt-5'>
        This project is developed as a lab based project
        <br />
        Under the supervision of
        <br />
        <span className='text-[#29e3b8] text-xl'>Prof. Ashish Kumar Dass Sir</span>
        <br />
        © 2023
      </h2>
    </div >
  )
}

export default Footer