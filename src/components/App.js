import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, HashRouter, Switch} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import api from "../api/contacts";
//import './App.css';
import { Header } from './Header';
import { AddContact } from './AddContact';
import { ContactList } from './ContactList';
import { ContactDetail } from './ContactDetail';
import { EditContact } from './EditContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Working with json-server and axios ----------------------------
  // const retrieveContacts = async () => {
  //   const response = await api.get("/contacts");
  //   return response.data;
  // }
  //----------------------------------------------------------------


  // Working with localstorage
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact}]);
  }
  
  // Working with json-server and axios -----------------------------------
  // const addContactHandler = async (contact) => {
  //   const request = {
  //     id: uuid(),
  //     ...contact
  //   };

  //   const response = await api.post("/contacts", request);
  //   setContacts([...contacts, response.data]);
  // };
  //-----------------------------------------------------------------------


  // Working with localstorage
  const updateContactHandler = async (contact) => {
    setContacts(
      contacts.map((contactMap) => {
        return contactMap.id === contact.id ? contact : contactMap;
      })
    );
  };

  // Working with json-server and axios -------------------------------------------
  // const updateContactHandler = async (contact) => {
  //   const response = await api.put(`/contacts/${contact.id}`, contact);
  //   const {id, name, email} = response.data;

  //   setContacts(
  //     contacts.map((contact) => {
  //       return contact.id === id ? {...response.data} : contact;
  //     })
  //   );
  // };
  //-------------------------------------------------------------------------------


  // Working with localstorage
  const removeContactHandler = (id) => {
    const contactItemsNotDeleted = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(contactItemsNotDeleted);
  }

  // Working with json-server and axios ------------------------------------
  // const removeContactHandler = async (id) => {
  //   await api.delete(`/contacts/${id}`);
  //   const contactItemsNotDeleted = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

  //   setContacts(contactItemsNotDeleted);
  // }
  //------------------------------------------------------------------------
  

  // Working with localstorage and json-server and axios
  const searchHandler = (searchkeyTerm) => {
    setSearchTerm(searchkeyTerm);

    if (searchkeyTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchkeyTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };
  

  // Working with localstorage
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  // Working with json-server and axios --------------------------------------
  // useEffect(() => {
  //   const getAllContacts = async () => {
  //     const allContacts = await retrieveContacts();
  //     if (allContacts) {
  //       setContacts(allContacts);
  //     }
  //   };
  //   getAllContacts();
  // }, []);
  //--------------------------------------------------------------------------


  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, 1000);
  }, [contacts]);


  return (
    <div className="ui container">
      <HashRouter>
        <Header />
        <Routes>
          <Route 
            exact path="/" 
            element={<ContactList
              contacts={searchTerm.length < 1 ? contacts : searchResults} 
              removeContactHandler={removeContactHandler}
              term={searchTerm}
              searchKeyWord={searchHandler}
            />} 
          />
          <Route 
            path="/add" 
            element={<AddContact addContactHandler={addContactHandler}/>} 
          />
          <Route 
            path="/edit" 
            element={<EditContact updateContactHandler={updateContactHandler}/>} 
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
