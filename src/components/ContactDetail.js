import React from "react";
import { Link, useLocation } from "react-router-dom";
import userImg from "../images/user.jpg";

function ContactDetail(props) {
    const location = useLocation();

    return (
        <div className="main"
            style={{marginTop: "30px"}}
        >
            <div className="ui card centered">
                <div className="image">
                    <img src={userImg} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{location.state.name}</div>
                    <div className="description">{location.state.email}</div>
                </div>
            </div>
            <div className="ui main"
                style={{marginTop: "20px", textAlign: "center"}}
            >
                <Link to="/">
                    <button className="ui button blue center">
                        Back to Contact List
                    </button>
                </Link>
            </div>
        </div>
    );
}

export { ContactDetail };