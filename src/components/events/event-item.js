import Image from "next/image";
import Button from "../ui/button";
import CalenderIcon from "../icons/calender-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import LocationIcon from "../icons/location-icon";

function EventItem({ items }) {
   const { id, title, description, location, date, image } = items;
   
   const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
   });
   const formatAddress = location.replace(", ", "\n")
   const exploreLink = `/event/${id}`
   
   return <li className="item">
      <Image  width={400} height={400} src={`/${image}`} className="w-full object-cover h-40" alt={title} />
      <div className="e-content"> 
         <div className="e-summary">
            <h1>{title}</h1>
            <div className="e-date">
                <CalenderIcon />
                <time>{humanReadableDate}</time>
            </div>
            <div className="e-address">
              <LocationIcon />
               <address>{formatAddress}</address>
            </div>
         </div>
         <div className="e-actions">
            <Button link={exploreLink}>
               <span>Explore Event</span>
               <span className="e-icon"><ArrowRightIcon /></span>
            </Button>
         </div>
      </div>
  </li>;
}

export default EventItem;
