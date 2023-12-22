import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="sahasouvik.us.auth0.com"
      clientId="3pzwU47v6F93WNawZ9Lq5P0Pugtc4g8M"
      authorizationParams={{
        redirect_uri: "https://real-estate-full-stack-snowy.vercel.app",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
