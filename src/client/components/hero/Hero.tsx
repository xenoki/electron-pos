import { PropsWithChildren } from 'react';

const Hero = ({ children }: PropsWithChildren) => {
  return (
    <div className='hero min-h-screen bg-base-200 bg-gradient-to-r from-primary to-secondary'>
      <div className='hero-content text-center'>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Hero;
