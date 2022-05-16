import React from "react";
import ContactInfo from "./ContactInfo"

const ContactList = (props) => {
    console.log(props)
    const renderContactList = props.contacts.map((contact) => {
        return <ContactInfo contact={contact}></ContactInfo>;
    })
    return <div className="ui celled list">
        {renderContactList}
    </div>;
};

export default ContactList;