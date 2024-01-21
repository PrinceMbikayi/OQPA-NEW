
import {Carte, New_Event, Options} from "../components"
import {Login} from '../components';
import {useSelector,useDispatch} from 'react-redux';
import {RootState,AppDispatch} from '../config/store';
import { useAppContext } from '../context/ContextProvider';
import { FiLogIn } from "react-icons/fi";
import {Avatar,MenuProps, Dropdown, Space,Badge} from 'antd';
import {GrLanguage} from "react-icons/gr";
import {CiLogout} from "react-icons/ci";
import { TfiHelpAlt } from "react-icons/tfi";
import {ClearStorage} from "../helpers";
import {Recherhce} from "../components/formualires";
import {useEffect} from "react";
import {categorieService} from "../config/services/categories/categoris.service.ts";
import {FlagSpinner} from "react-spinners-kit";

const Home = () => {
    const {show,setShow}=useAppContext()
    const dispatch=useDispatch<AppDispatch>()
  // const {statusPosition} = useSelector((state: RootState) => state.addresse);
    const {user,token} = useSelector((state: RootState) => state.users);
    const {statusCategori} = useSelector((state: RootState) => state.categoris);
  const acticve=()=>{
    setShow(!show)
  }



  // function to search location name type in input field
  // export const getLocation=(value:string)=>{
  //     dispatch(addresseService.Search({word:value,lat,lng}));
  // }





    const items: MenuProps['items'] = [
        {
            label: (
                <div className={"flex  gap-2"}>
                    < Avatar style={{backgroundColor: "#fcb101", verticalAlign: 'middle'}} size="large" className={"mt-2 hover:cursor-pointer"}>
                        {
                            <span className={"text-lg font-semibold"}>{user && user.firstname?.charAt(0)}</span>
                        }
                    </Avatar>
                    <div className={"flex flex-col "}>
                        <h3 className={"font-bold text-lg"}>{`${user!.firstname}   ${user!.lastname}`}</h3>
                 ()       <h3>{`${user!.email}`}</h3>
                    </div>
                </div>
            ),
            key: '0',
        },
        {
          type: "divider"
        },
        {
            label: (
                <h3>
                    Mon Profil
                </h3>
            ),
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <h3>
                    Mes evenements
                </h3>
            ),
            key: '2',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <div className={"flex flex-row justify-between items-center"}>
                    <h3>Message</h3>
                    <Badge count={5} offset={[10, 10]}/>
                </div>
            ),
            key: '3',
        },
        {
            label: (
                <div className={"flex flex-row justify-between items-center"}>
                    <h3>Notifications</h3>
                    <Badge count={5} offset={[10, 10]}/>
                </div>
            ),
            key: '4',
        },
        {
            type: "divider"
        },
        {
            label: (
                <button>
                    Apprendre
                </button>
            ),
            key: '20',
        },
        {
            label: (
                <button>
                    Regarde
                </button>
            ),
            key: '210',
        },
        {
            label: (
                <button>
                    Participer
                </button>
            ),
            key: '28',
        },
        {
            label: (
                <button>
                    Organiser
                </button>
            ),
            key: '20',
        },
        {
            type:"divider"
        },
        {
            label: (
                <div className={"flex flex-row justify-between items-center"}>
                    <h3>Langue</h3>
                    <GrLanguage size={20} />
                </div>
            ),
            key: '47',
        },

        {
            label: (
                <div className={"flex flex-row justify-between items-center"}>
                    <h3>Aide</h3>
                    <TfiHelpAlt size={20} />
                </div>
            ),
            key: '45',
        },
        {
            type: "divider"
        },
        {
            label: (
                <div className={"flex flex-row justify-between items-center"} onClick={ClearStorage}>
                    <h3>Deconnexion</h3>
                    <CiLogout size={20}/>
                </div>
            ),
            key: '42',
        },
    ];


    useEffect(()=>{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let execute=true;
            dispatch(categorieService.getCategorie('fr'))
        return ()=> {
            execute = false
        };
        console.log(execute)
    },[dispatch])

    return (
        <div className="w-screen h-full relative ">
            <div
                className="absolute top-1 left-90 z-50 gap-5 flex lg:flex-row flex-col items-center justify-between w-full paddingContainer ">
            <div className={"flex items-center "}>
                {statusCategori?.isLoading ? <FlagSpinner size={30}/>:<Options/>}
            </div>
            <div className={"flex gap-2 items-center ml-96 justify-end"}>
                {
                    !token?.length ? <button
                            className="hidden lg:flex items-center justify-center p-1 sec7 w-40 gap-2 bg-secondary text-white text-lg text-center drop-shadow rounded-lg"
                            onClick={acticve}>
                            <FiLogIn size={20}/>
                            <span> Connexion</span>
                        </button> :""
                }
            </div>

            <div className={"hidden lg:flex flex-row items-center justify-end "}>
                {user?.length != 0 &&
                    <Dropdown menu={{items}} className={'w-56  text-gray-10 self-end'} placement={"topCenter"}>
                        <Space className={"self-end ml-24"}>
                            < Avatar style={{backgroundColor: "#fcb101", verticalAlign: 'middle'}} size="large"
                                     className={"ml-10 hover:cursor-pointer self-end"}>
                            {
                               <span className={"text-lg font-semibold"}>{user && user?.firstname?.slice(0, 1)}</span>
                           }
                       </Avatar>
                   </Space>
                </Dropdown>}
            </div>
            <Login/>
        </div>
        <New_Event/>
        <Recherhce/>
        <div className='sec8'>
            <Carte/>
        </div>
        {/*<Toaster/>*/}
    </div>
  )
}

export default Home