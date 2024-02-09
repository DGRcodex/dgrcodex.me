import React from 'react';
import { Inter } from 'next/font/google';

import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>      
    <Head>
      <title>DGRcodex Portfolio</title>
      <meta name="description" content="Daniel García Rojas, Desarrollador Fullstack, Fullstack developer, DGRcodex, Portfolio" />
      <meta name="keywords" content="Fullstack, Desarrollador, Portfolio, Tecnología, Programación, developmeant" />
      <meta name="author" content="SAMbalab" />
      {/* Aquí puedes agregar otros elementos de metadata relevantes */}
    </Head>

    
    </>
  );
}
