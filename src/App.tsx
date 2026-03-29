import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Teams from "./pages/Teams";
import Products from "./pages/Products";
import Blog from "./pages/Blog";

import BlogCreate from "./pages/BlogCreate";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/products" element={<Products />} />
      <Route path="/blog" element={<Blog />} />
      
      <Route path="/blog/create" element={<BlogCreate />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
