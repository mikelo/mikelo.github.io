---
layout: post
title:  "Writing posts with Jekyll!"
---

# Easier than I thought

As easy as writing a markdown file in the _posts directory! Read all about it [here](https://jekyllrb.com/docs/posts/)

I had to create a _posts folder under my root git folder. The tricky part was using a correct filename, such as 2025-02-13-how-to-write-posts.md

You also have to add a header to file such as this one:
```markdown
---
layout: post
title:  "Writing posts with Jekyll!"
---
```

Back in the index.md I simply added an embeded html snippet, which automagically updated posts as I add them! pretty cool, eh?

```html
{% raw %}
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
{% endraw %}
```
This is all thanks to [liquid](https://shopify.github.io/liquid/), which is a cute little templating language.