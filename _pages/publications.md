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
}

h1 {
  color: #2C3E50;
  text-align: center;
  margin-bottom: 30px;
}

.thesis-item {
  background-color: #ECF0F1;
  border: 1px solid #BDC3C7;
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.thesis-year, .thesis-type, .thesis-place {
  font-size: 16px;
  color: #34495E;
  margin-right: 15px;
}

.thesis-title {
  font-size: 16px;
  color: #2980B9;
  text-decoration: none;
  flex-grow: 1;
}

.thesis-title:hover {
  text-decoration: underline;
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
