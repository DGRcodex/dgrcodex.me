

import React from 'react';
import Link from 'next/link';
import styles from './Redes.module.css';

 


const Redes = () => {
    const redesSociales = [
        {
            nombre: 'Instagram',
            icono: '/iconos/instagram.svg',
            enlace: 'https://www.instagram.com/d.g.r.codex',
        },
        {
            nombre: 'LinkedIn',
            icono: '/iconos/linkedin.svg',
            enlace: 'https://www.linkedin.com/in/dgrcodex',
        },
        {
            nombre: 'WhatsApp',
            icono: '/iconos/whatsapp.svg',
            enlace: 'https://api.whatsapp.com/send?phone=+56997188471&text=Hola, soy Daniel Garcia Rojas - Full Stack Developer',
        },
        {
            nombre: 'GitHub',
            icono: '/iconos/github.svg',
            enlace: 'https://github.com/dgrcodex',
        },
        
    ];

    return (
        <div className={styles.redes}>
            {redesSociales.map((red) => (
                <Link key={red.nombre} href={red.enlace} className={styles.redesLink}>
                    <img src={red.icono} alt={red.nombre} />
                </Link>
            ))}

            
        </div>
    );
};

export default Redes;
