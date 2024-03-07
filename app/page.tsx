'use client'

import Head from "next/head";
import Tools from "./components/Tools";
import React from "react";
import AboutMe from "./components/Aboutme";
import ContactMe from "./components/Contactme"
import PersonalData from "./components/PersonalData";
import Redes from "./components/Redes";


export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio | Daniel Garcia Rojas</title>
      </Head>
      <main className="sm:w-full flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-sky-200 to-blue-200 dark:from-sky-900 dark:to-[#0141ff]">
        <div className="container mx-auto sm:w-full"> 
          <div className="flex flex-col md:flex-row items-center gap-10"> 
            

            
              <PersonalData />
              <div>
            <Redes />
            </div>
         
             
              
              {/* Otras partes de tu página */}
            

          
            
            
          </div>
          <AboutMe />
          
          <div className="mt-12"> {/* Crea una nueva sección */}
            <h2 className="text-2xl font-bold">Skills and Tools</h2>
         <Tools />
          </div> 
        

          <div className="mt-15">
            <h2 className="text-2xl font-bold sm:w-full"></h2> 
            <ContactMe />
          </div> 

         
 
        </div>
      </main>
    </>
  );
}
