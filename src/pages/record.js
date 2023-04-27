import React,{useState} from "react";
import { useNavigate } from 'react-router-dom'


export default function Record() {


  
    const navigate=useNavigate()
    const [formdata,setFromData]=useState({})

    const formData=(e)=>{

      setFromData({...formdata , [e.target.name]:e.target.value})
    }

    console.log(formdata,'formdata');
   
    const Update = () => {
       
       localStorage.setItem('Data',JSON.stringify(formdata))


      alert('Hii!');
      navigate("/")
    };

    const Goback=()=>{
        navigate("/nameId")
    }
    return (
        <>
        <div className="h-[115vh] w-[100%] p-[1px]" style={{background: 'linear-gradient(100deg,#b6286f 50%,#ac2066 0)'}}>
            <div className="w-[45vw] h-[min-content] rounded-lg bg-[#292f38]  shadow-[0_15px_30px_rgba(0,0,0,.4)] p-[2vh] ml-[25%] mt-10">
                <h1 className="text-[2em] font-bold text-[#ccc] text-center">Marks Sheet</h1>
                
                <div className="w-[30vw]  ml-20"> 
                <p className="text-[#ccc]  mt-4 font-serif ">English Marks:</p>
                <br/>
                <input id="i1" name="eng" title="text" placeholder="Add Number..." className="rounded-2xl bg-[#1d222b] p-[2vh] mt-[-3vh] w-[80%] " onChange={formData}/>
                <br/>
                <p className="text-[#ccc]  mt-4 font-serif " >Urdu Marks:</p>
                <br/>
                <input id="i1" title="text" name="urdu" placeholder="Add Number..." className="rounded-2xl bg-[#1d222b] p-[2vh] mt-[-3vh] w-[80%] "onChange={formData}/>
                <br/>
                <p className="text-[#ccc]  mt-4 font-serif ">Math Marks:</p>
                <br/>
                <input id="i1" title="text" name="math" placeholder="Add Number..." className="rounded-2xl bg-[#1d222b] p-[2vh] mt-[-3vh] w-[80%] " onChange={formData}/>
                <br/>
                <p className="text-[#ccc]  mt-4 font-serif ">PakStudy Marks:</p>
                <br/>
                <input id="i1" title="text" name="pak" placeholder="Add Number..." className="rounded-2xl bg-[#1d222b] p-[2vh] mt-[-3vh] w-[80%] " onChange={formData}/>
                <br/>
                <p className="text-[#ccc]  mt-4 font-serif ">Computer Marks:</p>
                <br/>
                <input id="i1" title="text" name="com" placeholder="Add Number..." className="rounded-2xl bg-[#1d222b] p-[2vh] mt-[-3vh] w-[80%] " onChange={formData}/>

                </div>
                <div className=" w-[50%] flex justify-between ml-[12%] mt-[4vh]">
                <button className="bg-[#790e43] text-[#ccc] py-[2vh] px-[10vh] rounded-full" onClick={Update}>UpDate</button>
                <button className="bg-[#790e43] text-[#ccc] py-[2vh] px-[10vh] mx-6 rounded-full" onClick={Goback}>Go..Back</button>
                </div>
                


            </div>

        </div>
        </>
    )
    
}