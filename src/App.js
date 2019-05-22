import React, { Component } from 'react';
const Warning = React.lazy(() => import('./Warning'));

const a = "b";
class App extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <h1>Hello!!</h1>
        <h2 className={this.state.count > 10 ? 'warning' : null}>
          Counter {this.state.count}
        </h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
        {this.state.count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default App;
