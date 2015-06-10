---
layout: page
title: "{% Superman's Code + %}"
tagline: Front End Developer
---
{% include JB/setup %}

## 最近文章

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


