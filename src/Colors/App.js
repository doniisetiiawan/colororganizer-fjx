import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ColorProvider } from './hooks';
import AddColorForm from './addColorForm';
import ColorList from './colorList';
import './Colors.css';
import ColorDetails from './colorDetails';

function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route
          path="/"
          element={<ColorList />}
        />
        <Route
          path=":id"
          element={<ColorDetails />}
        />
      </Routes>
    </ColorProvider>
  );
}

export default App;
