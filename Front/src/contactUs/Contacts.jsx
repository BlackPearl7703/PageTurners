import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Contact from '../components/Contact';
export default function Contacts() {
  return (
    <div>
        <div>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <Contact/>
        </div>
        <Footer />
      </div>
    </div>
  )
}
