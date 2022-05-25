import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import { faVirusCovid,faBuildingColumns} from '@fortawesome/free-solid-svg-icons'

export const ArrayofSections = [
  { text: "Corona news", icon: <FontAwesomeIcon className="icons" icon={ faVirusCovid} />},
  {
    text: "Hearts care",
    icon: (
      <Icon className="icons"
     icon="medical-icon:cardiology"
      />
    ),
  },
  {
    text: "Lungs section",
    icon: (
      <Icon className="icons"
        icon="medical-icon:respiratory"
      />
    ),
  },
  { text: "Eyes care", icon: <Icon className="icons"  icon="medical-icon:ophthalmology" /> },
  {
    text: "Mental Health",
    icon: (
      <Icon  className="icons"
        icon="medical-icon:mental-health"
      />
    ),
  },
  { text: "Studies", icon: <FontAwesomeIcon className="icons"  icon={faBuildingColumns} />},
];

