// App.jsx or index.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MessagePage from './components/MessagePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/message/:id" element={<MessagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
