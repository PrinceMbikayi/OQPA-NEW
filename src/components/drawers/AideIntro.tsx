import { Drawer } from 'antd';
import React from "react";
import {useAppContext} from "../../context/ContextProvider.tsx";
import { IoClose } from "react-icons/io5";

const AideIntro: React.FC = () => {
    const {setOpen,open}=useAppContext()
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Drawer
                title={<div className={"w-full flex gap-5 justify-between items-center"}>
                    <span>Comment nous pouvons vous aider ?</span>
                    <span className={" hover:cursor-pointer w-8 flex items-center justify-center rounded-full p-2 h-8 hover:drop-shadow-lg bg-gray-200 text-blue-70"}>
                        <IoClose size={25} onClick={onClose}/>
                    </span>
            </div>}
                placement="right"
                size={'large'}
                footer={null}
                open={open}
                closeIcon={false}
                // extra={
                //     <Space>
                //         <Button onClick={onClose}>Cancel</Button>
                //         <Button type="primary" onClick={onClose}>
                //             OK
                //         </Button>
                //     </Space>
                // }
            >

            </Drawer>
        </>
    );
};

export default AideIntro;
