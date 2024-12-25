---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
---

<style>
.container {
  width: 100%;
  padding: 0 20px;
  margin: auto;
}

h1 {
  color: var(--text-color);
  text-align: center;
  margin-bottom: 30px;
}

.thesis-item {
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap; /* Ensure it wraps on smaller screens */
  align-items: center;
  justify-content: space-between;
}

.thesis-year, .thesis-type, .thesis-place {
  font-size: 16px;
  color: var(--text-color);
  margin-right: 15px;
  white-space: nowrap; /* Prevents breaking into multiple lines */
}

.thesis-title {
  font-size: 16px;
  color: var(--link-color);
  text-decoration: none;
  flex-grow: 1;
  min-width: 0; /* Allows text to wrap */
}

.thesis-title:hover {
  text-decoration: var(--hover-decoration);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .thesis-year, .thesis-type, .thesis-place {
    font-size: 14px; /* Smaller text on smaller screens */
  }
  .thesis-title {
    font-size: 14px;
  }
}
</style>


<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

<div class="container">
  <h1>My Academic Thesis Work</h1>

  {% for thesis in site.data.thesis %}
    <div class="thesis-item">
      <span class="thesis-year">{{ thesis.year }}</span>
      <span class="thesis-type">{{ thesis.type }}</span>
      <a href="{{ thesis.link }}" class="thesis-title" target="_blank">{{ thesis.title }}</a>
      <span class="thesis-place">{{ thesis.place }}</span>
    </div>
  {% endfor %}
</div>

<h1>My Publications</h1>

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
