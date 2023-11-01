import Image from "next/image";
import Link from "next/link";

function EventItem({ items }) {
   const { id, title, description, location, date, image } = items;
   
   const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
   });
   const formatAddress = location.replace(", ", "\n")
   const exploreLink = `/event/${id}`
   
   return <li>
      <Image src={"/" + image} alt={title} />
      <div>
         <div>
            <h1>{title}</h1>
            <div>
               <time>{humanReadableDate}</time>
               <br />
               <address>{formatAddress}</address>
            </div>
         </div>
         <div>
            <Link href={exploreLink}>Explore Event</Link>
         </div>
      </div>
  </li>;
}

export default EventItem;
