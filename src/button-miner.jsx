import React from 'react';

class MinerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleMining = this.handleMining.bind(this);
  }

  handleMining() {
    let c = this.state.count;
    c++;
    this.setState({ count: c });
  }

  render() {
    return (
      <div className='row justify-content-center mt-5'>
        <div className='col-1 align-self-center'>
          <button className='btn btn-primary w-100' onClick={this.handleMining}>Mine</button>
        </div>
      </div>
    );
  }
}

export default MinerButton;
