import React from 'react';
import "../app/globals.css";
import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer'
import Separator from '@/app/Components/Separator'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Separator />
        {children}
        <Separator />
        <Separator />
        <Separator />
        <Footer />
      </body>
    </html>
  );
}
