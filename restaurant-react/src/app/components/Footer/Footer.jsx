import Link from "next/link";
import { FaInstagram, FaFacebookF, FaSquareXTwitter, FaSquareReddit, FaSteam, FaGithub } from "react-icons/fa6";

export default () => {
   return <div className="dark:bg-palette-background dark:text-palette-foreground flex flex-col md:flex-row justify-between flex-nowrap w-full border-t-2 rounded-t-xl px-2 py-3">
      <span className="flex pl-2">
         <span className="text-center text-lg">Made with: <Link href="https://nextjs.org/" className="font-extrabold">NextJS</Link></span>
      </span>

      <span>
         <span className="font-extrabold text-xl pb-2">Contact</span>
         <ul>
            <li>Delivery: +** ***-**** ****</li>
            <li>Email: approvedplusplus@support.com</li>
            <li>Location: Av. Argentina 145</li>
         </ul>
      </span>

      <span className="grid content-start">
         <span className="text-center font-extrabold text-2xl pb-2">Socials</span>
         <ul className="flex flex-row">
            <li><FaInstagram className="size-10" /></li>
            <li><FaFacebookF className="size-10" /></li>
            <li><FaSquareXTwitter className="size-10" /></li>
            <li><FaSquareReddit className="size-10" /></li>
            <li><Link href="https://store.steampowered.com/app/1868140/DAVE_THE_DIVER/"><FaSteam className="size-10" /></Link></li>
         </ul>
      </span>

      <span className="grid content-start px-10">
         <span className="text-center font-extrabold text-xl mb-2">Developers</span>
         <ul className="flex flex-row">
            <li className="size-10 mx-2 flex justify-contents-center">
               <Link href="https://github.com/acostaDemianAaron">
                  <FaGithub className="size-full" />
                  <span className="text-center">Aaron</span>
               </Link>
            </li>
            <li className="size-10 mx-2 flex justify-contents-center">
               <Link href="https://github.com/veraAlan" >
                  <FaGithub className="size-full" />
                  <span className="text-center">Aaron</span>
               </Link>
            </li>
            <li className="size-10 mx-2 flex justify-contents-center">
               <Link href="https://github.com/SantiagoYaitul" >
                  <FaGithub className="size-full" />
                  <span className="text-center">Santiago</span>
               </Link>
            </li>
         </ul>
      </span>
   </div>
}