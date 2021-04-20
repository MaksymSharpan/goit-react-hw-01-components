import React from 'react';
import PropTypes from 'prop-types';
import transactions from './transactions.json'

import style from './TransactionHistory.module.scss'

function TransactionHistory() {
    return <>
        <table className={style.transactionHistory}>
            <thead className={style.thead}>
              <tr className={style.title}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

            <tbody>
              
        <Transaction items = {transactions} />
                
            </tbody>
            </table>
    </>
};
 
const Transaction = (items) => {
    return <>
        {transactions.map((item) => (
            <tr key = {item.id} className={style.item}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
                
        ))}
        </>
}

// Transaction.defaultProps = {
    
// }

// Transaction.PropTypes = {

// }
        
export default TransactionHistory;
