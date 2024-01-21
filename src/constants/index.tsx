import React from "react";

export interface ContextProps {
  location: (number)[];
  setLocation:React.Dispatch<React.SetStateAction<number[]>>;
  show: boolean;
  setShow:React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setOpen:React.Dispatch<React.SetStateAction<boolean>>;
  zoome:number,
  setZoome:React.Dispatch<React.SetStateAction<number>>;
  tutos:boolean;
  setTutos:React.Dispatch<React.SetStateAction<boolean>>
  showEvent: boolean;
  setShowEvent:React.Dispatch<React.SetStateAction<boolean>>;
  showRecherche: boolean;
  setShowRecherche:React.Dispatch<React.SetStateAction<boolean>>;
  infoInput:any,
  setInfoInput:React.Dispatch<React.SetStateAction<any>>;
  addresseInput:any,
  setAddresseInput:React.Dispatch<React.SetStateAction<any>>;
  current:number,
  setCurrent:React.Dispatch<React.SetStateAction<number>>
}

export const initialData=[
  {
    "distance": 4822484.71920115,
    "eventUrl": "https://openagenda.com/go31/events/numeriquement-votre-9674428",
    "idExternalApi": "6fc168f5fe736bd75c79fe41bcd256215d9c69f2",
    "title": "Numériquement Vôtre",
    "description": "Atelier à la MJC de Castanet-Tolosan",
    "conditions": "Entrée libre sur réservation par mail à accueil@mjccastanet.fr ou à l’accueil de la MJC",
    "imageUrl": "https://cibul.s3.amazonaws.com/5223f363d49d4943a806b74275f93ff5.base.image.jpg",
    "thumbnailUrl": "https://cibul.s3.amazonaws.com/5223f363d49d4943a806b74275f93ff5.thumb.image.jpg",
    "firstDate": "2023-01-06T13:30:00",
    "lastDate": "2023-07-07T14:30:00",
    "longitude": 1.497725,
    "latitude": 43.517171,
    "locationName": "MJC",
    "address": "20 avenue de Toulouse 31320 Castanet-Tolosan",
    "zipCode": "31320",
    "city": "Castanet-Tolosan",
    "department": "Haute-Garonne",
    "region": "Occitanie",
    "countryCode": "FR",
    "ageMin": null,
    "ageMax": null,
    "registration": "[{\"type\": \"email\", \"value\": \"accueil@mjccastanet.fr\"}]"
  },
  {
    "distance": 4830405.86944199,
    "eventUrl": "https://openagenda.com/echosciences/events/coupe-de-robotique-junior-2023-finale-regionale",
    "idExternalApi": "e9c187881d099b9420c9aad772da7717e0b683b7",
    "title": "Coupe de Robotique Junior 2023 - Finale régionale",
    "description": "Vivez la finale régionale de la Coupe de Robotique 2023 !\nAvec Planète Sciences Occitanie",
    "conditions": "Entrée gratuite pour assister aux courses de robots. L’entrée à la Cité de l’espace reste payante.",
    "imageUrl": "https://cibul.s3.amazonaws.com/b6401eb531e4476aac20d841289135b0.base.image.jpg",
    "thumbnailUrl": "https://cibul.s3.amazonaws.com/b6401eb531e4476aac20d841289135b0.thumb.image.jpg",
    "firstDate": "2023-04-01T08:00:00",
    "lastDate": "2023-04-01T16:00:00",
    "longitude": 1.491137,
    "latitude": 43.5887,
    "locationName": "Cité de l'espace",
    "address": "Avenue Jean Gonord, 31500 Toulouse, France",
    "zipCode": "31500",
    "city": "Toulouse",
    "department": "Haute-Garonne",
    "region": "Occitanie",
    "countryCode": "FR",
    "ageMin": null,
    "ageMax": null,
    "registration": null
  }
]

export const NoticeError={title: "Attention !",
    message: "Vueillez remplir tout les Champs !!!!",
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
  duration: 2000,
      onScreen: true
}}

export const NoticeSuccess={title: "Felicitation",
  message: "Votre Compte a etet cree !!!",
  type: "success",
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 2000,
    onScreen: true
  }}

export const ServerError={title: "Desole !!",
  message: "Une erreur inattendue est servenue!!!",
  type: "warning",
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 2000,
    onScreen: true
  }}
export const Noticelog={title: "Connexion",
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

export const steps = [
  {
    title: 'Général',
    content: "One",
  },
  {
    title: 'Accessibilité',
    content: 'Second-content',
  },
  {
    title: 'Billeterie',
    content: 'Last-content',
  },
  {
    title: "Social",
    content: 'Last-content',
  },
  // {
  //   title:"Invites",
  //   content: 'Last-content',
  // }
];

export const typeEvent=
[
    {label: "Apprendre", value: "Apprendre"},
    {label: "Regarder", value: "Regarder"},
    {label: "Participer", value: "Participer"},
]

export const categorieEvent=
    [

      {label: "Education", value: "Education"},
      {label: "Musique", value: "Musique"},
      {label: "Religion", value: "Religion"},
      {label: "Football", value: "Football"},
      {label: "Basktball", value: "Basktball"},
      {label: "Politique", value: "Politique"},
      {label: "Technologie", value: "Technologie"},
    ]
export const rechercheFiltres=
    [
      {label:"Ajouter Filtre",value: ""},
      {label: "Type", value: "Type"},
      {label: "Lieu", value: "lieu"},
      {label: "Periode", value: "quand"},
      {label: "Avec qui ?", value: "Avec"},
      {label: "Thematique", value: "thematique"},
      {label: "Endroit", value: "endroit"},
      {label: "Où", value: "où"},
    ]


const eventGeneraleIput={
  idExternalApi: "",
  apiSourceUrl: "",
  datasetName: "",
  timestamp: "",
  eventUrl: "",
  title: "",
  description: "",
  conditions: "",
  imageUrl: "",
  thumbnailUrl: "",
  firstDate: "",
  lastDate: "",
  longitude: 0,
  latitude: 0,
  locationName: "",
  address: "",
  zipCode: "",
  city: "",
  department: "",
  region: "",
  countryCode: "",
  ageMin: 0,
  ageMax: 0,
  registration: "",
  accessibilityPmr: true,
  accessibilityBlind: true,
  accessibilityDeaf: true,
  contactPhone: "",
  contactMail: "",
  audience: "",
  outdoorActivity: true,
  transport: "",
  details: "",
  categories: [],
  targetPopulation: "",
  infoAccessibility: "",
  publicOrPrivate: "",
  jsonAdditionalInfo:[{}],
  categoryId: 0,
  eventTypeId: 0,
  videoUrl:"",
  priceUnique: 0,
  nbPlace: 0,
  nbStand: 0,
  chatSpace: true,
  groupePrice: [""],
  webPage: [""],
  id: null
}
const accessibiliteInput={
  id: null,
  longitude:0,
  latitude: 0,
  locationName: "",
  address: "",
  zipCode: "",
  city:"",
  department: "",
  region: "",
  countryCode: "",
  accessibilityPmr: false,
  accessibilityBlind:false,
  accessibilityDeaf: false,
  infoAccessibility: "",
 eventTargetPopulations: []
}
const billeterieInput={
  id: null,
  priceUniqu: 1.56,
  groupePric: [
   {
      min: 0,
      max: 0,
      price: 0
    },
    ],
  nbSeat: 0,
  nbStand: 0,
  nbPlace: 0
}
const webpages= {
  id: null,
    chatSpace: false,
    webPage: [{id:null,link:""}]
}

export const InitialInputs={eventGeneraleIput,accessibiliteInput,webpages,billeterieInput}