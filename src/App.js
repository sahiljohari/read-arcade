import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./utils/routes";
import { GlobalProvider } from "./store/context";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {routes.map(
                (route) =>
                  route.access && (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact
                      component={route.component}
                    />
                  )
              )}
            </Switch>
          </Suspense>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
