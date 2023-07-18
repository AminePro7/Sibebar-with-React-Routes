import { Route, Routes } from "react-router-dom";
import AllApps from "./pages/AllApps";
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Stroage from "./pages/Stroage";
import Sidebar from "./layouts/sidebar";

const App = () => {
  return (

    <div>
      <Sidebar />
      <main className="max-w-5xl flex-1 mx-auto py-4">
        <Routes>
          <Route path="/" element={<AllApps />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/stroage" element={<Stroage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/build/:bID" element={<Build />} />
          <Route path="/analytics/:aID" element={<Analytics />} />
        </Routes>
      </main>
    </div>


  );
};

export default App;
