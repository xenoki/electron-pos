type Props = {
  onClick: () => void;
  loading: boolean;
};
export default function BackupButton({ onClick, loading }: Props) {
  return (
    <button
      // className='btn-accent btn btn-lg shadow-xl grow'
      className={`btn-accent btn btn-lg shadow-xl grow ${loading && 'loading'}`}
      type='button'
      onClick={onClick}
    >
      Backup
    </button>
  );
}
