"use client"

import EventSummary from "@/components/events/event-summary";
import { getEventById } from "../../../../dummy-data";
import EventLogistics from "@/components/events/event-logistics";
import EventContent from "@/components/events/event-content";

function RouteById({ params }) {
  const event = getEventById(params.id)
  if (!event) {
    return <h1>Event Not found</h1>
  }

  
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent><p>{event.description}</p></EventContent>
    </>
  )
}

export default RouteById;
