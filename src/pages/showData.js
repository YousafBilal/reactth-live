import React,{useState,useEffect} from "react";


export default function ShowData() {
        
        const [gt,setGt]=useState([])

    useEffect(()=>{
        var getResult=JSON.parse(localStorage.getItem('Data'))
        console.log(getResult,'data');
        if(getResult){
            setGt(getResult)
        }
        
        // setTimeout(async() => {
            
        //     await pr()
        // }, 100);
        
    },[])

    console.log(gt,'test');


   const pr=()=>{
     var ret=parseInt(gt.eng) + parseInt(gt.urdu)+ parseInt(gt.math) +parseInt(gt.pak)+ parseInt(gt.com )

     if(tot<=30 ){

         var tot=(ret/1000)*100
     }


     console.log(ret,'res');
   }


//    import React,{useState,useEffect} from "react";


// export default function ShowData() {
        
//         const [get,setGt]=useState([{ math: 0, urdu: 0, pak: 0 ,eng:0,com:0}])
//         // const [data, setData] = useState();
//         const [percentage, setPercentage] = useState('');
// // console.log(gt,'state');
//     useEffect(()=>{
//         var getResult=JSON.parse(localStorage.getItem('Data'))
//         // console.log(getResult,'data');
//         if(getResult){
//             setGt(getResult)
//         }
//         const per = ((parseInt(get.math)+parseInt(get.urdu)+parseInt(get.pak)+parseInt(get.com)+parseInt(get.eng)) / 500) * 100;
//         setPercentage(per);

//         // if (percentage < 30) {
//             //     return 'Fail';
//             //   } else if (percentage > 50) {
//             //     return 'Pass';
//             //   } else {
//             //     return 'Result Pending';
//             //   }
//     },[])
    
    

   
    
// const totalmarks=(e)=>{
  
       
//     console.log(e.target.value);
//     setGt({
//         ...get,
//         [e.target.name]: parseInt(e.target.value)
//       });
//     }

//     return (
//         <>
//         <div className="img1 h-[115vh] w-[100%] p-[1px] bg-black">
//             <div>
//             <h1 className="text-white text-2xl">English Marks:{get.eng}</h1>
//             <h1 className="text-white text-2xl">Urdu Marks:{get.urdu}</h1>
//             <h1 className="text-white text-2xl">Maths Marks:{get.math}</h1>
//             <h1 className="text-white text-2xl">PakStudy Marks:{get.pak}</h1>
//             <h1 className="text-white text-2xl">Computer Marks:{get.com}</h1>
//             <button onClick={totalmarks}>click</button>
//             <p className="text-white text-2xl">parsentage:{percentage}%</p>
//             </div>


            

            
        

//         </div>
//         </>
//     )
    
// }
    


    return (
        <>
        <div className="img1 h-[115vh] w-[100%] p-[1px]">
            <div>
            <h1 className="text-white text-2xl">English Marks:{gt.eng}</h1>
            <h1 className="text-white text-2xl">Urdu Marks:{gt.urdu}</h1>
            <h1 className="text-white text-2xl">Maths Marks:{gt.math}</h1>
            <h1 className="text-white text-2xl">PakStudy Marks:{gt.pak}</h1>
            <h1 className="text-white text-2xl">Computer Marks:{gt.com}</h1>
            <button onClick={pr}>Click</button>
            </div>


            

            
        

        </div>
        </>
    )
    
}