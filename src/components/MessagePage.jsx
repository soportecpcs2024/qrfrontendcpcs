import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MessagePage = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    const fetchMessage = async () => {
     
       
// Asegúrate de que el ID es correcto
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/message/${id}`);
        // const response = await axios.get(`https://backendqr-ns9q.onrender.com/message/${id}`);
        
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching message:', error); // Muestra cualquier error en la consola
        setMessage('Error al cargar el mensaje');
      }
    };

    fetchMessage();
  }, [id]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h4>Mensaje:</h4>
      <p>{message}</p>
    </div>
  );
};

export default MessagePage;
