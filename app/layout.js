"use client"
import "../app/globals.css";
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Separator from '@/Components/Separator'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="body-div">
        <Header />
        <Separator/>
        {children}
        <Separator/>
        <Separator/>
        <Footer />
        </div>
      </body>
    </html>
  );
}
