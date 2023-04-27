import React,{useState} from "react";
import { useNavigate } from 'react-router-dom'


export default function CheckResult() {

    const navigate=useNavigate()

    const [rollNumber, setRollNumber] = useState("");
    const EnterVal = (e) => {
      // setRollNumber(e.target.value);
      setRollNumber({...rollNumber,[e.target.name]:e.target.value})
    };
    console.log(rollNumber,"no");


  // const [data, setData] = useState("");
      const GetResult = () => {

        var getData=JSON.parse(localStorage.getItem('stdid'))
        console.log(getData,'test');

        if(rollNumber.rolNumber == getData){

          console.log('match');
  navigate("/showData")


        }
        else{
          console.log("not match");
        }

      };
    return (
        <>
        <div className="bg-[#f3d657] h-[100vh] w-[100%] flex justify-center  items-center">
            <div className="h-[55vh] w-[50%] bg-[#f5f5f5] border-[6px] border-[#0f5]   border-double text-center ">
                <h1 className="text-center mt-[3vh] text-[4.5vh] font-serif  font-bold">Martic SSC -Part II Result 2020</h1>
                <div className="h-[8vh] w-[100%] bg-[#1ddf0b] text-[#fff] text-[4vh] font-serif rounded-2xl text-center p-2 mt-6">Serach By Roll No</div>
                <h1 className="mt-10 text-[1.5em] font-bold font-serif">Enter Roll No</h1>
                <input className="h-[40px] w-[60%] rounded-full border-gray-500 ml-[5%] text-center border-1 border-solid text-[20px]" name="rolNumber" onChange={EnterVal}></input>
                <br/>
                <button className="h-[50px] w-[160px] bg-[#790e43] text-[#ccc] text-[19px] mt-4 cursor-pointer rounded-xl" onClick={GetResult}>Get Result</button>

            </div>
        </div>
        </>
    )
    
}