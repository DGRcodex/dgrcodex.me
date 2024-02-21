import Image from "next/image";
import Head from "next/head";
import Tools from "./components/Tools";
import React from "react";
import AboutMe from "./components/Aboutme";
import ContactMe from "./components/Contactme"
import PersonalData from "./components/Personaldata";


export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio | Daniel Garcia Rojas</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-sky-200 to-blue-200 dark:from-sky-900 dark:to-[#0141ff]">
        <div className="container mx-auto"> 
          <div className="flex flex-col md:flex-row items-center gap-10"> 
            <div className="container mx-auto">
              <PersonalData />
              <AboutMe />
              {/* Otras partes de tu página */}
            </div>
            
          </div>

          <div className="mt-10"> {/* Crea una nueva sección */}
            <h2 className="text-2xl font-bold">Skills and Tools</h2>
         <Tools></Tools>
          </div> 


          <div className="mt-10">
            <h2 className="text-2xl font-bold"></h2> 
            <ContactMe />
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
