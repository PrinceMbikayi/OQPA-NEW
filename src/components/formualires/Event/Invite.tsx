import {Input,Form} from "antd";
// import {useState} from "react";
// import {AiFillDelete} from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
const Invite= () => {
    // const [tarifGroupe, setTarifGroupe] = useState([{id:"",data:""}]);
    //
    // //add tarif groupe function
    // const addTarif= () => {
    //     const new_item = { id: Date.now(), data: '' }
    //     // @ts-ignore
    //     setTarifGroupe([...tarifGroupe, new_item])
    // }
    // // function to delete tarif by group
    // const deleteTarif = (id: string) => {
    //     // @ts-ignore
    //     const update_items = tarifGroupe.filter((item) => item.id != id)
    //     setTarifGroupe(update_items);
    // }
    //
    // //update tarif
    // const updateItemTarif = (id: number, data: string) => {
    //     // @ts-ignore
    //     const index = tarifGroupe.findIndex((item) => item.id === id)
    //     if (index !== -1) {
    //         const new_condition = [...tarifGroupe]
    //         // @ts-ignore
    //         new_condition[index].data = data
    //         setTarifGroupe(new_condition)
    //     }
    // }














    return (
        <Form className={"flex flex-col gap-4 w-full  border-gray-400 mt-5 mb-5"}>

                    <div className={"flex flex-row gap-2 w-[98%] lg:w-[70%] items-center"} >
                        <Input type={"select"} size={"large"} placeholder={"Ajouter des Invites"} className={"w-full"}/>
                        <span className={"w-8 h-8 p-1 bg-green-500 text-white flex items-center justify-center  rounded-full"}>
                            <FaPlus
                                     className={'cursor-pointer'}/>
                        </span>
                    </div>


        </Form>
    );
};


export default Invite