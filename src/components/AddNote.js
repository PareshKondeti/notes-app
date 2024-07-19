import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Removed 'Navigate' import

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();  // Renamed variable

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/notes', { title, content })
      .then(response => {
        navigate('/');  // Corrected navigation method
      })
      .catch(error => {
        console.error('There was an error creating the note!', error);
      });
  };

  return (
    <div>
      <h1>Add Note</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Title" 
          required 
        />
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          placeholder="Content" 
          required 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNote;
