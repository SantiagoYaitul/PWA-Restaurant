import Link from 'next/link';
import style from './Button.module.css';

const Button = ({ redirect, text }) => {

    return (
        <div className={style.container}>
            <Link href={redirect}>
                <button className={style.button}>
                    {text}
                </button>
            </Link>
        </div>
    );
};

export default Button;




