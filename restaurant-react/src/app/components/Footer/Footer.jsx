import style from "./Footer.module.css";
import ToolsInfo from "../ToolsInfo/ToolsInfo";
import Contact from "../Contact/Contact";
import Socials from "../Socials/Socials";
import Devs from "../Devs/Devs";

export default () => {
   return <div className={style.container}>
      <ToolsInfo commonStyle={style} />
      <Contact commonStyle={style} />
      <Socials commonStyle={style} />
      <Devs commonStyle={style} />
   </div>;
}