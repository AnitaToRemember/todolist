import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio/> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
</React.StrictMode>
);
