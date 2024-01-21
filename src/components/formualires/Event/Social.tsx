import {Input, Form, message} from "antd";
import { CiGlobe } from "react-icons/ci";
import {useState} from "react";
import {AiFillDelete} from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import {useAppContext} from "../../../context/ContextProvider.tsx";
const Sociale= () => {
    const [tarifGroupe, setTarifGroupe] = useState([{id:"",data:""}]);
    const [hid,sethid]=useState(false)
    const {current,setCurrent}=useAppContext()
    //add tarif groupe function
    const addTarif= () => {
        const new_item = { id: Date.now(), data: '' }
        // @ts-ignore
        setTarifGroupe([...tarifGroupe, new_item])
    }
    // function to delete tarif by group
    const deleteTarif = (id: string) => {
        // @ts-ignore
        const update_items = tarifGroupe.filter((item) => item.id != id)
        setTarifGroupe(update_items);
    }

    //update tarif
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
            {
                Array.isArray(tarifGroupe) && tarifGroupe?.map((value, index) => (
                    <div className={"flex flex-row gap-2 w-[98%] lg:w-[70%] items-center"} key={index}>
                        <CiGlobe size={28} color={'#493BE4'}/>
                        <Input size={"large"} placeholder={"page web"} className={"w-full"}/>
                        <AiFillDelete onClick={() => deleteTarif(value.id)} size={28}
                                      color={'#FF0016'} className={'cursor-pointer'}/>
                    </div>
                ))
            }
            <div className={""}>

                <button
                    className={"flex flex-row items-center justify-center gap-1 w-52 bg-secondary text-white font-bold p-2 text-center rounded-lg"}
                    onClick={addTarif}>
                    < FaPlus/>
                    Ajouter une page web
                </button>
            </div>
            <h4 className={"font-semibold"}>Chat</h4>
            <div className={"flex flex-col w-full"}>
                <div className={"flex flex-row justify-between items-center w-full"}>
                    <label htmlFor="accs" className={'w-[98%] lg:w-2/4 -mt-10'}>Creation espace chat direct</label>
                    <Form.Item className={"flex flex-flex w-[98%] lg:w-2/4"}>
                        <label className="relative inline-flex items-center mb-5 cursor-pointer ">
                            <input type="checkbox" value="" className="sr-only peer" onChange={() => sethid(!hid)}/>
                            <div
                                className="w-11 h-6 bg-gray-200  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                        </label>
                    </Form.Item>
                </div>
                {
                    hid && (
                        <>
                            <div className={"flex flex-row justify-between items-center w-full"}>
                                <label htmlFor="accs" className={'w-[98%] lg:w-2/4 -mt-10'}>Chat Publique</label>
                                <Form.Item className={"flex flex-flex w-[98%] lg:w-2/4"}>
                                    <label className="relative inline-flex items-center mb-5 cursor-pointer ">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div
                                            className="w-11 h-6 bg-gray-200  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                                    </label>
                                </Form.Item>
                            </div>
                            <div className={"flex flex-row justify-between items-center w-full"}>
                                <label htmlFor="accs" className={'w-[98%] lg:w-2/4 -mt-10'}>Messages Audio</label>
                                <Form.Item className={"flex flex-flex w-[98%] lg:w-2/4"}>
                                    <label className="relative inline-flex items-center mb-5 cursor-pointer ">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div
                                            className="w-11 h-6 bg-gray-200  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                                    </label>
                                </Form.Item>
                            </div>

                        </>
                    )
                }
                <div className={"w-full flex flex-col lg:flex-row justify-between items-center"}>

                    {current > 0 && (
                        <button type="button"
                                className={"w-[98%] font-bold  lg:w-44 h-10 text-sec-100  rounded-lg border-sec-100 border"}
                                onClick={() => setCurrent(current - 1)}>
                            Precedent
                        </button>
                    )}
                    {/*{current >= 1 && (*/}
                    {/*    <button*/}
                    {/*        className={"w-[98%] font-bold lg:w-44 h-10 bg-secondary text-white rounded-lg"}*/}
                    {/*        onClick={() => setCurrent(current + 1)}>*/}
                    {/*        Suivant*/}
                    {/*    </button>*/}
                    {/*)}*/}
                    {current === 3 && (
                        <button
                            className={"w-[98%] font-bold lg:w-44 h-10 bg-green-500  text-white rounded-lg"}
                            onClick={() => message.success('Processing complete!')}>
                            Publier
                        </button>
                    )}
                </div>
            </div>
        </Form>
    );
};


export default Sociale