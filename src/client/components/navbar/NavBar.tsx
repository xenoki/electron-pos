import React, { useEffect, useState } from 'react';
import { AppInfo } from '../../../renderer';
import { CHANNEL } from '../../../electron/channel';

const initialState: AppInfo = {
  version: '',
  name: '',
};

interface NavBarProps {
  title?: string;
}
export default function NavBar({ title }: NavBarProps) {
  const [appInfo, setInfo] = useState<AppInfo>(initialState);

  useEffect(() => {
    const getAppInfo = async () => {
      // const { name, version } = await window.electronAPI.info();
      const { name, version } = await window.api.invoke<AppInfo>(
        CHANNEL.APP_INFO
      );

      setInfo({ name, version });
    };

    getAppInfo();
  }, []);

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'></div>
      <div className='navbar-center'>
        <p className='text-2xl  normal-case'>{title || appInfo.name}</p>
      </div>
      <div className='navbar-end'></div>
    </div>
  );
}
