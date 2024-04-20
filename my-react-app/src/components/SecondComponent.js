import React, { Component } from 'react';
import '../App.css';

class SecondComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
    console.log('Component has been mounted.');
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
    console.log('Component is about to be unmounted.');
  }

  handleClick = () => {
    this.setState((prevState) => ({ isMounted: !prevState.isMounted }));
  };

  render() {
    return (
      <div className='second-component'>
        <h2>Second Component</h2>
        <button className='second-component-button' onClick={this.handleClick}>Click me!</button>
        {this.state.isMounted && <p>Component is currently mounted.</p>}
        {!this.state.isMounted && <p>Component is currently unmounted.</p>}
      </div>
    );
  }
}


export default SecondComponent;