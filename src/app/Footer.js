import React from "react";

import PROP_TYPES from "prop-types";

//functional component

export default function Footer(props) {
    
    return (
        <div>
            <hr />
            Copyrights@{props.year}, {props.company}
        
            <button onClick={() => props.contact()}>
                Contact
            </button>
        </div>
    )
}

//type checking
//propTypes is a keyword
Footer.propTypes = {
    //isRequired for mandatory
    year: PROP_TYPES.number.isRequired,
    company: PROP_TYPES.string,
    contact: PROP_TYPES.func
}

//used only if parent doesn't pass props
//keyword
Footer.defaultProps = {
    company: "Product App"
};