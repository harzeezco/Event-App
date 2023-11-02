import Link from "next/link";

function Button({children, link}) {
   return <Link href={link}><span className="btn">{children}</span></Link>;
}

export default Button;
