import React from 'react';
import reactDOM from'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:null,
    }
  }
  render() {
    return (
      <div>
        <h1>This is the React App File!</h1>
      </div>
    )
  }
}

export default App;

reactDOM.render(<App />, document.getElementById('app'));