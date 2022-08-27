import React from "react";
import { Route, Switch } from "react-router-dom";
import { Consumer } from "../Context";

const privateRoute = ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      {(context) => (
        <Route
          {...rest}
          render={(props) =>
            context.authenticatedUser ? (
              <Component {...props} />
            ) : (
              <Switch
                to={{
                  pathname: "/signin",
                  state: { from: props.location },
                }}
              />
            )
          }
        />
      )}
    </Consumer>
  );
};

export default privateRoute;
