interface buttonProps {
  text: string;
  color: string;
  onClick: () => void;
}

export const Button = ({ text, color, onClick }: buttonProps) => {
  return (
    <button onClick={onClick} type="button" className={"btn btn-" + color}>
      {text}
    </button>
  );
};
