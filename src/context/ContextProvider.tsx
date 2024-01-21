// Context Api
import React, { createContext, ReactNode, useState } from 'react';
import { ContextProps } from '../constants';
import {InitialInputs} from "../constants";
// Create the context with an initial state
const ContextApi = createContext<ContextProps | undefined>(undefined);

// Define a type for the context provider props
interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  // Define your state and methods here
  const [location, setLocation] =useState([51.5, -0.09]);
  const [show,setShow]=useState(false);
    const [open,setOpen]=useState(false);
    const [zoome, setZoome] = useState(13)
    const [tutos,setTutos]=useState(false);
    const [showEvent, setShowEvent] = useState(false)
    const [showRecherche, setShowRecherche] = useState(false)
    const [infoInput,setInfoInput]=useState(InitialInputs.eventGeneraleIput)
    const [addresseInput,setAddresseInput]=useState(InitialInputs.accessibiliteInput)
    const [current, setCurrent] = useState(0)
  return <ContextApi.Provider value={{current,setCurrent,addresseInput,setAddresseInput,infoInput,setInfoInput,showRecherche, setShowRecherche,tutos,setTutos,showEvent,setShowEvent,zoome,setZoome,open,setOpen,location,setLocation,show,setShow}}>{children}</ContextApi.Provider>;
};

export default ContextApi;


// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
    const context = React.useContext(ContextApi);

    if (context === undefined) {
        throw new Error("useAppContext must be used within a AppContextProvider")
    }
    return context;
}