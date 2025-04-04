import React from "react";
import './home.css'

export default function Home() {
  return (
    <>
      <div className="section__intro">
        <span>Hi, my name is</span>
        <h1>Oluwatemilorun Ojo.</h1>
        <h3>I build things for the web</h3>
        <p>As a passionate and IT Support Professional and front-end developer, I tend to make use of modern web technologies to build websites that look great and function correctly.</p>
        <div className="intro__action">
            <button><i class="fa fa-linkedin" aria-hidden="true"></i> <a href="http://www.linkedin.com/in/ooluwatemilorun">LinkedIn</a> </button>
            <button><i class="fa fa-github" aria-hidden="true"></i> <a href="http://github.com/ooluwatemilorun">Github</a></button>
        </div>
      </div>
    </>
  );
}