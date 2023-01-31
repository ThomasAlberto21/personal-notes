import React from 'react';
import ArchiveButton from './ArchiveButton';
import ActiveButton from './ActiveButton';
import DeleteButton from './DeleteButton';
import NoteItemContent from './NoteItemContent';
import { showFormattedDate } from '../utils';

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onArchive,
  onActive,
  onDelete,
}) {
  return (
    <div className='note-item'>
      <NoteItemContent
        title={title}
        date={showFormattedDate(createdAt)}
        body={body}
      />

      <div className='note-item__action'>
        <DeleteButton id={id} onDelete={onDelete} />
        {archived ? (
          <ActiveButton id={id} onActive={onActive} />
        ) : (
          <ArchiveButton id={id} onArchive={onArchive} />
        )}
      </div>
    </div>
  );
}

export default NoteItem;
