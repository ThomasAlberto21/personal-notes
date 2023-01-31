import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleLimit: 50,
      bodyLimit: 5000,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  // ! Title
  onTitleChangeHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value.slice(0, this.state.titleLimit),
      };
    });
  }

  // ! Body
  onBodyChangeHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value.slice(0, this.state.bodyLimit),
      };
    });
  }

  // ! Button Submit
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);

    this.setState(() => {
      return {
        title: '',
        body: '',
      };
    });
  };

  render() {
    const { title, body } = this.state;

    return (
      <div className='note-input'>
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          {/* Title */}
          <p className='note-input__title__char-limit'>
            Sisa karakter: {this.state.titleLimit - this.state.title.length}
          </p>
          <input
            type='text'
            name='title'
            value={this.state.title}
            className='note-input__title'
            onChange={this.onTitleChangeHandler}
            placeholder='Ini Adalah Judul....'
          />

          {/* Body */}
          <p className='note-input__title__char-limit'>
            Sisa karakter: {this.state.bodyLimit - this.state.body.length}
          </p>
          <textarea
            type='text'
            name='body'
            value={this.state.body}
            className='note-input__body'
            onChange={this.onBodyChangeHandler}
            placeholder='Tambahkan Catatanmu Disini....'
          />

          {/* Button */}
          <button type='submit' disabled={!title || !body}>
            Add Note
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
