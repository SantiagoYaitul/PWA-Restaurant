import Link from "next/link";

export default ({ commonStyle }) => {
   return <span className={commonStyle.insideText + " md:basis-1/4"}>Sitio hecho con: <Link href="https://nextjs.org/" className="font-extrabold">NextJS</Link></span>;
}