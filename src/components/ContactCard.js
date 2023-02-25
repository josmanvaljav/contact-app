import React from "react";
import { Link } from "react-router-dom";
import userImg from "../images/user.png";

function ContactCard(props) {
    const {id, name, email} = props.contact;

    return (
        <div className="item"
            style={{paddingTop: "6px", paddingBottom: "6px"}}
        >
            <img className="ui avatar image" src={userImg} alt="user" />
            <div className="content">
                <Link 
                    to={`/contact/${id}`}
                    state={{name: name, email: email}}
                >
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i 
                className="trash alternate outline icon right floated"
                style={{color: "red", marginTop: "7px", marginLeft: "10px", cursor: "pointer"}}
                onClick={() => props.clickHandler(id)}
            ></i>
            <Link
                to={"/edit"}
                state={{id: id, name: name, email: email}}
            >
                <i 
                    className="edit alternate outline icon right floated"
                    style={{color: "blue", marginTop: "7px"}}
                ></i>
            </Link>
        </div>
    );
}

export { ContactCard };