import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default ({ commonStyle }) => {
   return <span className={commonStyle.listContainer}>
      <span className={commonStyle.title}>Developers</span>
      <ul className={commonStyle.list}>
         <li>
            <Link className="grid justify-items-center" href="https://github.com/acostaDemianAaron">
               <FaGithub className="size-10" />
               <span className={commonStyle.insideText}>Aaron</span>
            </Link>
         </li>
         <li className="px-4">
            <Link className="grid justify-items-center" href="https://github.com/veraAlan" >
               <FaGithub className="size-10" />
               <span className={commonStyle.insideText}>Alan</span>
            </Link>
         </li>
         <li>
            <Link className="grid justify-items-center" href="https://github.com/SantiagoYaitul" >
               <FaGithub className="size-10" />
               <span className={commonStyle.insideText}>Santiago</span>
            </Link>
         </li>
      </ul>
   </span>;
};