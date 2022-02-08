import React, { useContext, useState } from "react";
import { authContext, createUser } from "../services/auth";
import { useLocation, Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import Alert from "../components/alert";

import Box from '@mui/material/Box';
import CustomTextField from "../components/customTextField";

function LoginPage(props) {
    const auth = useContext(authContext);
    const { state } = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [showLoginCard, setShowLoginCard] = useState(true);

    const handleLogin = () => {
        auth.login(email, password);
    }

    const handleUserCreation = () => {
        auth.createUser(name, email, password);
    }

    const handleEmailChange = (ev) => {
        setEmail(ev.target.value);
    }

    const handlePasswordChange = (ev) => {
        setPassword(ev.target.value);
    }

    const handleNameChange = (ev) => {
        setName(ev.target.value);
    }

    return (auth.user)
        ? <Navigate
            to={state?.path || "/"}
            replace
        />
        : (
            <div style={{ minHeight: "102vh", backgroundColor: "#3e3e3e" }}>
                <Grid container spacing={2} sx={{ padding: "2rem", textAlign: "center" }}>
                    <Grid item lg={4} xs={12} sm={1}></Grid>
                    <Grid item lg={4} xs={12} sm={10}>
                        <Box mb={4}>
                            <Typography variant="h2">FastChat</Typography>
                            <Typography> by Phanhoo</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={4} xs={12} sm={1}></Grid>
                    {/* Card section */}
                    <Grid item lg={4} xs={12} sm={1} md={2}></Grid>
                    <Grid item lg={4} xs={12} sm={10} md={8}>
                        {(showLoginCard)
                            ? <React.Fragment>
                                <Card variant="outlined" sx={{ padding: "2rem" }}>
                                    <CardContent>
                                        <Box mb={2}>
                                            <CustomTextField label="email" value={email} onChange={handleEmailChange} />
                                        </Box>
                                        <Box mt={2}>
                                            {/* <TextField  /> */}
                                            <CustomTextField label="password" type="password"
                                                value={password} onChange={handlePasswordChange} />
                                        </Box>
                                    </CardContent>
                                    <CardActions>
                                        <Grid container>
                                            <Grid item md={2}></Grid>
                                            <Grid item md={8} xs={12}>
                                                <Button onClick={handleLogin} variant="contained" sx={{ margin: "1rem auto" }}> Log In </Button>
                                            </Grid>
                                            <Grid item md={2}></Grid>
                                            {/* Creating account */}
                                            <Grid item md={2}></Grid>
                                            <Grid item md={8} xs={12}>
                                                <Button sx={{ margin: "1rem auto" }} onClick={() => setShowLoginCard(false)}> Create Account </Button>
                                            </Grid>
                                            <Grid item md={2}></Grid>
                                        </Grid>
                                    </CardActions>
                                </Card>
                                <Snackbar open={auth.openSnack} autoHideDuration={2500} onClose={auth.closeSnack} anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
                                    <Alert onClose={auth.closeSnack} severity="error" sx={{ width: '100%' }}>
                                        Unable to login with provided email and password
                                    </Alert>
                                </Snackbar>
                            </React.Fragment>
                            : <React.Fragment>
                                <Card variant="outlined" sx={{ padding: "2rem" }}>
                                    <CardContent>
                                        <Box mb={2}>
                                            <CustomTextField label="Your Name" value={name} onChange={handleNameChange} />
                                        </Box>
                                        <Box mt={2} mb={2}>
                                            <CustomTextField label="email" value={email} onChange={handleEmailChange} />
                                        </Box>
                                        <Box mt={2}>

                                            <CustomTextField label="password" type="password"
                                                value={password} onChange={handlePasswordChange} />
                                        </Box>
                                    </CardContent>
                                    <CardActions>
                                        <Grid container>
                                            <Grid item md={2}></Grid>
                                            <Grid item md={8} xs={12}>
                                                <Button onClick={handleUserCreation} variant="contained" sx={{ margin: "1rem auto" }}>  Sign Up </Button>
                                            </Grid>
                                            <Grid item md={2}></Grid>
                                            <Grid item md={2}></Grid>
                                            <Grid item md={8} xs={12}>
                                                <Button sx={{ margin: "1rem auto" }} onClick={() => setShowLoginCard(true)} > Already have an account? Log In </Button>
                                            </Grid>
                                            <Grid item md={2}></Grid>
                                        </Grid>
                                    </CardActions>
                                </Card>
                                <Snackbar open={auth.openSnack} autoHideDuration={2500} onClose={auth.closeSnack} anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
                                    <Alert onClose={auth.closeSnack} severity="error" sx={{ width: '100%' }}>
                                        Unable to create user
                                    </Alert>
                                </Snackbar>
                            </React.Fragment>
                        }

                    </Grid>
                    <Grid item lg={4} xs={12} sm={1} md={2}></Grid>
                </Grid>
            </div>
        );
}

export default LoginPage;