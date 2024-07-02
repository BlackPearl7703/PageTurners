import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Course from "../components/Course";
export default function Courses() {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Course />
        </div>
        <Footer />
      </div>
    </>
  );
}
