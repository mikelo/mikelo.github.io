---
layout: default
---
Hi folks! nice to meet your by the way. I was looking for a way to write site using markdown that would also work with github-pages and I stumbled upon this nifty "Jekyll hacker theme" which is **precisely** what I was looking for. Read all about in the [README](./README.html) file!


# Connect with Me 🌐

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/micheleorlandi/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/mik3llo)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mikelo)
[![GitLab](https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white)](https://gitlab.com/mik3lo)

# The [CV](resume.html) (aka resumé)

# The Blog

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

<!-- Text can be **bold**, _italic_, ~~strikethrough~~ or `keyword`. -->