import React, { Component } from 'react';
import { Button } from 'reactstrap';


class App extends Component {
  handleClick = () => {
  alert (88)
//     import('./moduleA')
//       .then(({ moduleA }) => {
//         // Use moduleA
//       })
//       .catch(err => {
//         // Handle failure
//       });
  };

  render() {
    return (
      <Button onClick={this.handleClick} color="danger">Danger!</Button>
    );
  }
}

export default App;