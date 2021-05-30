import React from 'react';
import Transaction from './Transaction'
import PropTypes from 'prop-types'


const TransactionHistory = ({items}) => {
    return (

        
        <table >
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    
    {items.map(item => (
        
            <Transaction
            key={item.id} 
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        
      ))}
    
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;