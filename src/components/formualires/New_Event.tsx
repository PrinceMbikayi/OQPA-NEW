import {useAppContext} from "../../context/ContextProvider.tsx";
import {Checkbox, Form, Input,Modal, Steps} from "antd";
import {steps} from "../../constants";
import {useState,useEffect} from "react";
import {Accessibilite, Billeterie, Informations, Invite, Social} from "./index.tsx";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../config/store";
import {categorieService} from "../../config/services/categories/categoris.service.ts";

const New_Event = () => {
    const {showEvent,setShowEvent,infoInput,setInfoInput,current}=useAppContext()
    const items = steps.map((item) => ({ key: item.title, title: item.title }));
    const [isChecked,setIsChecked]=useState(false);
    const dispatch=useDispatch<AppDispatch>()
    const closeForm = () => {
      setShowEvent(false)
    }

    useEffect(()=>{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let execute=true;
        dispatch(categorieService.getPopulation('fr'))
        return ()=> {
            execute = false
        };
        console.log(execute)
    },[dispatch])
    return (
        <>
            <Modal
                title={
                    <>
                        <div className={"flex flex-col gap-1 w-full mt-5"}>
                            <Form.Item>
                                <Input size={"large"} className={"w-full text-center"} placeholder={"Titre"} onChange={(e:any)=>setInfoInput({...infoInput,title:e.target.value})}/>
                            </Form.Item>
                            <Form.Item className={"w-[98%] flex flex-row justify-around gap-2"} label={"Evènement"} rules={[{required:true,message:"Veillez determine la visibilite "}]} required={true}>
                                <Checkbox className={"font-semibold text-[12px]"} name={"type"} value={"Public"} checked={!isChecked} onChange={()=> {
                                    setIsChecked(!isChecked)
                                    setInfoInput({...infoInput,publicOrPrivate:isChecked ? "Public":"Private" })
                                }}>Public</Checkbox>
                                <span>/</span>
                                <Checkbox className={"gap-1 font-semibold text-[12px] ml-2"} name={"type"} value={"Private"} checked={isChecked} onChange={()=> {
                                    setIsChecked(!isChecked)
                                    setInfoInput({...infoInput,publicOrPrivate:isChecked ? "Public":"Private" })
                                }}>Privé</Checkbox>
                            </Form.Item>
                        </div>
                    </>}
                open={showEvent}
                width={800}
                onCancel={closeForm}
                className={"flex flex-col -mt-10"}
                footer={null}
                maskClosable={false}
            >
                <Steps current={current} items={items} className={"flex flex-row w-full "}/>
                <>
                    {current === 0 && (<Informations/>)},
                    {current === 1 && (<Accessibilite/>)}
                    {current === 2 && (<Billeterie/>)}
                    {current === 3 && (<Social/>)}
                    {current === 4 && (<Invite/>)}
                </>

            </Modal>
        </>
    );
};


export default New_Event;
