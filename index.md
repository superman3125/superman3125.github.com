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
    <h3>{{ post.title }}<span class="pull-right">{{ post.date | YYYY-MM-DD HH:MM:S }}</span></h3>
    <div class="post-brief">
    {{ post.excerpt }}
    <div class="post-more text-right"><a href="{{ BASE_PATH }}{{ post.url }}" >更多...</a></div>
    </div>
  {% endfor %}
</div>
<div class="col-sm-4"></div>


