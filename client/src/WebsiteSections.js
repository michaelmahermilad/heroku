 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import { faVirusCovid,faBuildingColumns,faHeartbeat,faBrain,faLungsVirus,faHeadSideMask,faEye} from '@fortawesome/free-solid-svg-icons'

export const ArrayofSections = [
  { text: "Corona news", icon: <FontAwesomeIcon className="icons" icon={ faVirusCovid} />},
  {
    text: "Hearts care",
    icon: ( 
      <FontAwesomeIcon className="icons" icon={ faHeartbeat} />
    ),
  },
  {
    text: "Lungs section",
    icon: (
      <FontAwesomeIcon className="icons" icon={ faLungsVirus} />
    ),
  },
  { text: "Eyes care", icon:   <FontAwesomeIcon className="icons" icon={ faEye} /> }, { text: "Studies", icon: <FontAwesomeIcon className="icons"  icon={faBuildingColumns} />},
  {
    text: "Mental Health",
    icon: (
      <FontAwesomeIcon className="icons"  icon={faBrain} />
     )
  },
 
];

