# animate-in
Animate In - a super lightweight, responsive friendly JS/CSS plugin to animate in elements on scroll. 

### Notes About Plug-in
This plug-in only animates elements in that are not already in view. As the user scrolls, when the element is within the viewport range, additional animate-in classes are added to handle the animation styles. JavaScript handles delays for additional elements on the screen.

### Requirements:
- jQuery 1.8.+
- animate-in.js
- animate-in.css

### How to Use
- Add class "animate-in" to any html element. 
- Add additional classes to set animation direction. Examples "animate-from-left", "animate-from-right", "animate-pop-in". Default style is fade in when no additional classes are added.

### Example of Markup on Various Elements
```
<div class="animate-in">
  Default Animate In
</div>

<p class="animate-in animate-from-left">
  Animates From Left of Screen
</p>

<img class="animate-in animate-from-right" alt="Animates From Right of Screen" width="100" height="100" src="http://placehold.it/100x100">

<span class="animate-in animate-pop-in">
  Animates With Pop In
</span>
```

