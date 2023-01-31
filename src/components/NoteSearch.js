import React from 'react';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchData: '',
    };

    this.onDataChangeHandler = this.onDataChangeHandler.bind(this);
  }

  onDataChangeHandler(e) {
    this.setState({ searchData: e.target.value }, () => {
      return this.props.searchData(this.state);
    });
  }

  render() {
    return (
      <div className='note-search'>
        <input
          type='search'
          placeholder='Cari catatan ...'
          value={this.state.searchData}
          onChange={this.onDataChangeHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
