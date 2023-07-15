import { useNavigate } from 'react-router-dom';

export default function FindButton() {
  const navigate = useNavigate();

  return (
    <button className='btn-primary btn' onClick={() => navigate('/purchase')}>
      Find Membership
    </button>
  );
}
