import { FaInstagram, FaFacebookF, FaSquareXTwitter, FaSquareReddit, FaSteam } from "react-icons/fa6";
import Link from "next/link";
import style from "./Socials.module.css";

export default ({ commonStyle }) => {
   return <span className={commonStyle.listContainer}>
      <span className={commonStyle.title}>Sociales</span>
      <ul className={commonStyle.list + " " + style.list}>
         <li><Link href="#"><FaInstagram /></Link></li>
         <li><Link href="#"><FaFacebookF /></Link></li>
         <li><Link href="#"><FaSquareXTwitter /></Link></li>
         <li><Link href="#"><FaSquareReddit /></Link></li>
         <li><Link href="https://store.steampowered.com/app/1868140/DAVE_THE_DIVER/"><FaSteam /></Link></li>
      </ul>
   </span>;
}