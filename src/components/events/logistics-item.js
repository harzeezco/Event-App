
function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li className="event-item">
      <span className="icon">
        <Icon />
      </span>
      <span className="event-content">{props.children}</span>
    </li>
  );
}

export default LogisticsItem;