import React from "react";

import Contact from "./Contact";

function ContactList(props) {
    return (
        <div>  {props.contacts.map(c => <Contact key={c.id} name={"Name: " + c.name + " | "} email={"Email: " + c.email + " | "} phone={"Phone " + c.phone} />)}
        </div>
    );
}

export default ContactList;