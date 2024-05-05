import Link from 'next/link';
import style from './Button.module.css';

const Button = ({ id }) => {
    
    return (
        <div className={style.container}>
            <Link href={`/pages/Details/?id=${id}`}>
                <button className={style.button}>
                    Detalles
                </button>
            </Link>
        </div>
    );
};

export default Button;




