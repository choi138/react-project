import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDo from './ToDo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </Router>
  );
}

export default App;
