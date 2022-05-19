import React from 'react';

class MinerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleMining() {
    let c = this.state.count;
  }

  render() {
    return (
          <button className='btn btn-primary w-100' onClick={this.handleMining}>Mine</button>      </div>
    );
  }
}
