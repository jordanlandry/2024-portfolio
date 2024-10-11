import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import App from "./App";
import ChessPage from "./pages/chessPage/ChessPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/chess-page", element: <ChessPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
