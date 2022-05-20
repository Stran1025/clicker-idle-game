import React from 'react';

class PurchasableCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, price: this.props.price };
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handlePurchase() {

  }

  render() {
    return (
    <div className='col-2'>
      <div className='card'>
          <button onClick={this.handlePurchase} className='btn btn-secondary' data-bs-toggle="tooltip" data-bs-placement="top" title="Automatically mine 1 blocks every 10 seconds">
            {'Buy a ' + this.props.name}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{this.state.count}</span>
          </button>
          <h2 className="badge bg-danger text-dark w-50 mx-auto mt-1">for</h2>
          <h2 className="text-center">{this.state.price}</h2>
          <h2 className="badge bg-info text-dark w-50 mx-auto">blocks</h2>
      </div>
    </div>
    );
  }
}

export default PurchasableCard;
