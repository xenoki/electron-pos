type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

type InputProps = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
