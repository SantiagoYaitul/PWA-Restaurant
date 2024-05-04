import Link from 'next/link';
import style from './Button.module.css';

const Button = ({ id }) => {
    
    return (
        <div>
            <Link href={`/pages/Details/?id=${id}`}>
                <button className={style.button}>
                    Ver más + {id}
                </button>
            </Link>
        </div>
    );
};

export default Button;




