/* eslint-disable @typescript-eslint/no-explicit-any */
const URL=import.meta.env.VITE_BASE_URL
const KEY_SITE=import.meta.env.VITE_CLE_SITE

// function to use localstorage

// first  function is to store the data
const setValue=(label:string, data:any)=>{
    if (typeof window !== "undefined") {
        localStorage.setItem(label,JSON.stringify(data));
    }
}
// second to get data 
const getValue=(label:string)=>{
    let datas = []
           try {
               const datalocal = localStorage.getItem(label);
               if (datalocal) {
                   datas= JSON.parse(datalocal)
               }
           } catch (e) {
            return null
        }
        return datas
    }


//remove store
const removeStorage = (label: string) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(label);
        
      } catch (e) {
        return null;
      }
    }
  };


  //clear All
  const ClearStorage = () => {
    if (typeof window !== 'undefined') {
        localStorage.clear()
        window.location.reload()
    }
}

const toastOption = {
    loading: 'Traitement encours',
    success: '',
    // error: (err: any) => `Erreur: ${err?.response?.data?.message.toString()}`,
    error: (error: any) => `Erreur: ${(error.response && error.response.data && error.response.data.message) ||
    error.message.toString() ||
    error.toString()}`,
}

export {URL,setValue,getValue,removeStorage,ClearStorage, toastOption,KEY_SITE}