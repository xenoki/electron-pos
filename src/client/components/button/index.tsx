import AddButton from './AddButton';
import BackupButton from './BackupButton';
import DeleteButton from './DeleteButton';
import DoneButton from './DoneButton';
import FindButton from './FindButton';
import HistoryButton from './HistoryButton';
import LoginButton from './LoginButton';
import PrintButton from './PrintButton';
import QuitButton from './QuitButton';
import ReportButton from './ReportButton';

interface ButtonProps {
  name: string;
  onClick?: () => void;
}
const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button className='btn btn-primary btn-lg shadow-lg' onClick={onClick}>
      {name}
    </button>
  );
};

Button.Find = FindButton;
Button.Login = LoginButton;
Button.Print = PrintButton;
Button.Quit = QuitButton;
Button.Backup = BackupButton;
Button.Add = AddButton;
Button.Report = ReportButton;
Button.Done = DoneButton;
Button.Delete = DeleteButton;
Button.History = HistoryButton;

export default Button;
