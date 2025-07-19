import React from 'react';
import { Header } from './components/Header/Header';

import './styles/global.css'
import { Tasks } from './components/Tasks/Tasks';
import { TasksProvider } from './components/Context/TaskContext';


function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />

      {/* <Refs /> */}

      {/* <Memorization financialDate={{income: [50, 30, 20], outcomes: [5, 8, 4]}}/> */}
    </TasksProvider>
  );
}

export default App;
