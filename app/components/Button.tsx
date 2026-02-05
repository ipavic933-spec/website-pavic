type ButtonProps = {
  disabled?: boolean;
  onClick: () => void;
  text: string;
}

const Button = ({disabled = false, onClick, text}: ButtonProps) => {
  return (
    <button className="bg-yellow-400 py-2 px-5 text-black rounded-2x" disabled={disabled} onClick={onClick}>{text}</button>
  )
}

export default Button;