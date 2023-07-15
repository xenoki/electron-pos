import AccountField from './AccountField';
import BuyField from './BuyField';
import DateField from './DateField';
import FeeField from './FeeField';
import FirstNameField from './FirstNameField';
import GallonField from './GallonField';
import LastNameField from './LastNameField';
import NoteField from './NoteField';
import PasswordField from './PasswordField';
import PhoneField from './PhoneField';
import RemainField from './RemainField';
import SinceField from './SinceField';
import TimeField from './TimeField';
import UsernameField from './UsernameField';

function Field() {}

Field.Account = AccountField;
Field.Buy = BuyField;
Field.Account = AccountField;
Field.Note = NoteField;
Field.Date = DateField;
Field.Time = TimeField;
Field.FirstName = FirstNameField;
Field.LastName = LastNameField;
Field.Phone = PhoneField;
Field.Since = SinceField;
Field.Gallon = GallonField;
Field.Remain = RemainField;
Field.Fee = FeeField;
Field.Username = UsernameField;
Field.Password = PasswordField;

export default Field;
