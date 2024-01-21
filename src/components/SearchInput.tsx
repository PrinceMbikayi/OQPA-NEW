// import {useAppContext} from "../context/ContextProvider.tsx";
import { Select} from "antd";
import {useState} from "react";


const SearchInput = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [Error, setError] = useState("")
    const [data, setData] = useState([{}])
    console.log(data)
        const handleSearche=async(place:string)=>{
            setIsLoading(true);
            setError("");
            try {
                const response = await fetch(`http://api.geonames.org/searchJSON?q=${place}&fuzzy=0.8&username=shako`);
                const json = await response.json();
                setData(json)
            } catch (error:any) {
                setError(error);
                console.log(Error)
            } finally {
                setIsLoading(false);
            }
        }

    return (
        <div>
            <Select showSearch={true}  size={"large"} placeholder={`${isLoading ? "Vueillez Patiente...":"Addresse..."}`}  filterOption={true} onSearch={(value:any)=>handleSearche(value)} options={
                //@ts-ignore
                data?.geonames?.map((items:any)=>(
                    {
                        label:<div className={"w-full flex  gap-2 "}>{items?.name + "  " + items.countryName +""+items.lat +""+items.lng}</div>,
                        value:items?.name
                    }
                ))
            } />

        </div>
    );
};

export default SearchInput;
