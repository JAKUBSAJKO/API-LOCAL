import React, { Suspense, lazy, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Api from "./components/api test/Api";

const Skills = lazy(() => import("./components/skills/Skills.js"));
const Nav = lazy(() => import("./components/nav/Nav.js"));
const Content = lazy(() => import("./components/example/Content.js"));
const Main = lazy(() => import("./components/main/Main.js"));
const Leniwy = lazy(() => import("./components/leniwy/Leniwy.js"));
const Foto = lazy(() => import("./components/foto/Foto.jsx"));

function App() {
  const comment = "To piszę z app.js";
  const [zmienNapis, setZmienNapis] = useState("zwykły");
  const [pytanie, setPytanie] = useState("");
  return (
    <div className="App">
      <Router>
        <Suspense
          fallback={
            <div className="lazy-container">
              <h1>Wczytywanie...</h1>
            </div>
          }
        >
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Main pytanie={pytanie} setPytanie={setPytanie} />}
            />
            <Route path="/skill" element={<Skills />} />
            <Route
              path="/content"
              element={
                <Content
                  comment={comment}
                  zmienNapis={zmienNapis}
                  setZmienNapis={setZmienNapis}
                />
              }
            />
            <Route path="/leniwy" element={<Leniwy />}></Route>
            <Route path="/foto" element={<Foto />}></Route>
            <Route
              path="/api"
              element={<Api pytanie={pytanie} setPytanie={setPytanie} />}
            ></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
