import React from 'react';

class MinerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.data.wallet };
    this.handleMining = this.handleMining.bind(this);
  }

  handleMining() {
    this.setState({ count: this.props.data.wallet++ });
  }

  render() {
    return (
      <div className='row justify-content-center mt-5'>
        <div className='col-1 align-self-center'>
          <button className='btn btn-primary w-100' onClick={this.handleMining}>Mine</button>
          <h2 className="w-100 text-center">{this.state.count}</h2>
          <h2 className="badge bg-info text-dark w-100">blocks</h2>
        </div>
      </div>
    );
  }
}

export default MinerButton;
