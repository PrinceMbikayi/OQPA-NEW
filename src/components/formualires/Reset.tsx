/* eslint-disable @typescript-eslint/no-unused-vars */

import {useState } from 'react';
import { Form, Input, Modal } from "antd";
import { Toaster } from 'react-hot-toast';

interface log{
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpen:any;
}

const Reset = ({ open, setOpen }:log) => {
    const [email, setEmail] = useState("");
   

   //function to cloese modal from login
   const closeForm = () => {
        setOpen(false)
    }

    return (
        <>
            <Modal
               
                centered
                open={open}
                width={480}
                onCancel={closeForm}
                className={"flex flex-col  mt-10"}
                footer={null}
            >
                <Form className='w-[95%]  lg:w-[100%] flex flex-col justify-around gap-2'>
                 
                    <div className="flex flex-col items-center gap-5 mb-5">
                        <h1 className={"title_log bold-32"} >oqpa</h1>
                        <div>
                            <h3 className='bold-16'>Trouver votre Mot de passe</h3>
                            <h5 className='bold-10'>Saisissez votre adresse e-mail</h5>
                        </div>
                    </div>
      
                                <Form.Item
                                        name='addresse email'
                                        rules={[{ required: true, message: "Vueillez fournir votre email !" }, {
                                            type: 'email',
                                            message: "Votre addresse email est errone !!"
                                        }, { whitespace: true, message: "Pas d'espaces !" }]}>
                                        <Input
                                            placeholder='Email address'
                                            className="h-10 text-sm"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                </Form.Item>
                                
                            
                            <div className='flex flex-col lg:flex-row gap-5 lg:justify-end w-full'>
                            
                            <button className="hidden lg:flex items-center justify-center p-1  w-32 bg-secondary text-white text-lg text-center drop-shadow bold-16 rounded-lg">
                                        Reinitialiser
                            </button>       
                            </div>
                </Form>
                <Toaster />
            </Modal>
           
        </>
    );
};


export default Reset