import React from 'react'
import { useNavigate } from "react-router-dom";



export default function Home() {
  const navigate = useNavigate();
    const AdminPanel = () => {
navigate("/admin")
    }
    const ResultsCheck= () => {
      navigate("/checkResult")
          }

 return(
  <>
  <div className='img1 h-[100vh] w-[100%] flex  justify-center items-center'>
    <div>
      <h1 className='h1 mb-10'>Ruslt Checking</h1>
      <button className=' py-4 text-xl rounded-full font-bold text-[#ccc] bg-[#D65395] px-6 ' style={{background: "linear-gradient(100deg,#b6286f 50%,#ac2066 0)"}} onClick={AdminPanel}>Admin Panel</button>
      <button className=' py-4 rounded-full px-6  text-xl font-bold text-[#ccc] bg-[#D65395] mx-2' style={{background: "linear-gradient(100deg,#b6286f 50%,#ac2066 0)"}} onClick={ResultsCheck}>Results Check </button>
    </div>
  </div>

  </>
 )


}