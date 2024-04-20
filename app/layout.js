import React from 'react';
import "../app/globals.css";
import Background from '@/app/Components/Background';
import Header from '@/app/Components/Header'
import Separator from '@/app/Components/Separator'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <Background />
        <Header />
        <Separator />
        {children}
        <Separator />
        <Separator />
        <Separator />
      </body>
    </html>
  );
}
