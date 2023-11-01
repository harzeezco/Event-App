import EventItem from "./event-item";

function EventList({items}) {
  return <ul>
    {items.map(details => <EventItem key={details.id} items={details} />)}
  </ul>;
}

export default EventList;
