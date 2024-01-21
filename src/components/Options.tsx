import {Dropdown} from "antd";
import logo from "../assets/oqpa.png";
import {useAppContext} from "../context/ContextProvider.tsx";
// import {useSelector} from "react-redux";
// import {RootState} from "../config/store";

const Options = () => {
    const {setShowRecherche,setShowEvent}=useAppContext()
    // const {token} = useSelector((state: RootState) => state.users);


    const items = [
        {
            key: '1',
            label: (
                <button
                    className={`hover:cursor-pointer lg:flex items-center justify-center p-1 m-1 sec7 w-44   text-lg text-center drop-shadow rounded-lg bg-secondary text-white`}
                    onClick={() => setShowRecherche(true)}>
                    <span>{"Rechercher"}</span>
                </button>
            ),
        },
        {
            key: '2',
            label: (
                <button
                    className={`hover:cursor-pointer lg:flex items-center justify-center p-1 m-1 sec7 w-44   text-lg text-center drop-shadow rounded-lg  bg-secondary text-white`}
                    onClick={() => setShowEvent(true)}>
                    <span>{"Publier"}</span>
                </button>
            ),
        }
    ];
    return (

        <Dropdown menu={{items}} className={'w-14 h-14  text-gray-10 self-end'} placement={"bottomRight"}>
            <button
                className={"w-14 h-14 drop-shadow-2xl shadow-xl bg-white rounded-full flex items-center justify-center p-1"}
                >
                <img src={logo}/>
            </button>
        </Dropdown>
    );
};

export default Options;