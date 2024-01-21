import {Form, Input, message, Select} from "antd";
import {useSelector} from "react-redux";
import {RootState} from "../../../config/store";
import {useState} from "react";
import {SearcheInput} from "../../index.tsx";
import {useAppContext} from "../../../context/ContextProvider.tsx";

const Accessibilite = () => {
    const {data_population} = useSelector((state: RootState) => state.categoris);
    const {current,setCurrent}=useAppContext()
    const [is,setIs]=useState(false)
    return (
        <Form className={"flex flex-col gap-4 w-full  border-gray-400 mt-5"} layout={"vertical"}>
            <div className={"flex flex-col lg:flex-row justify-between w-full gap-5"}>
                <Form.Item className={"w-full"} label={"Adresse"} required={true}>
                    <SearcheInput/>
                </Form.Item>
            </div>
            <div className={"flex flex-col lg:flex-row justify-between gap-5 w-full"}>
                <label htmlFor="accs" className={'w-[98%] lg:w-2/4'}>Accessibilité faulteil roulant</label>
                <Form.Item className={"flex flex-flex w-[98%] lg:w-full"}>
                    <label className="relative inline-flex items-center mb-5 cursor-pointer ">
                        <input type="checkbox" value="" className="sr-only peer" onChange={() => setIs(!is)}/>
                        <div
                            className="w-11 h-6 bg-gray-200  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                    </label>
                </Form.Item>
            </div>
            {
                is && (
                    <div>
                        <Form.Item label={"Description Accessibilité"} required={true}>
                            <Input.TextArea rows={4} cols={4} size={"large"}/>
                        </Form.Item>
                    </div>
                )
            }
            <div>
                <Form.Item className={"w-full"} required={true} label={"Population Ciblée"}>
                    <Select size={"large"} className={"w-full"} placeholder={"Ciblage"} options={
                        data_population?.map((items: any) => (
                            {
                                label: items?.name,
                                value: items?.name
                            }
                        ))
                    }/>
                </Form.Item>
            </div>
            <div>
                <Form.Item className={"w-full "} required={true} label={"Description de l'endroit"}>
                    <Input.TextArea size={"large"} className={"w-full"} placeholder={"Descritpion"} rows={4}/>
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


export default Accessibilite