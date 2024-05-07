import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Bienvenido a nuestra <span className="italic text-white">Parrilla A++</span></h1>
            </div>
        </div>
    );
}
