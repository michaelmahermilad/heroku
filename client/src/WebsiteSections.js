 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import { faVirusCovid,faBuildingColumns} from '@fortawesome/free-solid-svg-icons'

export const ArrayofSections = [
  { text: "Corona news", icon: <FontAwesomeIcon className="icons" icon={ faVirusCovid} />},
  {
    text: "Hearts care",
    icon: (
      ''
    ),
  },
  {
    text: "Lungs section",
    icon: (
     ''
    ),
  },
  { text: "Eyes care", icon: '' },
  {
    text: "Mental Health",
    icon: (
     '')
  },
  { text: "Studies", icon: <FontAwesomeIcon className="icons"  icon={faBuildingColumns} />},
];

