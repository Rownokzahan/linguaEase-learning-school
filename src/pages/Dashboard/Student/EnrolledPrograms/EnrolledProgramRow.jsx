const EnrolledProgramRow = ({ index, enrolledProgram }) => {
  const { title, instructor, duration, price } = enrolledProgram.program || {};

  return (
    <>
      <tr>
        <th className="px-6 py-8">{index}</th>
        <td className="px-6 py-8">{title}</td>
        <td className="px-6 py-8">{instructor}</td>
        <td className="px-6 py-8">{duration} weeks</td>
        <td className="px-6 py-8">${price}</td>

        <td className="px-8 py-8">{enrolledProgram?.transactionId}</td>
      </tr>
    </>
  );
};

export default EnrolledProgramRow;
