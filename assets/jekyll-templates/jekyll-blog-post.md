<%*
let originalTitle = tp.file.title;

if (!originalTitle || originalTitle.startsWith("Untitled")) {
  originalTitle = await tp.system.prompt("Post title");
}

if (!originalTitle || !originalTitle.trim()) {
  originalTitle = "Untitled post";
}

let excerpt = await tp.system.prompt("Excerpt");
if (!excerpt) excerpt = "";

let tagsInput = await tp.system.prompt("Tags (comma-separated)");
if (!tagsInput) tagsInput = "";

function slugify(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[åä]/g, "a")
    .replace(/ö/g, "o")
    .replace(/[ÅÄ]/g, "A")
    .replace(/Ö/g, "O")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

const today = tp.date.now("YYYY-MM-DD");
const timestamp = tp.date.now("YYYY-MM-DDTHH:mm:ssZ");
const slug = slugify(originalTitle);
const newFileName = `${today}-${slug}`;
const teaserPath = `/assets/images/${newFileName}/teaser.jpg`;

const tags = tagsInput
  .split(",")
  .map(t => t.trim())
  .filter(Boolean)
  .map(t => `  - ${slugify(t)}`)
  .join("\n");

if (tp.file.title !== newFileName) {
  await tp.file.rename(newFileName);
}
-%>
---
title: "<% originalTitle %>"
seo_title: "<% originalTitle %>"
excerpt: "<% excerpt.replace(/"/g, '&quot;') %>"
date: <% timestamp %>
categories:
  - blog
tags:
<% tags || "  -" %>
header:
  teaser: "<% teaserPath %>"
---

<div class="thumbnail-container">
<img src="<% teaserPath %>" alt=""></div>

## TL;DR / Summary

- 
- 
- 

## Longer version

Skriv här.

## References

- 

<% tp.file.cursor() %>