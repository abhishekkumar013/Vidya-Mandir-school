import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <meta
          name="description"
          content="Udgam-Vidya-Mandir Udgam Vidya Mandir udgam vidya mandir UDGAM uDgam UDGAM Udgam Vidya Mandir is dedicated to providing quality education to rural children from Grades 1-10, with a strong focus on foundational learning. We specialize in preparing students for prestigious institutions like Navodaya, Sainik School, R.K. Mission, and Military School, along with early coaching for NTSE, IIT, NEET, and UPSC. Our mission is to bridge the urban-rural educational divide through innovative teaching methods and holistic development, empowering young minds to achieve their dreams."
        />
        <meta
          name="keywords"
          content="Udgam Vidya Mandir School
          Udgam Educational Academy
          Udgam Vidya Bhavan
          Udgam Vidya Gurukul
          Udgam Vidya Ashram
          Udgam Vidya Mandir: Uplifting Rural Education
          Udgam Vidya Mandir - Foundation for Excellence
          Udgam Vidya Mandir: Pathway to Success
          Udgam Vidya Mandir - Empowering Young Minds
          Udgam Vidya Mandir: Where Knowledge Begins
          Udgam School
          Udgam Academy
          UVM Education Center
          Udgam Vidyalaya
          UVM School
          Udgam Gurukul
          Udgam Pathshala
          Vidya Mandir Udgam
          Udgam Shiksha Kendra
          Gramin Udgam Vidya Mandir
          Udgam Vidya Mandir Udgam-Vidya-Mandir Udgam Vidya Mandir udgam vidya mandir UDGAM uDgam UDGAM Best rural school Quality education in villages Foundational learning Grades 1-5 Navodaya exam preparation Sainik School coaching R.K. Mission preparation NTSE coaching for kids Military School preparation Rural education upliftment
          Village school near me
          IIT foundation classes for kids
          NEET coaching in rural areas
          UPSC early preparation
          Top school for NTSE and Navodaya
          Holistic education for rural children
          Early foundation for competitive exams 
          Innovative teaching methods in rural schools
          Bridging the education gap in villages
          Inclusive learning environments
          Competitive exam success from Grade 1
          Strong foundation for future leaders
          Enroll in Udgam Vidya Mandir
          Admission open for Grades 1-10
          Coaching for Navodaya and Sainik School exams
          Build a brighter future for your child
          Foundation for IIT and NEET starts here"
        />
        <meta name="author" content="Sanjay Kumar" />
        <title>Udgam Vidya Mandir</title>
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
