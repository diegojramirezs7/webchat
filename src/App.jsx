import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/loginPage';
import Home from './pages/home';
import { AuthProvider } from './services/auth';
import PrivatePageWrapper from './pages/privatePageWrapper';
import Profile from './pages/profile';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  // typography: {
  //   h2: {
  //     color: "#fff",
  //   },
  //   body1: {
  //     color: "#fff",
  //   }
  // },
  palette: {
    primary: {
      main: "#777",
      secondary: "#3e3e3e",
    },
  },
});

function RootContainer(props) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <PrivatePageWrapper>
                  <Home />
                </PrivatePageWrapper>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivatePageWrapper>
                  <Profile />
                </PrivatePageWrapper>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}


function App() {
  return <RootContainer />
}

export default App;
