import Tasklist from "./components/Tasklist";
import TaskForm from "./components/TaskFrom";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <Tasklist />
      </div>
    </main>
  );
}

export default App;
