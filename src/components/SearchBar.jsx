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
    const { search } = this.props;
    search(event.target.value);
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  }

  handleBlur = () => {
    this.setState({ isFocused: false });
  }

  render() {
    const { isFocused, focusedClasses, blurredClasses } = this.state;
    return (
      <input type="text" className={isFocused ? focusedClasses : blurredClasses} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
