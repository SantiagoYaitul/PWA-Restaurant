import Link from "next/link";

export default () => {
   return <span className="flex pl-2">
      <span className="text-center text-lg">Made with: <Link href="https://nextjs.org/" className="font-extrabold">NextJS</Link></span>
   </span>;
}