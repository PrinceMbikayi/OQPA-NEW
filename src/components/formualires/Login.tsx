/* eslint-disable @typescript-eslint/no-explicit-any */

import {useState } from 'react';
import { Button, Form, Input, Modal } from "antd";
import fcb from '../../assets/facebook.svg'
import google from '../../assets/google.svg';
import apple from '../../assets/apple.svg';
import { Toaster } from 'react-hot-toast';
import { Reset, Compte } from '..'
import { useAppContext } from '../../context/ContextProvider';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../config/store";
import {Store} from "react-notifications-component";
import {userService} from "../../config/services/users/user.service.ts";
import ReactLoading from "react-loading";


const Login = () => {
    const [sing,setSing]=useState(false);
    const [reset,setReset]=useState(false);
    const {show,setShow}=useAppContext()
    const {statusUser} = useSelector((state: RootState) => state.users);
    const dispatch=useDispatch<AppDispatch>()
    const [usersInput, setUserInput] = useState({login:"",password:"",type:"direct"});
    //function to cloese modal from login
    const closeForm = () => {
        setShow(false)
    }
    const lance=()=>{
        closeForm();
        setSing(true);
    }
    //function to show modal reset 
    const lanceReset=()=>{
        closeForm();
        setReset(true);
    }

    const handlClick=async ()=>{
        try {
            if(usersInput?.login ==="" ||usersInput?.password===""){
                Store.addNotification({title: "Attention !",
                    message: "Vueillez remplir tout les Champs !!!!",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    }});
            }
            else{
                const dis=await dispatch(userService.Login(usersInput))
                if (dis.meta.requestStatus=="fulfilled"){
                    Store.removeAllNotifications();
                    Store.addNotification(
                        {title: "Connexion",
                            message: "Connexion reussie  !!!",
                            type: "success",
                            insert: "top",
                            container: "top-right",
                            animationIn: ["animate__animated", "animate__fadeIn"],
                            animationOut: ["animate__animated", "animate__fadeOut"],
                            dismiss: {
                                duration: 2000,
                                onScreen: true
                            }}
                    )
                    closeForm()
                }
                else if(statusUser.isError){
                    // @ts-ignore
                    Store.addNotification({title: "Desole !!",
                        message: "Une erreur inattendue est servenue!!!",
                        type: "warning",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 2000,
                            onScreen: true
                        }})
                }
            }

        }catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <Modal
               
                centered
                open={show}
                width={480}
                onCancel={closeForm}
                className={"flex flex-col  mt-10"}
                footer={null}
            >
                <Form className='w-[95%]  lg:w-[100%] flex flex-col gap-3'>
                  <Form.Item>
                    <div className="flex flex-col items-center gap-10">
                        <h1 className={"title_log bold-32"} >oqpa</h1>
                        <h3 className='regular-18'>Connexion</h3>
                    </div>
                  </Form.Item>
                        <div className={'flex flex-col gap-1 w-[100%]'}>
                                <Button className={'lg:w-[100%] w-[80%] h-10 flex flex-row items-center justify-start gap-3'}>
                                    <img src={google} width={20} height={20} alt={'google'} />
                                    <span>Continuer avec Google</span>
                                </Button>
                                <Button className={'lg:w-[100%] w-[80%] h-10 lg:mt-0 flex flex-row items-center justify-start gap-3'}>
                                    <img src={fcb} width={20} height={20} alt={'google'} />
                                   <span className='bold-16'>Continuer avec Facebook</span>
                                </Button>
                                <Button className={'lg:w-[100%] w-[80%] h-10 lg:mt-0 flex flex-row items-center justify-start gap-3'}>
                                    <img src={apple} width={20} height={20} alt={'google'} />
                                   <span>Continuer avec Apple</span>
                                </Button>
                                <Form.Item
                                        name='addresse email'
                                        rules={[{ required: true, message: "Vueillez fournir votre email !" }, {
                                            type: 'email',
                                            message: "Votre addresse email est errone !!"
                                        }, { whitespace: true, message: "Pas d'espaces !" }]}>
                                        <Input
                                            placeholder='Email address'
                                            className="h-10 text-sm"
                                            value={usersInput?.login}
                                            onChange={(e) => setUserInput({...usersInput,login:e.target.value})}
                                        />
                                </Form.Item>
                                <Form.Item
                                    name='password'
                                    rules={[{ required: true, message: "Vueillez fournir votre mot de passe !" }]} className='-mt-6'>
                                    <Input.Password
                                        type='password'
                                        placeholder='Mot de passe'
                                        className="h-10 text-sm"
                                        value={usersInput?.password}
                                        onChange={(e) => setUserInput({...usersInput,password:e.target.value})}
                                    />
                                </Form.Item>
                            </div>
                            <button className='text-sec-100 text-left transition-all hover:underline duration-300 -mt-3' onClick={()=>{lanceReset();closeForm()}}>Mot de passe oublié</button>

                    <div className='flex flex-col lg:flex-row gap-5 justify-between w-full'>
                        <button
                            className='flex items-center justify-center text-sec-100 text-center w-[98%] lg:w-1/2 p-1 rounded-lg  bold-16  transition-all hover:drop-shadow duration-300  border border-sec-100'
                            onClick={lance}>Créer un compte
                        </button>
                        <button
                            className="p-1 w-[98%] lg:w-1/2 bg-secondary text-white text-lg text-center drop-shadow bold-16 rounded-lg"
                            onClick={handlClick}>
                            {statusUser.isLoading ?
                                <span className={"flex items-center justify-center"}><ReactLoading type={"cylon"}
                                                                                                   color={"#FFF"}
                                                                                                   height={10}
                                                                                                   className={"text-center self-center -mt-11"}/></span> : "Connexion"}
                        </button>
                    </div>
                </Form>
                <Toaster/>
            </Modal>
            <Compte openc={sing} setOpenc={setSing}/>
            <Reset open={reset} setOpen={setReset}/>
        </>
    );
};

export default Login;