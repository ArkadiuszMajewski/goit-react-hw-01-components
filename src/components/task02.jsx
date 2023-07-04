import './task02.css';
export const Statistics = props => {
  const StatMap = () => {
    return props.stats.map(a => {
      const label = a.label;
      const percentage = a.percentage;
      const id = a.id;
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);

      return (
        <li
          key={id}
          className="item"
          style={{ backgroundColor: `#${randomColor}` }}
        >
          <span className="statistics-label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      );
    });
  };
  return (
    <section className="statistics">
      <h2 className="title">{props.title}</h2>
      <ul className="stat-list">{StatMap()}</ul>
    </section>
  );
};
