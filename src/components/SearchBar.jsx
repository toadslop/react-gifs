import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
      blurredClasses: "form-control form-search",
      focusedClasses: "form-control form-search focused"
    };
  }
 
  handleChange = (event) => {
    this.props.search(event.target.value);
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  }

  handleBlur = () => {
    this.setState({ isFocused: false });
  }

  render() {
    return (
      <input type="text" className={this.state.isFocused ? this.state.focusedClasses : this.state.blurredClasses} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
