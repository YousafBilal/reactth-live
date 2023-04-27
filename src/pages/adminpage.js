import React ,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Admin() {
    const navigate = useNavigate();
    const [password,setPassword]=useState('')
        const [admin, setAdmin] = useState(false);
        console.log(admin,'inputvalue');





    const justGo = () => {

        localStorage.setItem("password " , password)
        
        navigate("/NameId")
    }
    

    useEffect(()=>{
        if(password=='123'){
            setAdmin(true)
        }
    //     else{
    //   return wrong Password
    //     }
    },[password])
    
//     const [inp ,setInp]=useState({})
// }

//   const inputval = (e) => {
//     setInp(e.target.value);
//   };
//   console.log(inputvalue);
//   useEffect()

    return(
        <>
        <div className=" img2 h-[100vh] w-[100%] flex  justify-center">
        <div >
            <div className="">
                <h1 className="h2">Hi! Admin Please Enter Password</h1>
                <br/>   
            </div>
            <input type='Number' className="py-[2vh] px-[10%]  rounded-full ml-[33%] 
            shadow-[3px_4px_4px_10px_red] hover:onmouse hover:shadow-[3px_4px_4px_10px_orange]"
             onChange={(e)=>{setPassword(e.target.value)}}/>

             {admin ?
            <button className='rounded-xl px-5 py-3 bg-yellow-500' onClick={justGo}>GO ... !</button>:'Enter the password'
        }


        </div>
            </div>
        </>
    )
    
}