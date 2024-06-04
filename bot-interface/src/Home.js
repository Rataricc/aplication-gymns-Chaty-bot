import React from 'react';
import Aside from './components/Aside';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
//import QrCode from './components/QrCode'; Este componente no va aca y todavia no exite aun.

export default function Home() {
    return (
        <div>
            <Header />
            <Aside />
            <Content />
            <Footer />
        </div>
    );
}; 
