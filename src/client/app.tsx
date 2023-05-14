import { Routes, Route } from 'react-router-dom';
import Login from './features/login';
import Dashboard from './features/dashboard';
import Account from './features/account';
import Purchase from './features/purchase';
import Membership from './features/membership';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/account' element={<Account />} />
      <Route path='/purchase' element={<Purchase />} />
      <Route path='/membership' element={<Membership />} />
    </Routes>
  );
}
