import { useState } from 'react';
import Formulario from './Formulario';
import Lista from './Lista';

export default function App() {
  // Trabalhando com estado: array de tarefas
  const [tarefas, setTarefas] = useState([]); 

  // Função passada como "prop" para atualizar o estado
  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Minhas Tarefas</h1>
      
      {/* Renderizando componentes funcionais */}
      <Formulario onAdicionar={adicionarTarefa} />
      <Lista tarefas={tarefas} />
    </div>
  );
}