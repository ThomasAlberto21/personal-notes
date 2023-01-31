import React from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

function NoteBody({
  addNote,
  notes,
  searchData,
  onDelete,
  onArchive,
  onActive,
}) {
    
  const activeNotes = notes.filter(
    (note) =>
      note.archived === false &&
      note.title.toLowerCase().includes(searchData.toLowerCase().trim())
  );
  const archiveNotes = notes.filter(
    (note) =>
      note.archived === true &&
      note.title.toLowerCase().includes(searchData.toLowerCase().trim())
  );

  return (
    <div className='note-app__body'>
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Arsip</h2>
      <NoteList notes={archiveNotes} onDelete={onDelete} onActive={onActive} />
    </div>
  );
}

export default NoteBody;
