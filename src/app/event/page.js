import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/../dummy-data";

function HomePage() {
  const getEventsFeatured = getFeaturedEvents()

  return <div><EventList items={getEventsFeatured} /></div>;
}

export default HomePage;
