import { handlePrint } from '../../libs';

export default function PrintButton() {
  return (
    <button className='btn-secondary btn' type='button' onClick={handlePrint}>
      Print
    </button>
  );
}
