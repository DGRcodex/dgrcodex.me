// AboutMe.tsx

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Aboutme.module.css';

const AboutMe: React.FC = () => {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const text = "I've had a dynamic career journey spanning almost a decade. Initially immersed in cultural management and production, I made a pivotal decision in 2020 to transition into web development, leveraging my prior experience with WordPress and my innate fascination with technology and product development. Since then, I've been deeply involved in various projects, from co-founding Sambalab in 2021 to contributing as a backend developer at Devsafio, where I specialized in data architecture and user model development using technologies like JavaScript, Express, Sequelize, Docker, and MySQL. My current role involves leading a talented team in crafting a cutting-edge cultural platform with Next.js, where we prioritize innovation and responsiveness to the evolving needs of our audience and contemporary artists. My technical proficiency encompasses a range of programming languages, frameworks, libraries, and tools, including Ruby, TypeScript, React, Node.js, Docker, PostgreSQL, and more. Alongside my professional endeavors, I've pursued education in diverse fields, from digital startups to music composition and legal studies. Continuously seeking growth, I'm currently expanding my skill set through courses in data analysis and Python programming. Fluent in Spanish and proficient in English, I thrive on challenges and am passionate about pushing the boundaries of what's possible in the digital realm.";
        let index = 0;

        const typingEffect = setInterval(() => {
            if (index < text.length) {
                setTypedText(prevText => prevText + text[index]);
                index++;
            } else {
                clearInterval(typingEffect);
            }
        }, 20); // Velocidad de escritura, puedes ajustar este valor para cambiar la velocidad

        return () => clearInterval(typingEffect); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3">
                <Image
                    src="/yosinfondo.png"
                    alt="Tu imagen personal"
                    width={300}
                    height={300}
                    layout="responsive"
                    priority
                />
            </div>
            <div className="w-full md:w-full sm:w-full text-black dark:text-gray-100">
                <h1 className="text-4xl font-bold"></h1>
                <p className={`text-base text-justify ${styles.typedText}`}>
                    {typedText}
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
