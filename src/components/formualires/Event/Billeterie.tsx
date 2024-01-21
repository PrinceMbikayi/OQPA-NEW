import {Form, Input, InputNumber, message} from "antd";
import { FaPlus} from "react-icons/fa6";
import {useState} from "react";
import {AiFillDelete} from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import {useAppContext} from "../../../context/ContextProvider.tsx";

const Billeterie = () => {
    const [tarifGroupe, setTarifGroupe] = useState([{id:"",data:""}]);
    const [isPlace,setIsPlace]=useState(false)
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
        <Form className={"flex flex-col gap-4 w-full  border-gray-400 mt-5"} layout={"vertical"}>
            <Form.Item className={"w-full"} label={"Tarif Unitaire"} required={true}>
                <InputNumber
                    className={"w-full"}
                    size={"large"}
                    addonBefore={"€"}
                    defaultValue={100}
                    placeholder={"Tarif Unitaire"}
                />
            </Form.Item>

            <div className={"flex flex-col w-full gap-2"}>
                <Form.Item className={"flex flex-row gap-5 justify-between items-center w-full "}>
                    {
                        Array.isArray(tarifGroupe) && tarifGroupe?.map((value, index) => (
                            <div className={"w-full flex flex-row gap-5 justify-between"} key={index}>
                                <div>
                                    <label>A partir de </label>
                                    <InputNumber size={"middle"} className={"w-24 ml-5 mb-2"} defaultValue={0}/>
                                </div>
                                <div>
                                    <label>Personnes le prix est de </label>
                                    <InputNumber addonBefore={"€"} size={"middle"} className={"w-32 ml-5 mb-2"}
                                                 defaultValue={0}/>
                                </div>
                                <div>
                                    <AiFillDelete onClick={() => deleteTarif(value.id)} size={25}
                                                  color={'#FF0016'} className={'cursor-pointer'}/>
                                </div>
                            </div>
                        ))
                    }
                </Form.Item>
                <button
                    onClick={addTarif}
                    className={"flex items-center justify-center gap-2 h-10 bg-secondary text-white w-56 rounded-lg text-center font-bold p-2"}>
                    < FaPlus/>
                    Ajouter un Tarif du groupe
                </button>
            </div>
            {/*    place par repartition*/}
            <div className={"w-full flex fex-row  items-center"}>
                <label htmlFor="accs" className={'w-[98%] lg:w-2/4'}>Place par repartition </label>
                <Form.Item className={"flex flex-row justify-end  items-center w-full gap-16 self-end "}
                           required={true}>
                    <label className="relative flex items-center mb-5 cursor-pointer self-end ml-10 mt-5">
                        <input type="checkbox" value="" className="sr-only peer"
                               onChange={() => setIsPlace(!isPlace)}/>
                        <div
                            className="w-11 h-6 bg-gray-200  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                    </label>
                </Form.Item>
            </div>
            <div className={"flex flex-row gap-10 items-center justify-between"}>
                {
                    isPlace && <div>
                        <Form.Item className={"flex items-center w-full gap-3"}>
                            <label>Nombre de Places Total</label>
                            <InputNumber size={"middle"} className={"w-1/4 ml-5"} defaultValue={0}/>
                        </Form.Item>
                        <Form.Item className={"flex items-center w-full gap-3"}>
                            <label>Nombre de Places Assises</label>
                            <InputNumber size={"middle"} className={"w-1/4 ml-5"} defaultValue={0}/>
                        </Form.Item>
                        <Form.Item className={"flex items-center w-full gap-3"}>
                            <label>Nombre de Places Debout</label>
                            <InputNumber size={"middle"} className={"w-1/4 ml-5"} defaultValue={0}/>
                        </Form.Item>
                    </div>
                }
            </div>
            <div className={"flex flex-col lg:flex-row gap-5"}>
                <Form.Item className={"w-full "} label={"Lien d'Inscription"}>
                    <Input addonBefore={<CiGlobe size={20}/>} size={"large"} className={"w-full"}
                           placeholder={"Lien d'Inscription de l'evenement"}/>
                </Form.Item>
            </div>
            <div className={"w-full flex flex-col lg:flex-row justify-between items-center"}>

                {current > 0 && (
                    <button type="button"
                            className={"w-[98%] font-bold  lg:w-44 h-10 text-sec-100  rounded-lg border-sec-100 border"}
                            onClick={() => setCurrent(current - 1)}>
                        Precedent
                    </button>
                )}
                {current >= 1 && (
                    <button className={"w-[98%] font-bold lg:w-44 h-10 bg-secondary text-white rounded-lg"}
                            onClick={() => setCurrent(current + 1)}>
                        Suivant
                    </button>
                )}
                {current === 5 && (
                    <button className={"w-[98%] font-bold lg:w-44 h-10 bg-green-500  text-white rounded-lg"}
                            onClick={() => message.success('Processing complete!')}>
                        Publier
                    </button>
                )}
            </div>
        </Form>
    );
};


export default Billeterie;