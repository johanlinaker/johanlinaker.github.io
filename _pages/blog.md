---
permalink: /blog/
title: "Blog"
description: "Posts by Johan Linåker on open source software, open source AI, data sharing and digital sovereignty, in English and Swedish."
layout: archive
---

<p><em>Notes, thoughts and summaries of talks, papers and reports. Some in English, some in Swedish, depending on the context :)</em></p>

{% include home-search.html %}

{% if paginator %}
  {% assign posts = paginator.posts %}
{% else %}
  {% assign posts = site.posts %}
{% endif %}

{% assign entries_layout = page.entries_layout | default: 'list' %}
<div class="entries-{{ entries_layout }}">
  {% for post in posts %}
    {% include archive-single.html type=entries_layout %}
  {% endfor %}
</div>

{% include paginator.html %}
