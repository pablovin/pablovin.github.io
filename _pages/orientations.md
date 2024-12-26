---
layout: page
title: student orientation
permalink: /studentOrientation/
description: A list of student projects that I advised over the last years
nav: true
nav_order: 3
horizontal: false
---

<style  type="text/css">
.container {
  width: 80%;
  margin: auto;  
  color: #ECF0F1; /* Ensures text is visible on dark backgrounds */
}

.projects {
  margin-top: 20px;
}

.project {
  display: flex;
  flex-direction: column; /* Stacks children vertically on smaller screens */
  align-items: center; /* Centers items on mobile */
  margin-bottom: 15px;
  padding: 10px;
  background-color: rgba(236, 240, 241, 0.8); /* Semi-transparent for flexibility */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Adds depth */
}

.project-year {
  font-size: 20px;
  color: #2980b9;
  width: 70px;
  text-align: center;
  border-right: 2px solid #bdc3c7;
  padding-right: 20px;
}

.project-details {
  flex-grow: 1;
  padding-left: 20px;
  text-align: center; /* Centers text on mobile */
}

.project-title {
  font-size: 18px;
  font-weight: bold;
  color: #2980b9; /* Ensures visibility and consistency */
}

.project-info {
  font-size: 16px;
  color: #7f8c8d;
  text-shadow: 1px 1px 2px rgba(255,255,255,0.5); /* Enhances legibility */
}

em {
  font-style: normal;
  color: #34495e;
}

@media (min-width: 768px) {
  .project {
    flex-direction: row; /* Horizontal layout for larger screens */
    align-items: center; /* Aligns items vertically in the center */
  }

  .project-details {
    text-align: left; /* Aligns text to the left on larger screens */
  }
}
</style>

<div class="container">
  {% for program in site.data.orientations %}
    <h2>{{ program.name }}</h2>
    <div class="projects">
      {% assign sorted_members = program.members | sort: 'year' %}
      {% for member in sorted_members %}
        <div class="project">
          <div class="project-year"><strong>{{ member.year }}</strong></div>
          <div class="project-details">
            <div class="project-title">{{ member.title | escape }}</div>
            <div class="project-info">{{ member.student }} - <em>{{ member.place }}</em></div>
          </div>
        </div>
      {% endfor %}
    </div>
  {% endfor %}
</div>