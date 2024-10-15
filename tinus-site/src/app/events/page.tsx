'use client'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useState } from "react";

export default function Events () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return(
        <div>
             <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
             <main>
<Contact/>
             </main>
             <Footer/>

        </div>
    )
} 