const showLabel = (label) => {
  alert(`A label desse botão é: ${label}`);
};

const Button = (props) => {
  return <button onClick={() => showLabel(props.label)}>{props.label}</button>;
};

export default Button;
