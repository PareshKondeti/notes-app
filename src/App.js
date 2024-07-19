// App.js
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
