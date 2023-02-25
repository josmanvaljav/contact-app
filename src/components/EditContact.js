import React, {useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function EditContact(props) {
    const navigate = useNavigate();
    const location = useLocation();

    const state = {
        id: "",
        name: "",
        email: ""
    };
    const [inputName, setInputName] = useState(location.state.name);
    const [inputEmail, setInputEmail] = useState(location.state.email);

    // setInputName(location.state.name);
    // setInputEmail(location.state.email);

    const update = (e) => {
        e.preventDefault();

        if (inputName === "" || inputEmail === "") {
            alert("All the fields are mandatory!");
            return;
        }
        state.id = location.state.id;
        state.name = inputName;
        state.email = inputEmail;

        props.updateContactHandler(state);
        setInputName("");
        setInputEmail("");
        
        navigate("/");
    };

    return (
        <div className="ui main">
            <h2
                style={{marginTop: "30px"}}
            >Edit Contact</h2>
            <form className="ui form" onSubmit={(e) => update(e)}>
                <div className="field">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                    />
                </div>
                <button className="ui button blue">Edit</button>
            </form>
        </div>
    );
};

export { EditContact };