import React from 'react';
import NoteNavbar from './NoteNavbar';
import { getInitialData } from '../utils/index';
import NoteBody from './NoteBody';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchData: '',
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  }

  onArchiveHandler(id) {
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      ),
    });
  }

  onActiveHandler(id) {
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === id ? { ...note, archived: false } : note
      ),
    });
  }

  onSearchHandler({ searchData }) {
    this.setState(() => {
      return { searchData: searchData };
    });
  }

  render() {
    return (
      <>
        <NoteNavbar searchData={this.onSearchHandler} />
        <NoteBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          searchData={this.state.searchData}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onActive={this.onActiveHandler}
        />
      </>
    );
  }
}

export default NoteApp;
