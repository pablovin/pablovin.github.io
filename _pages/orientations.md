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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-top: 20px;
}

h2 {
  color: #34495e;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 5px;
}

.projects {
  margin-top: 20px;
}

.project {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #ecf0f1;
  border-radius: 8px;
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
}

.project-title {
  font-size: 18px;
  font-weight: bold;
}

.project-info {
  font-size: 16px;
  color: #7f8c8d;
}

em {
  font-style: normal;
  color: #34495e;
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
            <div class="project-title">"{{ member.title | escape }}"</div>
            <div class="project-info">{{ member.student }} - <em>{{ member.place }}</em></div>
          </div>
        </div>
      {% endfor %}
    </div>
  {% endfor %}
</div>