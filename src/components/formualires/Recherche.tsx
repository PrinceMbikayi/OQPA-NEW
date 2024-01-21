import {useAppContext} from "../../context/ContextProvider.tsx";
import {Modal, Select} from "antd";
import { addresseService } from '../../config/services/addresse/addresse.service.ts';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../config/store";
import {useState} from "react";
import {FaPlus} from "react-icons/fa";
import logo from '../../assets/loc.jpg'
import {AiFillDelete} from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import {rechercheFiltres} from "../../constants";
import { LuSaveAll } from "react-icons/lu";
const Recherche = () => {
    const {showRecherche,setShowRecherche,location}=useAppContext()
    const dispatch=useDispatch<AppDispatch>()
    const [rech,setRech]=useState([{id:new Date(),data:""}])
    const [itm,setItm]=useState([])
    //@ts-ignore
    const {lat,lng}=location;
    const [word, setword] = useState("paris")
    let tableauSansDoublons: any[]=[]
    const closeForm = () => {
      setShowRecherche(false)
    }

    const addRech= () => {
        const new_item = { id: Date.now(), data: '' }
        // @ts-ignore
        setRech([...rech, new_item])
    }
    // function to delete tarif by group
    const deleteRech = (id: string) => {
        if (rech.length>1){
            // @ts-ignore
            const update_items = rech.filter((item) => item.id != id)
            setRech(update_items);
        }
    }

    const deleteItem = (value: string) => {
        if (itm.length>=1){
            // @ts-ignore
            const update_items = itm.filter((item) => item != value)
            setItm(update_items);
        }
    }



    //add element
    const handleChange = (event:any) => {
        //@ts-ignore
        setItm([...itm,event.target.value]);
    };

     tableauSansDoublons = itm?.reduce((acc, element) => {
        if (!acc.includes(element)) {
            acc.push(element);
        }
        return acc;
    }, []);

    return (
        <>
            <Modal
                title={<div className={"w-full"}>
                    <button className={"w-60 p-1 shadow h-10 border-1 border-gray-400"} onClick={addRech}>
                        Cree une Nouvelle Recherche
                    </button>
            </div>}
                open={showRecherche}
                width={900}
                onCancel={closeForm}
                className={"flex flex-col justify-center -mt-14 p-3"}
                footer={null}
                maskClosable={false}
            >
                <div>
                    <nav>
                        <button className="grostitre" onClick={addRech}>Nouvelle Recherche</button>
                        <select value={"Ajouter Filtre"} className="ajoutbtn" onChange={handleChange}>
                            <>
                                {
                                    rechercheFiltres.map((items:any,index:number)=>(
                                        <option value={items.value} key={index}>
                                            {items.label}
                                        </option>
                                    ))
                                }
                            </>
                        </select>
                        {/*<button className="ajoutbtn" type='button'>Ajouter fi</button>*/}
                    </nav>
                </div>
                {/* MOI JE SUIS EN HAUT */}
                <div>
                    {
                        Array.isArray(rech) && rech?.map((value, index)=> (
                            <div>
                                <div
                                    className={"w-[96%] relative flex flex-col justify-around bg-[#858e8d] gap-2 h-full mb-14"}
                                    key={index}>
                                    <div className={"w-full p-2 ml-1"}>
                                        <input placeholder="Recherche dans Web"
                                               className="outline-none text-white text-[14px] bg-inherit w-[95%] border-b-1 border-white sec1"
                                               onChange={(e) => setword(e.target.value)} onKeyDown={(event) => {
                                            if (event.key === "Enter") {
                                                dispatch(addresseService.Search({word, lat, lng}))
                                            }
                                        }}/>
                                    </div>
                                    <div className={"w-full p-2 ml-1"}>
                                        <select value={"Ajouter Filtre"} className={"p-1 rounded-lg w-56 text-blue-70 h-10 border-1 border-white outline-none bg-inherit"} onChange={handleChange} >
                                           <>
                                               {
                                                   rechercheFiltres.map((items:any,index:number)=>(
                                                       <option value={items.value} key={index}>
                                                           {items.label}
                                                       </option>
                                                   ))
                                               }
                                           </>
                                        </select>
                                    </div>
                                    <div className={"w-full flex flex-wrap justify-start gap-4 p-2 "}>
                                        {
                                            tableauSansDoublons?.map((value, key) => (
                                                <div className={"flex flex-col "} key={key}>
                                                    <p className={"flex items-center gap-3 text-white ml-2"}>
                                                        {value}
                                                        <RxCrossCircled
                                                            className={"bg-red-500 text-white center ml-5 w-5 h-5 rounded-full hover:cursor-pointer"}
                                                            onClick={() => deleteItem(value)}/>

                                                    </p>
                                                    <Select size={"large"}
                                                            className={"w-32 h-10 p-1 outline-none rounded-none"}>Avec ma
                                                        famille</Select>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <button className={"absolute top-1 -left-4  border-2 border-gray-400 mt-32 h-6 -ml-1"}
                                            >
                                        <FaPlus/>
                                    </button>
                                    <button
                                        className={"flex items-center justify-center w-12 h-12 bg-white absolute top-1 -right-4  border-2 shadow-2xl mt-7  -ml-2 z-5 rounded-full "}
                                        onClick={() => dispatch(addresseService.Search({word, lat, lng}))}
                                    >
                                        <img src={logo} className={"rounded-full"}/>
                                    </button>
                                    <span className={" w-10 h-10 rounded-full bg-white absolute top-1 -left-4  border-2 border-gray-400 -mt-3 -ml-3 flex items-center justify-center text-lg"}>
                                        56
                                    </span>
                                    {rech.length > 1 && <button
                                        className={"flex items-center justify-center absolute h-7 mt-28 w-7 right-5 -top-3 bg-red-500 text-white rounded-full hover:cursor-pointer"}
                                       //@ts-ignore
                                        onClick={() => deleteRech(value.id)}>
                                        <AiFillDelete size={20}/>
                                    </button>}
                                    <button title={"Sauvegarder"} className={"flex items-center justify-center absolute mt-1 h-10  w-10 right-5 -top-3 bg-secondary  text-white rounded-full hover:cursor-pointer"}>
                                        <LuSaveAll size={22}/>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Modal>
        </>
    );
};


export default Recherche;
