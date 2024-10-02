import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { UserContextProvider } from "./Context/UserContext.tsx";
import { BasketProvider } from "./Context/BasketContext.tsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BasketProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </BasketProvider>
);
