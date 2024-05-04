import style from "./Button.module.css";


const Button = ({id}) => {
    return (
        <button className={style.button}>
            Ver mas + {id}
        </button>
    );
};

export default Button;