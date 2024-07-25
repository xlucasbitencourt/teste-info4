import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";
import PageLayout from "./layout/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
