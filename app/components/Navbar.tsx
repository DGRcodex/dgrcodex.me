// app/components/Navbar.tsx
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                {/* Inserta tu logo aquí */}
            </div>
            <div>
                <a href="/" className={styles.navLink}>Inicio</a>
                <a href="/about" className={styles.navLink}>Sobre mí</a>
                <a href="/projects" className={styles.navLink}>Proyectos</a>
                <a href="/blog" className={styles.navLink}>Blog</a>
                <a href="/contact" className={styles.navLink}>Contacto</a>
            </div>
        </nav>
    );
};

export default Navbar;
