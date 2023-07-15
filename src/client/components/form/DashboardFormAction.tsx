import { PropsWithChildren } from 'react';

export default function DashboardFormAction({ children }: PropsWithChildren) {
  return <div className='flex flex-col space-y-2 mt-4'>{children}</div>;
}
