import { React, useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Homesection from "./components/homesection";
import Preloader from "./components/preloader";

function App() {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      <Suspense fallback="loading">
        {isLoading ? <Preloader /> : null}
        <Header />
        <Routes>
          <Route path="/" element={<Homesection />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
