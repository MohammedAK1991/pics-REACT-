import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit} className="ui form container" style={{marginBottom:'10px'}}>
          <div className="ui grid">
            <div className="eight wide column">
              <input
                // className="ui fluid search
                onSubmit={() => console.log('submimtted')}
                placeholder="Search for images"
                type="text"
                value={this.state.term}
                onChange={(event) => this.setState({ term: event.target.value})}/>
            </div>
            <div className="six wide column">
              <button type="submit" className="ui button primary">Search</button>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default SearchBar;