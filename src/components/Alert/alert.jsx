import '../task03.css';
export const Alert = props => {
  return (
    <p
      className="status--field"
      style={{
        backgroundColor: getBgColor(props),
      }}
    ></p>
  );
};

const getBgColor = ({ variant }) => {
  const colors = {
    true: 'green',
    false: 'red',
    default: 'grey',
  };
  return colors[variant] || colors['default'];
};
