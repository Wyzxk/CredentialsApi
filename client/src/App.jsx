import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CredentialPage } from "./pages/CredentialPage";
import { CredentialFormPage } from "./pages/CredentialFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto font-bold ">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/credentials" />} />
          <Route path="/credentials" element={<CredentialPage />} />
          <Route path="/credentials-form" element={<CredentialFormPage />} />
          <Route path="/credentials/:id" element={<CredentialFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
