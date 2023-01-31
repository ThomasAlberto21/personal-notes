import React from 'react';
import NoteSearch from './NoteSearch';

const NoteNavbar = ({ searchData }) => {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <NoteSearch  searchData={searchData} />
    </div>
  );
};

export default NoteNavbar;
