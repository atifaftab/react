import Todo from "./components/Todos";

function App() {
  return (
    <div>
      <div>
        <h1>My Todos</h1>
        <Todo text='Learn React'/>
        <Todo text='Practise it '/>
        <Todo text='more and more'/>
      </div>
    </div>
  );
}

export default App;
