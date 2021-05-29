import React from 'react';
import PropTypes from 'prop-types'


const Transaction = ({type, amount,currency,id}) => {
    return (

    <tr  key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
        
    )
}
// Transaction.defaultProps = {
//   avatar: defaultImg

// }

Transaction.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired,
  
}
export default Transaction;