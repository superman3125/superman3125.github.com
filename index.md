---
layout: page
title: "Bastards"
motto: "I grow; I prosper: Now, gods, stand up for bastards!"
tagline: Front End Developer
---
{% include JB/setup %}

<div class="col-sm-8 blog-main ">
  {% for post in site.posts %}
    <div class="post-card animated slideInLeft">
    <h3>{{ post.title }}</h3>
    <div class="post-brief">
    {{ post.excerpt }}
    <div class="post-more text-right"><span class="post-date text-muted">{{ post.date | date: "%Y-%m-%d" }}</span><a href="{{ BASE_PATH }}{{ post.url }}" >更多...</a></div>
    </div>
    </div>
  {% endfor %}
</div>
<div class="col-sm-4">
<div class="info-box  drop-shadow  animated slideInRight">
    <h3 class="info-box-title">关于</h3>
    <div class="info-box-icon">
     <img src="https://avatars2.githubusercontent.com/u/5801806?v=3&s=160" />
    </div>
    <span class="stats">

    </span>
</div>
<div class="time-line  animated slideInRight">
  <ul>
    {% for post in site.posts %}
    <li>
    <span class="time-line-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <span class="time-line-dot"></span>
    <div class="popover right">
          <div class="arrow"></div>
          <div class="popover-content">
            <p>{{ post.title }}</p>
          </div>
     </div>
    </li>
    {% endfor %}
  </ul>
</div>
</div>



