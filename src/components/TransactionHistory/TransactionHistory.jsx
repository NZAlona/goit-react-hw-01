import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={clsx(css.container, css.tableStyle)}>
        <thead className={css.tableHeader}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={clsx(css.tableContent)}>
          {items.map(({ id, type, amount, currency }) => (
            <>
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};
