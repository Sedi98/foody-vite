import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { UserContextProvider } from "./Context/UserContext.tsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <UserContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserContextProvider>
);
