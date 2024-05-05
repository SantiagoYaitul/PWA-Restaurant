import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default ({ redirect, name }) => {
   return (
      <Link className="link-git " href={redirect}>
         <div className="size-12 relative">
            <FaGithub className={"size-full absolute hover:animate-flip"} />
            <span className={"text-center absolute invisible hover:animate-flip"}>{name}</span>
         </div>
      </Link>);
}