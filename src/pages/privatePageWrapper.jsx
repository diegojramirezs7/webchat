import React, { useContext } from "react";
import { authContext } from "../services/auth";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Loading from "./loading";

export default function PrivatePageWrapper({ children }) {
    const auth = useContext(authContext);
    const location = useLocation();

    return (auth.loadingUser) ? <Loading />
        :
        (auth.user)
            ? children
            : <Navigate
                to="/login"
                replace
                state={{ path: location.pathname }}
            />
}