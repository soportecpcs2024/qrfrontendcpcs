// App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MessagePage from './components/MessagePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta por defecto que redirige a /message/1 */}
        <Route path="/" element={<Navigate to="/message/1" replace />} />
        
        {/* Ruta que muestra el mensaje basado en el ID */}
        <Route path="/message/:id" element={<MessagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
