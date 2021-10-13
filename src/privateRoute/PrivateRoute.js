import React from 'react';
import {Route} from "react-router-dom";
import {Redirect} from "react-router";
import useAuth from '../useAuth/useAuth';
const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useAuth()
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
            
        
    );
};

export default PrivateRoute;