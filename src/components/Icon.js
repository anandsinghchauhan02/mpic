import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook, faTwitter, faWhatsapp, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faHome, faPhone, faMap } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faHome, faPhone, faMap, faFacebook, faTwitter, faWhatsapp, faInstagramSquare);


const Icon = ({children, type='fas', classNames=''}) => {
    return (
        <FontAwesomeIcon className={classNames} icon={[type, children]} />
    )
}

export default Icon;