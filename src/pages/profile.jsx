import React, { useContext } from "react";
import { authContext } from "../services/auth";
import { Link } from "react-router-dom";

function Profile(props) {
    let auth = useContext(authContext);

    return (
        <div>
            This is my profile: {auth.user.displayName}
            <div>
                <button onClick={auth.logout}>Log out</button>
            </div>
            <div>
                <Link to="/"> Home </Link>
            </div>
        </div>
    );
}

export default Profile;