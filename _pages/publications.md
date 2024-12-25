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
  margin: auto;
  color: #ECF0F1; /* Light text color for dark backgrounds */
}

.thesis-item {
  background-color: rgba(236, 240, 241, 0.8); /* Semi-transparent background */
  border: 1px solid #BDC3C7;
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column; /* Stack elements vertically on small screens */
  align-items: flex-start; /* Align items to start on small screens */
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Soft shadow for better separation */
}

.thesis-year, .thesis-type, .thesis-place {
  font-size: 16px;
  color: #34495E; /* Dark text for readability */
  margin-right: 15px;
  text-shadow: 1px 1px 2px rgba(255,255,255,0.7); /* White text shadow for dark backgrounds */
}

.thesis-title {
  font-size: 16px;
  color: #2980B9;
  text-decoration: none;
  flex-grow: 1;
  text-shadow: 1px 1px 2px rgba(255,255,255,0.5); /* Enhancing legibility */
  margin-bottom: 5px; /* Add margin-bottom on mobile for spacing */
}

.thesis-title:hover {
  text-decoration: underline;
}

@media (min-width: 768px) {
  .thesis-item {
    flex-direction: row; /* Return to horizontal layout on larger screens */
    align-items: center; /* Center items vertically */
  }

  .thesis-title {
    margin-bottom: 0; /* Remove the margin-bottom on larger screens */
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
