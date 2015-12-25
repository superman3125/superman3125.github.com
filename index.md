---
layout: page
title: "bastards"
motto: "I grow; I prosper: Now, gods, stand up for bastards!"
tagline: Front End Developer
---
{% include JB/setup %}

## 我的文章

<div>
  {% for post in site.posts %}
    <h3><span>{{ post.date | date_to_long_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h3>
    <div class="post-brief">
    {{ post.excerpt }}
    <h3 class="text-right"><a href="{{ BASE_PATH }}{{ post.url }}" >更多...</a></h3>
    </div>

  {% endfor %}
</div>


