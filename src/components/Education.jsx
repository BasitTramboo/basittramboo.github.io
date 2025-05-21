// src/components/Education.jsx
function Education() {
  return (
    <section id="education">
      <h2>Education</h2>

      <div className="education-entry">
        <h3>
          Dalhousie University
          {/* <span>Sept 2024 – Jan 2026</span> */}
        </h3>
        <p>Master of Applied Computer Science – Halifax, NS</p>
        <ul>
          <li>Relevant Courses: Cloud Architecting, Cloud Computing, DBMS and Data Warehousing, Recommender Systems</li>
        </ul>
      </div>

      <div className="education-entry">
        <h3>
          Islamic University of Science and Technology
          {/* <span>Sept 2012 – Aug 2016</span> */}
        </h3>
        <p>Bachelor of Technology in Computer Science and Engineering – Kashmir, India</p>
        <ul>
          <li>Relevant Courses: DSA, Web Development, Mobile Systems</li>
        </ul>
      </div>
    </section>
  );
}

export default Education;