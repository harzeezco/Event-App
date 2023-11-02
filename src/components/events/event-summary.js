
function EventSummary(props) {
  const { title } = props;

  return (
    <section className="summary">
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;