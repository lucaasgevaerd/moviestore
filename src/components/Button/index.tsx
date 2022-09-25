import './styles.css';

type Props = {
  buttonText: string;
}

function Button({ buttonText }: Props) {
  return (
    <div className="button-container">
      <p className="button-text">{buttonText}</p>
    </div>
  )
}

export default Button