# Portfolio
[Link to live site.](https://joshcooper.netlify.app/index.html)

## Process of Creating and Building My Portfolio

### 1. Brainstorm ideal layout and create a wireframe

To start, I brainstormed how I want the site to look. I knew I wanted sections for Home, About, Project, and Contact. I was going to put these all on one single page, but then decided to put them on their own seperate page. I then drew out a very rough looking draft of the wireframe. Some of the things I wanted were a Navigation Bar on each page, clickable logos, and highlighted text when hovered over.

### 2. Figure out which elements to create in HTML and jQuery

When I first came up with the wireframe I was trying to decide what I should create in HTML and jQuery. I later decided I would put all of the elements in the HTML so my Javascript file wouldn't be so long. This would make it more readable and managable in th future. For all of the animations and `.on()` interactions, I created those in jQuery.

### 3. Brainstorm the functionalities I want to add

For me Brainstorming 3 different types of interactions was kind of difficult. I of course used the `.on()` and `.hover()`, which is deprecated and now replaced with `.on('mouseenter')` and `.on('mouseleave)`, but figuring out the third interaction was tough for me. I then talked with my instructor Matt and he came up with a cool idea to `.toggle()` the project description.

### 4. Create the HTML and Javascript/jQuery

I wanted to start the site by creating the foundational structure of the site, then add the functionality. I started by creating the navigation bar. I have used HTML in the past and knew about a `<nav>` tag. I had to do some further [research](https://www.javatpoint.com/html-nav-tag) to figure out how it worked. I added it to my HTML and then created a list for the sections of the page. After I added this, I didnt like the way all the items were stretched across the whole screen, I just wanted them to be in the right side. I later took out the whole `<nav>` tag and rebuilt it with `<div>` tags.

Implementing the hover function with jQuery:
To achieve the look I had come up with I needed to first create a rough draft of the navigation bar, then add the functionality to it. I first started by reading documentation and looking at examples for the `.hover()`. I very soon found out that the API had been deprecated and now needed to use
[`.on('mouseenter')`](https://api.jquery.com/mouseenter/) and [`.on('mouseleave)`](https://api.jquery.com/mouseleave/) to make have a 'hover' effect. For each, functionality I wanted to add I would usually find documentation on it [here](https://api.jquery.com/) and look through the examples to figure out how it works and where it's best to use it.

### 5. Style page with CSS

For me, this was the hardest part of the portfolio becuase I am horrible with picking color schemes and setting a certain style to a page. I was using [coolor.co](https://coolors.co/) to find different color schemes, but didn't know which colors looked best for different parts of the pages. While coloring and styling was difficult, I also had a little bit of trouble when it came to positioning my pages. I mostly used flex for my display type, which made it very easy to position things the way I envisioned. Whenever I did get a bug I used this chrome extension called [Pesticide](https://chrome.google.com/webstore/detail/pesticide-for-chrome/bakpbgckdnepkmkeaiomhmfcnejndkbi) which saved me a lot of time and headaches, I highly recommend it

### 6. Make responsive to all devices

In order for my portfolio to look good on more than one device I needed to make it repsonsive. I did this by using the `@media` queries in CSS. To start, I set the media query to change once the page was smaller than 670px or `max-width: 670px`. I used this size because I needed the screen size to be small. When I tested this out on my phone it was too small, so I increase the amount to 1024px just to be sure. After that, I started to make the site look more mobile friendly.

<!-- ## Problems encountered

- .on() not working properly
- .hover() deprecated -->
