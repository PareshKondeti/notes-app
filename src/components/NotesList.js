// components/NotesList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/notes')
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the notes!', error);
      });
  }, []);

  return (
    <div className="notes-list">
      <h1>Notes</h1>
      <Link to="/add" className="add-note-btn">+</Link>
      <div className="notes-grid">
        {notes.map(note => (
          <div key={note.id} className="note-card">
            <Link to={`/edit/${note.id}`}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList;