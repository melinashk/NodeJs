to manipulatine css with js we can use 

`style` property of an element

```js
element.document.querySelector('.my-element')
element.style.backgroundColor ='Red'
```
dynimacally
```js
element = document.....('#my_element')
currentLeft = parseInt(element.style.left)
element.style.left = currentLeft +50 +'px';
```

### Template Tag

The <template> tag in HTML is used to declare fragments of HTML code that can be cloned and inserted into the document using JavaScript. This can be useful for dynamically generating content or components that are repeated on a page.

```HTML
<template id="my-template">
  <div class="card">
    <h2 class="title"></h2>
    <p class="description"></p>
  </div>
</template>

<div id="card-container"></div>

```
In this example, the <template> tag contains a card component with placeholders for the title and description. The id attribute is used to identify the template in JavaScript.

To manipulate the <template> tag using JavaScript, you can use the content property to access the contents of the template, and the cloneNode() method to create a copy of the template that can be inserted into the document.

```js
// Get the template and its contents
const template = document.getElementById("my-template");
const templateContent = template.content;

// Create a new card element by cloning the template
const card = templateContent.cloneNode(true);

// Set the title and description of the card
const title = card.querySelector(".title");
const description = card.querySelector(".description");
title.textContent = "My Card Title";
description.textContent = "This is my card description.";

// Insert the card into the document
const container = document.getElementById("card-container");
container.appendChild(card);
```