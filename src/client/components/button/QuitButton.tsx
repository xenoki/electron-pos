type Props = {
  onClick: () => void;
};

export default function QuitButton({ onClick }: Props) {
  return (
    <button
      className='btn btn-secondary btn-lg shadow-xl grow'
      type='button'
      onClick={onClick}
    >
      Quit
    </button>
  );
}
