import React from 'react';
import "../app/globals.css";
import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer'
import Separator from '@/app/Components/Separator'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="area absolute -z-50" >
          <Header />
          <Separator />
          {children}
          <ul class="circles relative -z-40">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Separator />
        </div >
        <Footer />
      </body>
    </html>
  );
}
