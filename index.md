---
layout: page
title: "Bastards"
motto: "I grow; I prosper: Now, gods, stand up for bastards!"
tagline: Front End Developer
---
{% include JB/setup %}

## 偶尔记录下

<div class="col-sm-8 blog-main">
  {% for post in site.posts %}
    <h3>{{ post.title }}</h3>
    <div class="post-brief">
    {{ post.excerpt }}
    <div class="post-more text-right"><span class="post-date text-muted">{{ page.date | date: "%Y-%m-%d" }}</span><a href="{{ BASE_PATH }}{{ post.url }}" >更多...</a></div>
    </div>
  {% endfor %}
</div>
<div class="col-sm-4"></div>


