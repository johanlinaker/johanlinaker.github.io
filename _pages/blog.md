---
permalink: /blog/
title: "Blog"
layout: archive
---

{% if paginator %}
  {% assign posts = paginator.posts %}
{% else %}
  {% assign posts = site.posts %}
{% endif %}

{% assign entries_layout = page.entries_layout | default: 'list' %}
<div class="entries-{{ entries_layout }}">
{% for post in site.posts limit:3 %}
  {% include archive-single.html %}
{% endfor %}
</div>

{% include paginator.html %}
