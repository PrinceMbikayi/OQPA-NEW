import { driver } from "driver.js";
import 'driver.js/dist/driver.css';


const driverObj = driver({
    // showProgress: true,
    steps: [
     { element: '.sec', popover: { title: 'Zone de recherche', description: 'Cette zone vous permet de recherche un lieu ou evenement' } },
      { element: '.sec1', popover: { title: 'Champ de Saisie', description: 'Ce Champ de saisie vous permettra de saisir le nom de l\'evement ou le lieu' } },
      { element: '.sec2', popover: { title: 'Icon de recherche', description: 'Apres la saisie vous devez cliquer sur cette icon pour passer a la recherche' } },
      { element: '.sec3', popover: { title: 'Redirection', description: 'Apres que le systeme trouve l\'emplacement vous pouvez clique sur cette icon pour vous diriger a l\'endroit moyenant la carte' } },
      { element: '.sec4', popover: { title: 'Regarder', description: 'Pour voir l\'endroit et ses environs' } },
      { element: '.sec5', popover: { title: 'Apprendre', description: 'Pour en savoir plus sur l\'endroit et ses environs' } },
      { element: '.sec6', popover: { title: 'Participer', description: 'Pour reserve sa place a l\'evenement' } },
      { element: '.sec7', popover: { title: 'Connexion ou Inscription', description: 'Ce bouton te permettra de connecte au systeme ou creeton compte' } },
      { element: '.sec8', popover: { title: 'Carte', description: 'Apres la recherche le resultat sera indique ici' } },
    ]
  });


const Driver=driverObj.drive()

export default Driver;
