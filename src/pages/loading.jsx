import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

function Loading(props) {
    return (
        <div style={{ height: "100vh", margin: "auto", textAlign: "center" }}>
            <CircularProgress color="primary" />
        </div>
    );
}

export default Loading;