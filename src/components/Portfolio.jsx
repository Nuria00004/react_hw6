import React from 'react';
import './Portfolio.css'

function Portfolio() {
  const projects = [
    {
      title: 'Проект 1',
      description: 'Милое привидение',
      link: 'https://codepen.io/anthonysimone/pen/JmRKzz',
    },
    {
      title: 'Проект 2',
      description: 'Бесконечный слайдер',
      link: 'https://codepen.io/andytran/pen/xweoPN',
    },
    {
      title: 'Проект 3',
      description: 'Анимация загрузки',
      link: 'https://codepen.io/jkantner/pen/YzdpEVO',
    },
  ];

  return (
    <div>
      <h1>Портфолио</h1>
      <div className="portfolio-list">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Посмотреть проект
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
