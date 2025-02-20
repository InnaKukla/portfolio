import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loader from "./helpers/Loader/Loader";
import ScrollToTop from "./utils/scrollToTop";
import { ContainerApp } from "./main.styled";

const Layout = lazy(() => import("./components/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage/ProjectPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage/ProjectsPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ContainerApp>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ContainerApp>
  );
}

export default App;
