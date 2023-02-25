import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

function AddContact(props) {
    const navigate = useNavigate();
    const state = {
        name: "",
        email: ""
    };
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const add = (e) => {
        e.preventDefault();

        if (inputName === "" || inputEmail === "") {
            alert("All the fields are mandatory!");
            return;
        }
        state.name = inputName;
        state.email = inputEmail;

        props.addContactHandler(state);
        setInputName("");
        setInputEmail("");
        
        navigate("/");
    };

    return (
        <div className="ui main">
            <h2
                style={{marginTop: "30px"}}
            >Add Contact</h2>
            <form className="ui form" onSubmit={(e) => add(e)}>
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
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
};


// class AddContact extends React.Component {
//     state = {
//         name: "",
//         email: ""
//     };

//     add = (e) => {
//         e.preventDefault();

//         if (this.state.name === "" || this.state.email === "") {
//             alert("All the fields are mandatory!");
//             return;
//         }

//         this.props.addContactHandler(this.state);
//         this.setState({name: "", email: ""});
//         console.log(this.props);
//     };

//     render() {
//         return (
//             <div className="ui main">
//                 <h2
//                     style={{marginTop: "60px"}}
//                 >Add Contact</h2>
//                 <form className="ui form" onSubmit={this.add}>
//                     <div className="field">
//                         <label>Name</label>
//                         <input 
//                             type="text" 
//                             name="name" 
//                             placeholder="Name"
//                             value={this.state.name}
//                             onChange={(e) => this.setState({name: e.target.value})}
//                         />
//                     </div>
//                     <div className="field">
//                         <label>Email</label>
//                         <input 
//                             type="text" 
//                             name="name" 
//                             placeholder="Email"
//                             value={this.state.email}
//                             onChange={(e) => this.setState({email: e.target.value})}
//                         />
//                     </div>
//                     <button className="ui button blue">Add</button>
//                 </form>
//             </div>
//         );
//     }
// }

export { AddContact };