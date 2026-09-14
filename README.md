# React Basic - Gerenciador de Tarefas 📝

Projeto desenvolvido para fixação e aplicação dos conceitos fundamentais do **React**, com foco na criação de componentes funcionais, manipulação de estado e estruturação modular de aplicações utilizando **Vite**.

---

## 🎯 Objetivos Atendidos

- [x] **Criar componentes funcionais:** Estrutura moderna baseada em funções e React Hooks.
- [x] **Trabalhar com estado:** Uso do hook `useState` para gerenciamento de dados reativos.
- [x] **Organizar aplicação React:** Separação clara de responsabilidades entre componentes.
- [x] **Criar aplicação simples com componentes:** Mini-aplicação funcional de lista de tarefas (To-Do List).
- [x] **Trabalhar com estado local:** Controle de entradas de formulário isolado no componente.

---

## 💡 Decisões de Arquitetura e Implementação

1. **Separação de Responsabilidades e Componentização:**
   - **`App.jsx` (Container Principal):** Atua como o ponto central da aplicação, concentrando o estado global da lista de tarefas (`tarefas`) e orquestrando a comunicação entre os componentes filhos.
   - **`Formulario.jsx` (Entrada de Dados):** Responsável exclusivamente pela captura da nova tarefa. Mantém um **estado local** (`texto`) para controlar o valor do input (padrão *controlled component*), valida se o texto não está vazio (`trim()`), envia o dado ao componente pai via função de callback (`onAdicionar`) e reseta o formulário após a submissão.
   - **`Lista.jsx` (Apresentação):** Componente puramente apresentacional (*stateless* / *dumb component*), recebendo a lista de tarefas via `props` e iterando com o método `.map()`.

2. **Elevação de Estado (*Lifting State Up*):**
   - O estado das tarefas foi colocado em `App.jsx` para permitir que dois componentes irmãos (`Formulario` e `Lista`) compartilhem dados de forma previsível e unidirecional (*one-way data flow*).

3. **Imutabilidade no Gerenciamento de Estado:**
   - Ao adicionar uma nova tarefa, foi utilizado o operador spread (`[...tarefas, novaTarefa]`), respeitando o princípio de imutabilidade do React e garantindo novas referências em memória para acionar a re-renderização correta dos componentes.

4. **Ambiente de Desenvolvimento Ágil com Vite:**
   - O projeto foi configurado com **Vite**, proporcionando inicialização instantânea do servidor de desenvolvimento, *Hot Module Replacement* (HMR) em milissegundos e suporte nativo a módulos ES (ESM).

---

## 📁 Estrutura de Arquivos

```text
react-basic/
├── App.jsx            # Componente raiz e gerenciador do estado da lista
├── Formulario.jsx     # Componente com formulário e estado local
├── Lista.jsx          # Componente de listagem e renderização
├── index.html         # Página HTML base com a div #root
├── main.jsx           # Ponto de entrada do React (ReactDOM.createRoot)
├── package.json       # Dependências e scripts do projeto
├── vite.config.js     # Configuração do Vite e plugin React
└── .gitignore         # Arquivos e pastas ignorados pelo Git
```

---

## 🚀 Instalação e Execução

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Gerenciador de pacotes `npm` (incluso no Node.js)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Luizssj21/React-basic.git
   cd React-basic
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   Abra a URL indicada no terminal (geralmente [http://localhost:5173](http://localhost:5173)).

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor local de desenvolvimento.
- `npm run build`: Gera a versão otimizada para produção na pasta `dist`.
- `npm run preview`: Visualiza localmente o build de produção.
