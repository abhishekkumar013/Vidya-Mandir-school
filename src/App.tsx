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
          content="Udgam Vidya Mandir provides quality education to rural students from Grades 1-10, focusing on foundational learning and preparation for prestigious institutions and competitive exams."
        />
        <meta
          name="keywords"
          content="Udgam Vidya Mandir,UVM, rural education, IIT preparation, NEET coaching, Sainik School coaching, Navodaya preparation, UPSC foundation, holistic learning, R.K. Mission preparation, NTSE coaching, Military School preparation, quality education in villages, village school, top rural school, Udgam Educational Academy, Udgam Vidya Gurukul, Udgam Shiksha Kendra, Udgam Vidyalaya, UVM School, early competitive exam preparation, Udgam Vidya Mandir School, Udgam Educational Academy, Udgam Vidya Bhavan, Udgam Vidya Gurukul, Udgam Vidya Ashram, Udgam Vidya Mandir: Uplifting Rural Education, Udgam Vidya Mandir - Foundation for Excellence, Udgam Vidya Mandir: Pathway to Success, Udgam Vidya Mandir - Empowering Young Minds, Udgam Vidya Mandir: Where Knowledge Begins, Udgam School, Udgam Academy, UVM Education Center, Udgam Vidyalaya, UVM School, Udgam Gurukul, Udgam Pathshala, Vidya Mandir Udgam, उद्गम विद्या मंदिर, Udgam Shiksha Kendra, Gramin Udgam Vidya Mandir, Udgam Vidya Mandir, Udgam-Vidya-Mandir, udgam vidya mandir, UDGAM, uDgam, UDGAM, Best rural school,."
        />

        <meta name="author" content="Sanjay Kumar" />
        <title>Udgam Vidya Mandir - Empowering Rural Education</title>
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
