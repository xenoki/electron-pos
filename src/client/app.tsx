import { Routes, Route } from 'react-router-dom';
import LoginScreen from './features/login/LoginScreen';
import Dashboard from './features/dashboard';
import Account from './features/account';
import Purchase from './features/purchase';
import Membership from './features/membership';
import { useEffect } from 'react';
import { getAppInfo, selectName } from './features/info/infoSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

/** New Component */
import Login from './screens/Login';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAppInfo());
  }, []);

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
