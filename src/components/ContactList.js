import React from "react";
import ContactInfo from "./ContactInfo"

const ContactList = (props) => {
    console.log(props)
      
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return ( 
            <ContactInfo contact={contact} 
            clickHandler = {deleteContactHandler}
            key = {contact.id} />
        );
    });
    return <div className="ui celled list"> {renderContactList} </div>;
};

export default ContactList;