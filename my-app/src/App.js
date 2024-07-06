// U36432650

import React from 'react';
import './App.css';

function App() {


return (

  // Create a component to display your name, a brief biography, and contact information such as email and LinkedIn.
  <div className="App">
    <header className="App-header">
      <h1>Zach Bolanos</h1>
      <p>
        I'm currently a student at USF and I am pursuing a degree in Business Analytics. I am set to gradutate in the Summer of 2025.
      </p>
      <p>Email: myemail@example.com | LinkedIn: linkedin.com/in/mylinkedin</p>
    </header>

    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>{skill.name}: {skill.level}</li>
        ))}
      </ul>
    </section>

    <section>
      <h2>Job Experience</h2>
      {experiences.map(exp => (
        <div key={exp.id}>
          <h3>{exp.title} at {exp.company}</h3>
          <p>{exp.duration}</p>
        </div>
      ))}
    </section>

    <section>
      <h2>Education</h2>
      {education.map(edu => (
        <div key={edu.id}>
          <h3>Degree: {edu.degree}</h3>
          <p>{edu.institution} - {edu.years}</p>
        </div>
      ))}
    </section>
  </div>
);
}

  // Display your past work experiences, including job title, company name, and the duration of each role.
  const skills = [
    { id: 1, name: 'JavaScript', level: 'Intermediate' },
    { id: 2, name: 'HTML', level: 'Advanced' },
    { id: 3, name: 'Excel', level: 'Expert' },
  ];

  // Display your past work experiences, including job title, company name, and the duration of each role.
  const experiences = [
    { id: 1, title: 'Waiter', company: 'Bob Evans', duration: 'June 2020 - February 2024' },
    { id: 2, title: 'Database Management Intern', company: 'VirtualOne', duration: 'March 2024 - Present' },
  ];

// Show your educational background including the name of the institution, degree obtained, and the years attended.
 const education = [
    { id: 1, institution: 'Hillsbourough Community College', degree: 'Business Administration', years: '2021-2023' },
    { id: 2, institution: 'University of South Florida', degree: 'Business Analytics and Information Systems', years: '2023-2025' },
  ];

export default App;