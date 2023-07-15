import { PropsWithChildren } from 'react';

const Action = ({ children }: PropsWithChildren) => (
  <div className='flex flex-row gap-2 mt-4'>{children}</div>
);

export default Action;
