import React from 'react';

import transactions from './transactions.json'

function TransactionHistory() {
    return <>
        <table className="transaction-history">
            <thead>
              <tr>
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
            <tr key = {item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
                
        ))}
        </>
}
        
export default TransactionHistory;
