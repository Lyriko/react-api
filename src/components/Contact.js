import React from "react";
import "./Contact.css";

import PropTypes from "prop-types";


function Contact(props) {
    return (
        <div className="contact">
            <span>{props.name}</span>
            <span>{props.email}</span>
            <span>{props.phone}</span>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired
};


export default Contact;