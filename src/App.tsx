import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Teams from "./pages/Teams";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

import BlogCreate from "./pages/BlogCreate";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

import { authLoader } from "./loader/auth";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/teams", element: <Teams /> },
  { path: "/products", element: <Products /> },
  { path: "/blogs", element: <Blog /> },
  { path: "/blogs/:objectId", element: <BlogDetail /> },
  { path: "/blogs/create", element: <BlogCreate />, loader: authLoader },
  { path: "/auth", element: <Auth /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
