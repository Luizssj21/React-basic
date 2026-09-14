import { useState } from 'react';

export default function Formulario({ onAdicionar }) {
  // Estado local exclusivo para controlar o que o usuário digita
  const [texto, setTexto] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === '') return;
    
    onAdicionar(texto); // Envia o dado para o componente pai
    setTexto(''); // Limpa o estado local
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Digite uma nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}