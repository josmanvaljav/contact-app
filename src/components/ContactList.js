import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "./ContactCard";

function ContactList(props) {
    const inputElement = useRef("");
    
    const deleteContactHandler = (id) => {
        props.removeContactHandler(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
                contact={contact} 
                clickHandler={deleteContactHandler} 
                key={contact.id}
            />
        )
    });

    const getSearchTerm = () => {
        props.searchKeyWord(inputElement.current.value);
    };

    return (
        <div className="main">
            <h2
                style={{marginTop: "30px"}}
            >
                Contact List
                <Link to="/add">
                    <button className="ui button blue right floated">Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input container"
                    style={{marginTop: "20px", marginBottom: "20px"}}
                >
                    <input 
                        ref={inputElement}
                        className="prompt" 
                        type="text" 
                        placeholder="Search Contacts"
                        value={props.term}
                        onChange={getSearchTerm}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList.length > 0 
                    ? renderContactList 
                    : "No Contacts available"}
            </div>
        </div>
    );
};

export { ContactList };