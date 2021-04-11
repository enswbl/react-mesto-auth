import React from "react";
import {Route, Redirect} from "react-router-dom";
import Footer from './Footer';

const ProtectedRoute = ({component: Component, ...props}) => {
    return (
        <Route>
            {() =>
                props.loggedIn ? <> <Component {...props} /> <Redirect to="/users/me"/> <Footer/> </> :
                    <Redirect to="/sign-up"/>
            }
        </Route>
    );
};

export default ProtectedRoute;