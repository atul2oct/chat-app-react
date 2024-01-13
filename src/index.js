import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { RefreshProvider } from "./context/RefreshContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <RefreshProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </RefreshProvider>
    </ChatContextProvider>
  </AuthContextProvider>
);
