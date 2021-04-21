import React from 'react';
import PropTypes from 'prop-types';

import style from './TransactionHistory.module.scss';

function TransactionHistory({ transactions }) {
  const transactionElem = transactions.map(item => (
    <tr key={item.id} className={style.item}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));
  return (
    <>
      <table className={style.transactionHistory}>
        <thead className={style.thead}>
          <tr className={style.title}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>{transactionElem}</tbody>
      </table>
    </>
  );
}

TransactionHistory.defaultProps = {
  transactions: [],
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.number,
    }),
  ).isRequired,
};

export default TransactionHistory;
