import React, { useContext } from "react";
import { authContext } from "../services/auth";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";

function Home(props) {
    let auth = useContext(authContext);
    return (
        <div>
            <Sidebar />
            {/* You are on the home page {auth.user.displayName} <br />
            <button onClick={auth.logout}>
                Log out
            </button>
            <div>
                <Link to="/profile"> Go To Profile </Link>
            </div> */}
        </div>
    )
}

export default Home;