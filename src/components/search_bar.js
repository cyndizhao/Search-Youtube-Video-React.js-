import React, {Component} from 'react';

class SearchBar extends Component{
  //how we initialize state
  constructor(props){
    super(props);

    this.state={term: ''};
    // this.onInputChange = this.onInputChange.bind(this);

  }
  render(){
    // return <input onChange={this.onInputChange} />
    return (
      <div className="search-bar">
        <span>Search Videos Here </span>
        <input value={this.state.term} onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    )
  }
  onInputChange(term){
    this.setState({term: term});
    this.props.onSearchItemChange(term);
  }
}
export default SearchBar;
