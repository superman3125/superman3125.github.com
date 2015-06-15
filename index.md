---
layout: page
title: "{% Superman's Code + %}"
tagline: Front End Developer
---
{% include JB/setup %}

## 最近文章

<div>
  {% for post in site.posts %}
    <h3><span>{{ post.date | date_to_long_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h3>
    <div class="well">
    {{ post.excerpt }}
    <p><a href="{{ BASE_PATH }}{{ post.url }}" class="pull-right ">更多...</a></p>
    </div>

  {% endfor %}
</div>


