---
title: Pesquisadores
layout: single
permalink: /pesquisadores/

layout: single
title: Students Orientation
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
  font-family: Arial, sans-serif;
}

h1, h2 {
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  font-size: 16px;
}

li span {
  display: inline-block;
  margin-right: 5px;
}

strong {
  color: #0077CC;
}
</style>

<div class="container">
  <h1>Student Orientation Projects</h1>

  {% for program in site.data.orientations %}
    <h2>{{ program.name }}</h2>
    <ul>
      {% assign sorted_members = program.members | sort: 'year' %}
      {% for member in sorted_members %}
        <li>
          <span><strong>{{ member.year }}</strong> - </span>
          <span>"{{ member.title | escape }}" by </span>
          <span>{{ member.student }}</span>
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>