// Chrome productivity extension that makes you think twice about slacking off on YouTube

"use strict";

// select primary of YouTube homepage and remove from DOM
let primary = $("#primary");
let primaryParent = primary.parent(); // save parent of DOM element with id primary
if (primary) primary.remove();

// add motivational poster and encouraging words to primary section of YouTube homepage
primaryParent.append("<div id='primaryDiv'></div>");
let primaryDiv = $("#primaryDiv");
primaryDiv.prepend(
  "<img class='motivationalPoster' src='https://www.dafont.com/forum/attach/orig/6/7/675269.jpg' alt='motivational poster'>"
);
primaryDiv.prepend("<h1>Trust the process.env</h1>").addClass("beautText");
