import React from 'react';
import './App.css';
import {Header} from './components/Header'
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
     <Header />
     <TodoList todos={[
       {title: "Do dishes", isCompleted: true, description: "Brabo menó"}
       ]} />
    </div>
  );
}

export default App;
