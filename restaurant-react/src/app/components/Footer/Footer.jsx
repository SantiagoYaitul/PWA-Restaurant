import { FaGithub } from "react-icons/fa";

export default () => {
   return <div className="fixed bottom-0 h-16 flex flex-row justify-between flex-nowrap w-full border-2 rounded-md">
      <div className="flex size-16">
         <img src="" alt="Logo ASA" className="size-full" />
      </div>

      <div className="flex flex-row justify-end w-48 right-0 top-1/2">
         <a className="size-full content-center" href="https://github.com/veraAlan"><FaGithub className="size-10" /></a>
         <a className="size-full content-center" href="https://github.com/acostaDemianAaron"><FaGithub className="size-10" /></a>
         <a className="size-full content-center" href="https://github.com/SantiagoYaitul"><FaGithub className="size-10 " /></a>
      </div>
   </div>
} 