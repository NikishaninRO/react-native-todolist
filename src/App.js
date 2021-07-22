import React from 'react';
import MainLayout from './MainLayout';
import TodoState from './context/todo/TodoState';
import ScreenState from './context/screen/ScreenState';

function App() {
  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
}

export default App;
