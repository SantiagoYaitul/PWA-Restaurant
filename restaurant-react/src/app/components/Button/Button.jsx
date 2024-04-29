import style from "./Button.module.css";
import { FaCat } from "react-icons/fa";


const Button = () => {
    return (
        <button className={style.button}>
            <FaCat />
        </button>
    );
};

export default Button;