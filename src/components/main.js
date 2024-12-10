// main.js
import React from 'react';
import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';


function Main() {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default Main;
