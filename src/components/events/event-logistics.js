import Image from 'next/image';
import LogisticsItem from './logistics-item';
import CalenderIcon from '../icons/calender-icon';
import LocationIcon from '../icons/location-icon';

function EventLogistics({ event }) {
  console.log(event);
  const { date, location, image, imageAlt } = event;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = location.replace(', ', '\n');

  return (
    <section className="logistics">
      <div className="image">
        <Image width={400} height={400} src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className="event-list">
        <LogisticsItem icon={CalenderIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={LocationIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;