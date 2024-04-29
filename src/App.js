import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";
import GPTSearch from "./components/GPTSearch";
import TVShows from "./components/TVShows";

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/gptsearch",
        element: <GPTSearch />,
      },
      {
        path: "/tvseries",
        element: <TVShows />,
      },
    ],
  },
]);
