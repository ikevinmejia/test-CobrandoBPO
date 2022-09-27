import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';
import MainContent from '../components/MainContent';
import { ContextProvider } from '../Context/ContextProvider';


const AppRoutes = () => {

    const [auth, setAuth] = useState(false);
    useEffect(() => {
    const auth2 = getAuth();
    onAuthStateChanged(auth2, (user) => {
      if (user?.uid) {
        // console.log(user);
        // Posibilidad de recuperar la info luego de que se recargue la web
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, [auth]);

  return (
    <BrowserRouter>
    <ContextProvider>

      <Routes>
        <Route
          path="/"
          element={
            <PublicRouter isAutentication={auth}>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/createAccount"
          element={
            <PublicRouter isAutentication={auth}>
              <CreateAccount />
            </PublicRouter>
          }
        />


        <Route
          path="/Home"
          element={
            <PrivateRouter isAutentication={auth}>
                <MainContent/>
            </PrivateRouter>
          }
        />
      </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default AppRoutes