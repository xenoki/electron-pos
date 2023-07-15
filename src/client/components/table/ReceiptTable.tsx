const renewHeaders = [
  'Account',
  'Since',
  'Phone',
  'Name',
  'Type',
  'Fee',
  'Renew',
  'Gallon',
  'Prev',
  'Remain',
  'Date',
  'Time',
  'Actions',
];

const ReceiptTable = () => {
  return (
    <div className='mb-8 overflow-x-auto rounded-2xl shadow-xl'>
      <table className='table w-full '>
        <thead>
          <tr>
            {renewHeaders.map((item, idx) => (
              <th key={idx}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11234</td>
            <td>10/12/2005</td>
            <td>408-386-5089</td>
            <td>Hung Quach</td>
            <td>Renew</td>
            <td>$25</td>
            <td>100</td>
            <td>150</td>
            <td>1</td>
            <td>100</td>
            <td>5/18/2023</td>
            <td>1:48:55 PM</td>
            <td>
              <button className='btn-warning btn-lg btn w-full '>Print</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReceiptTable;
