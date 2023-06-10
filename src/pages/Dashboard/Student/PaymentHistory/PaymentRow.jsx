import moment from "moment";

const PaymentRow = ({ index, payment }) => {
  const { title, instructor, duration, price } = payment.program || {};

  return (
    <>
      <tr>
        <th className="px-6 py-8">{index}</th>
        <td className="px-6 py-8">{title}</td>
        <td className="px-6 py-8">{instructor}</td>
        <td className="px-6 py-8">{duration} weeks</td>
        <td className="px-6 py-8">${price}</td>
        <td className="px-8 py-8">{payment?.transactionId}</td>
        <td className="px-8 py-8">
          {moment(payment?.date).format("MM-DD-YYYY")}
        </td>
      </tr>
    </>
  );
};

export default PaymentRow;
