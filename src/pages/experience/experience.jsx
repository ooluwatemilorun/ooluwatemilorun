import React from "react";
import './experience.css'

export default function Experience() {
  
  return (
        <>
          <h2><i className="fa fa-briefcase" aria-hidden="true"></i> Experience</h2>
          <div className="experirnce__history">
            <ul className="history__work">
              <h3><i class="fa fa-history" aria-hidden="true"></i> Work History</h3>
              <li>
                <h4 className="work__title"><i class="fa fa-bookmark" aria-hidden="true"></i> IT Support Junior</h4>
                <span className="work__date"><i class="fa fa-calendar" aria-hidden="true"></i> Sept 2023 - July 2024</span>
                <p className="work__p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequatur modi harum ab odit illum ut animi eveniet voluptates ratione!</p>
              </li>
            </ul>

            <ul className="experirnce__education">
              <h3><i className="fa fa-book" aria-hidden="true"></i> Education</h3>
              <li>
                  <h4 className="education__title"><i class="fa fa-bookmark" aria-hidden="true"></i> B-Tech., Information and Media Technology</h4>
                  <span className="education__date"><i class="fa fa-calendar" aria-hidden="true"></i> 2016 - 2023</span>
                  <p className="education__p"><i class="fa fa-university" aria-hidden="true"></i> Federal University of Technology, Minna.</p>
              </li>
            </ul>
          </div>
        </>
  );
}