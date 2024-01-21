/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
//import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent,useMapEvents, Polyline} from 'react-leaflet'
import L from 'leaflet';
import mar from '../assets/marquer.png';
import { useAppContext } from '../context/ContextProvider';
import { useState,useRef,useMemo,useCallback, useEffect } from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../config/store";
import {getValue} from "../helpers";
import { IoLocationOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { MdEuroSymbol } from "react-icons/md";





const marqueIcon=new L.Icon({
    iconUrl: mar,
    iconSize:[45,45],
    iconAnchor:[17,47],
    popupAnchor:[0,-46],
})
const Carte = () => {

const animateRef = useRef(false)
const {zoome,setLocation,location}=useAppContext();
const [draggable, setDraggable] = useState(false)
const {data_position} = useSelector((state: RootState) => state.addresse)||getValue("addresse");
const center=data_position && data_position?.slice(0,1)
function DraggableMarker() {
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])


  return (
    < >
        {
            data_position && data_position?.map((items:[],index:number)=>(
                <Marker
                    icon={marqueIcon}
                    draggable={draggable}
                    eventHandlers={eventHandlers}
                    position={[items.latitude,items.longitude]}
                    // ref={markerRef}
                >
                    <Popup minWidth={120} className={"bg-gray-20"}>
                        <div className={"flex flex-col w-[100%] gap-2"} onClick={toggleDraggable}>
                            <img src={items.thumbnailUrl
                            } alt="" key={items.locationName} className={"object-cover w-full rounded-lg"}/>
                            <div className={"flex flex-col items-center gap-1"}>
                                <span className={"flex gap-1 w-full "}>
                                <CiUser  size={25}/>
                                <span
                                    className={"text-gray-700  font-semibold mt-1"}> {items.title} </span>
                            </span>
                                <span className={"flex gap-1 items-center w-full "}>
                                <IoLocationOutline size={25}/>
                                <span
                                    className={"text-gray-700 text-[12px] font-semibold mt-1"}> {items.locationName} </span>
                            </span>
                                <span className={"flex gap-1 items-center w-full "}>
                                <MdEuroSymbol size={25}/>
                                <span
                                    className={"text-gray-700 text-[12px] font-semibold mt-1"}> Abordable</span>
                            </span>

                            </div>

                            <button className={"text-white bg-secondary h-10 rounded-full font-bold"}>Lire L'Article
                            </button>
                        </div>
                    </Popup>
                </Marker>
            ))
        }
    </>
  )
}

    function SetViewOnClick({animateRef}) {
        const map = useMapEvent('click', (e) => {
            map.setView(center && [center[0]?.latitude, center[0]?.longitude], map.getZoom(), {
                animate: animateRef.current || false,
            })
        })

        return null
    }

    function MyComponent() {
        const map = useMapEvent('click', () => {
            map.setView([50.5, 30.5], map.getZoom())
        })
        return null
    }

//use Location
    function LocationMarker() {
        // const [position, setPosition] = useState(null)
        //
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setLocation(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return location === null ? null : (
            <Marker position={location}  >
                <Popup>
                  <h3>Votre Position Actuelle</h3>
                </Popup>
            </Marker>
        )
    }

    // @ts-ignore
    return (

        <MapContainer center={location} zoom={zoome}

                      className='h-screen z-0'
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=63f84WV3OnIxwhsgD1sK"
    />

     <SetViewOnClick animateRef={animateRef} />
     <DraggableMarker/>
    <LocationMarker/>
  </MapContainer>
  )
}

export default Carte;