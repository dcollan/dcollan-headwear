import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{
      backgroundImage: `url(../assets/background.jpg)`,
      backgroundSize: 'cover'
    }}
    className="layout">
      <Head>
        <title>DCOLLAN Headgear</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout