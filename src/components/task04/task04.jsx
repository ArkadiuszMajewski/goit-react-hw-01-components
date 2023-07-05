import './task04.css';
export const TransactionHistory = props => {
  const Transaction = () => {
    return props.transactions.map(a => {
      const amount = a.amount;
      const currency = a.currency;
      const id = a.id;
      const type = a.type;

      return (
        <tr key={id}>
          <td className="transaction-history--body">{type}</td>
          <td className="transaction-history--body">{amount}</td>
          <td className="transaction-history--body">{currency}</td>
        </tr>
      );
    });
  };
  return (
    <table className="transaction-history">
      <thead className="transaction-history--head">
        <tr className="transaction-history--head--tr">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="transaction-tbody">
        <Transaction />
      </tbody>
    </table>
  );
};
