import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { travelContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const {userLogin} = React.useContext(travelContext);
    const [loginUser, setLoginUser] = userLogin;
    return (
            <Route
      {...rest}
      render={({ location }) =>
        loginUser.isSignIn ? (
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