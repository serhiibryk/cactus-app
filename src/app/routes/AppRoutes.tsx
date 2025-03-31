import { BrowserRouter, Routes, Route } from "react-router-dom";

import CharacterDetails from "../pages/characterDetails/CharacterDetails";
import CharactersList from "../pages/charactersList/CharactersList";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<CharactersList />} />
      <Route path="/characters/:id" element={<CharacterDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
