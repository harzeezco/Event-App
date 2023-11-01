import React from "react";
import Next from "../../../public/next.svg"
import Image from "next/image";
import Link from "next/link";

function Header() {
   return <div className="flex justify-around py-6">
      <Link href="/">
         <Image src={Next} alt="next log" className="w-24"/>
      </Link>
      <nav>
         <ul className="flex items-center gap-10">
            <Link href={`/event/id`}>
               Event
            </Link>
            <Link href={`/event/id/DoSomething`}>
               Event [IDS]
            </Link>
         </ul>
     </nav>
  </div>;
}

export default Header;
