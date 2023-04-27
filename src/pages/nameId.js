import React,{useState} from "react";
import { useNavigate } from 'react-router-dom'


export default function NameId() {
    const navigate=useNavigate()

    // const [std ,setStd]=useState()
    // const StudentData = (e) => {
    //     setStd(e.target.value);
    //   };

    const [stdName, setstr] = useState("");

    const StudentRollName = (e) => {
      setstr(e.target.value);
    };

    const [stdId, setstr2] = useState("");

  const StudentRollNumber = (e) => {
    setstr2(e.target.value);
    console.log(e.target.value);
  };


  // const [data, setData] = useState([]);
  const MarkSheet = () => {
    alert('Hii!');
    navigate("/record")
    localStorage.setItem('Name',JSON.stringify(stdName))
    localStorage.setItem('stdid',JSON.stringify(stdId))


      // localStorage.setItem('studentId',stdId)
      // // let NewArr = data;
      // // let obj = { Student: stdName, StudentId: stdId };
      // // NewArr.push(obj);
      // // setData(NewArr);

  };

    return (
        <>

<div className='img1 h-[100vh] w-[100%] flex  '>
    <div>
        <input type='text' placeholder="Name" name="name" className="text-gray-500 border border-gray-600" onChange={StudentRollName}/>
        <input type='Number' placeholder="Roll-Number" name="Id" className=" border border-gray-600" onChange={StudentRollNumber}/>
        <button className="bg-gray-200  border border-gray-600" onClick={MarkSheet}>Enter</button>
    
    </div>
  </div>
        </>
    )
    
}