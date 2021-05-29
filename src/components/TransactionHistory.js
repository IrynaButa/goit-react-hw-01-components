import React from 'react';
import Transaction from './Transaction'

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
    
     {/* <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr> */}
  </tbody>
</table>
    )
}
export default TransactionHistory;