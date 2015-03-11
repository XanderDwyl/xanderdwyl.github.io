---
layout: gallery
title: Photos
order: 3
permalink: /photos/
---
<ul class="images">
	{% for img in site.gallery_images %}
		<li class="img-thumbnails">
			<img src="/images/post/{{img.file}}" alt="{{img.title}}">
		</li>
	{% endfor %}
</ul>
