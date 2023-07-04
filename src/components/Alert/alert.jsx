import '../task03/task03';
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
