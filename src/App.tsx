import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from "./route/Details";
import ToDo from './route/List';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
