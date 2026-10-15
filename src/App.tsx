import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import KidsClasses from "./pages/KidsClasses";
import Camps from "./pages/Camps";
import AdultClasses from "./pages/AdultClasses";
import GalleryPage from "./pages/GalleryPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

/** Every page is pre-rendered to static HTML at build time (scripts/prerender.ts). */
export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="kids-art-classes" element={<KidsClasses />} />
        <Route path="art-camps" element={<Camps />} />
        <Route path="adult-art-classes" element={<AdultClasses />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
