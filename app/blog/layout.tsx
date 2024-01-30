// app/blog/layout.tsx
import styles from './blogLayout.module.css';
import React from 'react'; // Asegúrate de importar React

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode; // Aquí especificas que `children` es del tipo `React.ReactNode`
}) {
    // Resto del componente

    return (
        <div className={styles.blogLayout}>
            <header className={styles.blogHeader}>
                <h1>Código Ergo Sum</h1>
            </header>
            <nav className={styles.blogNav}>
                {/* Índice, archivo, recomendados, etc. */}
            </nav>
            <main className={styles.blogMain}>
                {children}
            </main>
            {/* Otros componentes si es necesario */}
        </div>
    );
}

