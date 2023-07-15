import { PropsWithChildren } from 'react';

const Card = ({
  children,
  shadow,
}: PropsWithChildren<{ shadow?: boolean }>) => {
  return (
    <div className={`card bg-base ${shadow && 'shadow-xl'}`}>
      <div className='card-body'>{children}</div>
    </div>
  );
};

const Action = ({ children }: PropsWithChildren) => (
  <div className='flex flex-row justify-end gap-2'>{children}</div>
);

const PurchaseCard = ({
  children,
  shadow,
}: PropsWithChildren<{ shadow?: boolean }>) => {
  return (
    <div className={`card bg-base ${shadow && 'shadow-xl'}`}>
      <div className='card-body'>{children}</div>
    </div>
  );
};

Card.Purchase = PurchaseCard;
Card.Action = Action;

export default Card;
