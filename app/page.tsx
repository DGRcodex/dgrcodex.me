import Image from "next/image";
import Head from "next/head";



export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio | Daniel Garcia Rojas</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-sky-200 to-blue-200 dark:from-sky-900 dark:to-[#0141ff]">
        <div className="container mx-auto"> 
          <div className="flex flex-col md:flex-row items-center gap-10"> 
            
            <div className="w-full md:w-1/3">
              <Image
                src="/yosinfondo.png" // Reemplaza con la ruta de tu imagen
                alt="Tu imagen personal"
                width={300} // Ajusta el ancho según prefieras
                height={300} // Ajusta la altura según prefieras
                layout="responsive" // La imagen se adapta al tamaño disponible
                priority
              />
            </div>

       
            <div className="w-full md:w-2/3 text-black dark:text-gray-100">
              <h1 className="text-4xl font-bold">ABOUT ME</h1>
              <p className="text-base text-justify">
                I&apos;ve had a dynamic career journey spanning almost a decade. Initially immersed in cultural management and production, I made a pivotal decision in 2020 to transition into web development, leveraging my prior experience with WordPress and my innate fascination with technology and product development.{'\n'}
                
                Since then, I&apos;ve been deeply involved in various projects, from co-founding Sambalab in 2021 to contributing as a backend developer at Devsafio, where I specialized in data architecture and user model development using technologies like JavaScript, Express, Sequelize, Docker, and MySQL.{'\n'}
                 
                My current role involves leading a talented team in crafting a cutting-edge cultural platform with Next.js, where we prioritize innovation and responsiveness to the evolving needs of our audience and contemporary artists.{'\n'}
                 
                My technical proficiency encompasses a range of programming languages, frameworks, libraries, and tools, including Ruby, TypeScript, React, Node.js, Docker, PostgreSQL, and more. Alongside my professional endeavors, I&apos;ve pursued education in diverse fields, from digital startups to music composition and legal studies.{'\n'}
           
                Continuously seeking growth, I&apos;m currently expanding my skill set through courses in data analysis and Python programming. Fluent in Spanish and proficient in English, I thrive on challenges and am passionate about pushing the boundaries of what&apos;s possible in the digital realm.
               
              </p>
            </div>
          </div>

         
          <div className="flex place-items-center gap-4 p-4 mt-10">
            <Image
              src="/dgrcodex4.png"
              alt="DGR CODEX Logo"
              width={300}
              height={300}
              priority />
            <Image
              src="/logosambalab.png"
              alt="SAMBALABAB Logo"
              width={300}
              height={300}
              priority />
          </div>
        </div>
      </main>
    </>
  );
}
