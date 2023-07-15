type Props = {
  onClick?: () => void;
};

const HistoryButton = ({ onClick }: Props) => (
  <button
    className='btn-primary btn-lg btn mt-9 w-32 shadow-xl'
    onClick={onClick}
  >
    History
  </button>
);

export default HistoryButton;
