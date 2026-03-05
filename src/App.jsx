import "./App.css";
import StartView from "./views/StartView";
import ProfileView from "./views/ProfileView";
import LoginView from "./views/LoginView";
import LectureView from "./views/LectureView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/start" element={<StartView />} />
          <Route path="/profil" element={<ProfileView />} />
          <Route path="/lektion/:id" element={<LectureView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
