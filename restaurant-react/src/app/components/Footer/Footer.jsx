import GithubLink from "../GithubLink/GithubLink";
import Link from "next/link";

export default () => {
   return <div className="fixed bottom-0 h-16 flex flex-row justify-between flex-nowrap w-full border-t-2 rounded-sm px-2 pt-1">
      <div className="flex w-28">
         <span className="text-center">Made with <Link href="nextjs.org" className="font-extrabold">NextJS</Link></span>
      </div>

      <div className="flex flex-row justify-end w-48 right-0 top-1/2">
         <span className="place-self-center">Contacts:</span>
         <GithubLink redirect="https://github.com/acostaDemianAaron" name="Aaron Acosta" />
         <GithubLink redirect="https://github.com/veraAlan" name="Alan Vera" />
         <GithubLink redirect="https://github.com/SantiagoYaitul" name="Santiago Yaitul" />
      </div>
   </div>
}     