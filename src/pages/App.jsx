import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Auth";
import Error from "./Error";
import LandingPage from "./LandingPage";
import MainPage from "./MainPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage /> }/>
        <Route path='auth/*' element={<MainPage />} />
        <Route path="*" element={<Error error_type={404} />}/>
      </Routes>
    </Suspense>
  );
}

export default App;
