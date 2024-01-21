import {ReactNode, useState} from "react";

interface btnContent {
    title: string;
    action?():void;
    icon?:ReactNode;
    img?:string
    cls?:string;
}



const Button = ({title,img,cls,action}:btnContent) => {
    const [active, setActive] = useState(false)
  return (
    <button  className={`${active ? "bg-yellow-500 text-gray-950 ":"bg-[#F0F0F2] text-gray-950 font-normal"} ${cls} cursor-pointer w-32 p-1 m-1  rounded-lg  flex items-center gap-2`} onClick={()=> {
       setActive(true);
       active && action
    }}>
        <img src={img} width={18} height={18}/>
        <span className={`${active && "text-lg "}`}>{title}</span>
    </button>
  )
}

export default Button
