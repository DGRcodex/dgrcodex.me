// app/components/Footer.tsx
import styles from './Footer.module.css'; // Asegúrate de crear este archivo CSS

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <span>Sambalab 2024</span>
                {/* Espacio para otros elementos en el footer */}
            </div>
        </footer>
    );
};

export default Footer;
