import {DatePicker, Form, Input, TreeSelect, Select, Spin, DatePickerProps} from "antd";
import {useEffect, useState, useRef } from "react";
{/*import { RiImageAddLine } from "react-icons/ri";*/}
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../config/store";
import {categorieService} from "../../../config/services/categories/categoris.service.ts";
import {useAppContext} from "../../../context/ContextProvider.tsx";
import {RangePickerProps} from "antd/es/date-picker";
const Informations = () => {
    const [loading, setLaoding] = useState(false);
    const [fileName, setFileName] = useState();
    const {infoInput,setInfoInput,current,setCurrent}=useAppContext()
    const {data_categori,data_type} = useSelector((state: RootState) => state.categoris);
    const dispatch=useDispatch<AppDispatch>()
    const { TreeNode } = TreeSelect;

    const uploadArrete = async (e:any) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'profile_file_compulse');
        setFileName(files[0]?.name)
        setLaoding(true);

        const res = await fetch("https://api.cloudinary.com/v1_1/dwlcaul9n/image/upload", {
            method: "POST",
            body: data
        })
        const file = await res.json();
        // @ts-ignore
        setInfoInput({ ...infoInput, imageUrl: file?.secure_url })
        setLaoding(false);
    }

    useEffect(()=>{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let execute=true;
        dispatch(categorieService.getType('fr'))
        return ()=> {
            execute = false
        };
        console.log(execute)
    },[dispatch])
    const onChangeA = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {
        setInfoInput({...infoInput,firstDate:dateString})
        console.log(value)
    };
    const onChangeB = (value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {
        setInfoInput({...infoInput,lastDate:dateString})
        console.log(value)
    };

    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    }


    console.log(infoInput)
    return (
        <Form className={"cssGeneral flex flex-col gap-4 w-full border-gray-400 mt-5"} layout="vertical" autoComplete="off">
            <div className={"borderImage flex flex-col justify-center items-center h-24 rounded-lg"}>
                <Form.Item className={"flex flex-col items-center w-full justify-center "}>
                    <input type={'file'} multiple={false}
                           className={'w-full input-field h-full border-4 border-red-500'} onChange={uploadArrete}
                           style={{opacity: 0}}/>
                    {loading ? (<Spin tip="Loading">
                            <div className="content"/>
                        </Spin>) :
                        (
                            <div>
                                <div onClick={handleImageClick} className={"flex flex-col justify-center items-center w-full gap-1 p-1 "}>

                                    {/*<button color={'#2d5989'}
                                        className={'flex flex-col justify-center items-center text-sec-100'}
                                        //@ts-ignore
                                        onClick={() => document?.querySelector(".input-field")?.click()}>
                                        <RiImageAddLine size={25}/>
                                    </button>*/}
                                    { image ? <img src={URL.createObjectURL(image)} alt="" className="img-display-after" /> : <img src="./images-down.png" alt="" className="img-display-before" /> }
                                    <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
                                    <button className={"image-upload-button font-bold"}>Télécharger votre Thumbmail</button>
                                    {/*<p className={"text-sm text-gray-400"}>Cliquer sur l'Icon pour ajouter votre </p>*/}
                                </div>
                            </div>
                        )
                    }
                    <span className={'text-center text-lg font-semibold'}>{fileName}</span>
                </Form.Item>
            </div>
            <div>
                <Form.Item className={"VideoGeneral w-full"} label={"Video de Publicite "}>
                    <Input size={"large"} className={"w-full"} placeholder={"Lien Youtube"}
                           onChange={(e: any) => setInfoInput({...infoInput, videoUrl: e.target.value})}/>
                </Form.Item>
            </div>
            <div>
                <Form.Item className={"w-full "} label={"Description"}>
                    <Input.TextArea size={"large"} className={"w-full"} placeholder={"Descritpion"}
                                    rows={4}
                                    onChange={(e: any) => setInfoInput({...infoInput, description: e.target.value})}/>
                </Form.Item>
            </div>
            <div className={"flex flex-col lg:flex-row justify-between w-full gap-5"}>
                <Form.Item className={"w-[98%] lg:w-2/4"} label={"Date du Debut"} required={true}>
                    <DatePicker showTime size={'large'} className={'w-full'} placeholder={"Date de Debut"}
                                onChange={onChangeA}/>
                </Form.Item>
                <Form.Item className={"w-[98%] lg:w-2/4"} required={true} label={"Date de Fin"} labelAlign={"right"}>
                    <DatePicker showTime size={'large'} className={'w-full'} placeholder={"Date de Fin"}
                                onChange={onChangeB}/>
                </Form.Item>
                <Form.Item className={"flex flex-row items-center justify-end gap-1 w-[98%] lg:w-2/4"}
                           label={"En Plein Air"} required={true}>
                    <label htmlFor="accs"> </label>
                    <label className="relative flex items-center mb-5 cursor-pointer ">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div
                            className="w-11 h-6 bg-gray-200  peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </Form.Item>

            </div>
            <div className={"flex flex-col lg:flex-row justify-between w-full gap-5"}>
                <Form.Item className={"w-[98%]] lg:w-2/4"} label={"Categorie"} required={true}>
                    <TreeSelect showSearch
                                style={{width: '100%'}}
                        // treeCheckable={true}
                                dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                                placeholder="Sélectionnez une Categorie"
                                allowClear size={"large"}
                                onChange={(value: any, label: any, extra: any) => {
                                    setInfoInput({...infoInput, categories: value}), console.log(extra, label)
                                }}
                    >
                        {data_categori?.map((node: any) => (
                            <TreeNode key={node.key} value={node.label} title={node.label}>
                                {node.children && node.children.length > 0 && node.children.map((childNode: any) => (
                                    <TreeNode key={childNode.key} value={childNode.label} title={childNode.label}/>
                                ))}
                            </TreeNode>
                        ))}
                    </TreeSelect>
                </Form.Item>
                <Form.Item className={"w-[98%] lg:w-2/4"} label={"Type d'Evenement"}
                           labelAlign={"right"}>
                    <Select options={
                        data_type?.map((items: any) => (
                            {
                                label: items?.name,
                                value: items?.name
                            }
                        ))
                    } size={"large"} placeholder={"Type"} mode={"multiple"} onChange={(value: any) => {
                        setInfoInput({...infoInput, eventTypes: value})
                    }}/>
                </Form.Item>
            </div>
            <div className={"w-full flex flex-col lg:flex-row justify-between items-center"}>
                {current < 1 && (
                    <button className={"w-[98%] font-bold lg:w-44 h-10 bg-secondary text-white rounded-lg"}
                            onClick={() => setCurrent(current+1)}>
                        Suivant
                    </button>
                )}
            </div>
        </Form>
    );
};


export default Informations