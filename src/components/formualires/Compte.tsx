/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState } from 'react';
import { Form, Input, Modal} from "antd";
import { useAppContext } from '../../context/ContextProvider';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from "react-phone-input-2";
import { Store } from 'react-notifications-component';
import {AppDispatch, RootState} from "../../config/store";
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../../config/services/users/user.service.ts";
import ReactLoading from "react-loading";
const Compte = ({ openc, setOpenc }:any) => {
const [usersInput, setUserInput] = useState({email:"",phone:"",password:"",firstname:"",lastname:"",lg:"fr",roleId:2,type:"direct"});
const {show,setShow}=useAppContext();
    const {statusUser} = useSelector((state: RootState) => state.users);
    const dispatch=useDispatch<AppDispatch>();

    //function to cloese modal from login
   const closeForm = () => {
        setOpenc(false)
    }


    const activeLogin=()=>{
        closeForm();
        setShow(!show);
    }

    const handlClick=async ()=> {
            if (usersInput?.firstname === "" || usersInput?.lastname === "" || usersInput?.email === "" || usersInput?.email === "" || usersInput?.password === "") {
                // @ts-ignore
                Store.addNotification({
                    title: "Attention !",
                    message: "Vueillez remplir tout les Champs !!!!",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    }
                });
            } else {

                    try {
                        const dis = await dispatch(userService.New_Compte(usersInput))
                        if (dis.meta.requestStatus == "fulfilled") {
                            Store.removeAllNotifications();
                            // @ts-ignore
                            Store.addNotification({
                                title: "Felicitation",
                                message: "Votre Compte a etet cree !!!",
                                type: "success",
                                insert: "top",
                                container: "top-right",
                                animationIn: ["animate__animated", "animate__fadeIn"],
                                animationOut: ["animate__animated", "animate__fadeOut"],
                                dismiss: {
                                    duration: 2000,
                                    onScreen: true
                                }
                            })
                            closeForm()
                        } else if (dis.meta.requestStatus == "rejected") {
                            // @ts-ignore
                            Store.addNotification({
                                title: "Desole !!",
                                message: "Une erreur inattendue est servenue!!!",
                                type: "warning",
                                insert: "top",
                                container: "top-right",
                                animationIn: ["animate__animated", "animate__fadeIn"],
                                animationOut: ["animate__animated", "animate__fadeOut"],
                                dismiss: {
                                    duration: 2000,
                                    onScreen: true
                                }
                            })
                        }
                    }catch (e) {console.log(e)}

                }
            }
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <Modal
               
                centered
                open={openc}
                width={500}
                onCancel={closeForm}
                className={"flex flex-col  mt-5"}
                footer={null}
            >
                <Form className='w-[95%]  lg:w-[100%] flex flex-col gap-2'>
                 
                    <div className="flex flex-col items-center gap-3 mb-1">
                        <h1 className={"title_log bold-32"} >oqpa</h1>
                        <div>
                            <h5 className='bold-10 text-center'>S'Inscrire</h5>
                        </div>
                        <span>
                            {statusUser.isLoading && <ReactLoading type={"cylon"} color={"#FFF"} height={12}/>}
                        </span>
                    </div>
      
                                <Form.Item
                                        name='noms'
                                        rules={[{ required: true, message: "Vueillez fournir nom !" },{whitespace:false,message:"Pas d'espaces svp !"}]}>
                                        <Input
                                            value={usersInput?.firstname}
                                            placeholder='Nom Compte'
                                            className="h-10 text-sm"
                                            onChange={(e) => setUserInput({ ...usersInput, firstname: e.target.value })}
                                        />
                                </Form.Item>
                    <Form.Item
                        name='prenom'
                        rules={[{ required: true, message: "Vueillez fournir votre prenom!" }]}>
                        <Input
                            value={usersInput?.lastname}
                            placeholder='Nom Compte'
                            className="h-10 text-sm"
                            onChange={(e) => setUserInput({ ...usersInput, lastname: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item className={'w-[100%]'}>
                            <PhoneInput
                                country={"FR"}
                                placeholder='+243 81 367 8926'
                                value={usersInput?.phone}
                                onChange={(value: any) => setUserInput({ ...usersInput, phone: value })}
                                containerStyle={{width:415}}
                                inputStyle={
                                    {
                                        width: 450
                                    }
                                }
                            />
                    </Form.Item>
                                <Form.Item
                                        name='email'
                                        rules={[{ required: true, message: "Vueillez fournir votre email !" }, {
                                            type: 'email',
                                            message: "Votre addresse email est errone !!"
                                        }, { whitespace: true, message: "Pas d'espaces !" }]}>
                                        <Input
                                            placeholder='oqpa@gmail.com'
                                            className="h-10 text-sm"
                                            value={usersInput?.email}
                                            onChange={(e) => setUserInput({ ...usersInput, email: e.target.value })}
                                        />
                                </Form.Item>
                                <Form.Item
                                        name='pzd'
                                        rules={[{ required: true, message: "Vueillez fournir votre password !" }, {
                                            max:12,
                                            message:"Votre mot de passe est trop long"
                                        },{min:8,message:"Votre mot de passe est trop court"}]}>
                                        <Input.Password
                                            placeholder='Mot de passe'
                                            className="h-10 text-sm"
                                            onChange={(e) => setUserInput({ ...usersInput, password: e.target.value })}
                                        />
                                </Form.Item>
                            <div className='flex flex-col lg:flex-row gap-5 lg:justify-between w-full'>
                                    <button className='flex items-center justify-center text-sec-100 text-center w-[98%] lg:w-1/2 p-1 rounded-lg  bold-16  transition-all hover:drop-shadow duration-300  border border-sec-100' onClick={activeLogin} >Se Connecter</button>
                                <button
                                    className="p-1 w-[98%] lg:w-1/2 bg-secondary text-white text-lg text-center drop-shadow bold-16 rounded-lg"
                                    onClick={handlClick}>
                                    {statusUser.isLoading ? <span className={"flex items-center justify-center"}><ReactLoading type={"cylon"} color={"#FFF"} height={10} className={"text-center self-center -mt-11"}/></span>: "S'Inscrire"}
                                </button>
                            </div>
                </Form>
            </Modal>
        </>
    );
};


export default Compte;