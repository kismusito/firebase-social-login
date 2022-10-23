import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import store from "store";

import GlobalStyle from "utils/style/global-style";
import { theme } from "utils/style/theme";

import { PublicRoute } from "./public-route";
import { ProtectedRoute } from "./protected-route";

// Screens
import { Login } from "views/screens/login";
import { Dashboard } from "views/screens/dashboard";
import { AuthSubscriber } from "config/firebase/subscribers/AuthSubscriber";
import { Fragment } from "react";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AuthSubscriber>
          <Fragment>
            <GlobalStyle />
            <Router>
              <Routes>
                <Route path="/" element={<div>Landing</div>} />
                <Route
                  path="/login"
                  element={
                    <PublicRoute>
                      <Login />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/app"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<div>Not found</div>} />
              </Routes>
            </Router>
          </Fragment>
        </AuthSubscriber>
      </Provider>
    </ThemeProvider>
  );
};
