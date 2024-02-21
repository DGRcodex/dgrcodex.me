// AboutMe.tsx

import React from 'react';
import Image from 'next/image';
import './Aboutme.css'

const AboutMe: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3">
                <Image
                    src="/yosinfondo.png" // Reemplaza con la ruta de tu imagen
                    alt="Tu imagen personal"
                    width={300} //    Ajus sta el ancho según prefieras
                    height={300} // Ajusta la altura según prefieras
                    layout="responsive" // La imagen se adapta al tamaño disponible
                    priority
                />
            </div>
            <div className="w-full md:w-2/3 text-black dark:text-gray-100">
                <h1 className="text-4xl font-bold">ABOUT ME</h1>
                <p className="text-base text-justify. sm:w-full sm:mx-auto sm:px-2">
                    I've had a dynamic career journey spanning almost a decade. Initially immersed in cultural management and production, I made a pivotal decision in 2020 to transition into web development, leveraging my prior experience with WordPress and my innate fascination with technology and product development.<br /><br />

                    Since then, I&apos;ve been deeply involved in various projects, from co-founding Sambalab in 2021 to contributing as a backend developer at Devsafio, where I specialized in data architecture and user model development using technologies like JavaScript, Express, Sequelize, Docker, and MySQL.<br /><br />

                    My current role involves leading a talented team in crafting a cutting-edge cultural platform with Next.js, where we prioritize innovation and responsiveness to the evolving needs of our audience and contemporary artists.<br /><br />

                    My technical proficiency encompasses a range of programming languages, frameworks, libraries, and tools, including Ruby, TypeScript, React, Node.js, Docker, PostgreSQL, and more. Alongside my professional endeavors, I&apos;ve pursued education in diverse fields, from digital startups to music composition and legal studies.<br /><br />

                    Continuously seeking growth, I&apos;m currently expanding my skill set through courses in data analysis and Python programming. Fluent in Spanish and proficient in English, I thrive on challenges and am passionate about pushing the boundaries of what&apos;s possible in the digital realm.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
