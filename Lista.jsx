export default function Lista({ tarefas }) {
  // Componente funcional focado apenas em exibir o que recebe via props
  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index} style={{ marginBottom: '8px' }}>
          {tarefa}
        </li>
      ))}
    </ul>
  );
}