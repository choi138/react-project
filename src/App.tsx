import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Write from "./component/writeForm/Write";
import Header from "./header/Header";
import Details from "./route/Details";
import Edits from "./route/Edits";
import Home from "./route/Home";
import ToDo from './route/List';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/list" element={<ToDo />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edits />} />
      </Routes>
    </Router>
  );
}

export default App;
