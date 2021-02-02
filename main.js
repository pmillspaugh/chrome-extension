// Chrome productivity extension that makes you think twice about slacking off on YouTube

"use strict";

// array of motivational poster URLs
const motivationalPosterURLs = [
  "https://www.dafont.com/forum/attach/orig/6/7/675269.jpg",
  "https://i.pinimg.com/originals/7e/49/17/7e491718f7e92c9607ffa59dc9567d9e.jpg",
  "https://assets.entrepreneur.com/slideshow/10-motivational-posters-enthusiasm.jpg?width=1000",
  "https://ipiccy.com/blog/wp-content/uploads/2017/01/Motivational-poster.jpg",
  "https://s3.amazonaws.com/emedcert_uploads/Gratitude_-_House_Post_c478e33690c9.jpg?1415581449",
];

// array of inspirational quotes
const inspirationalQuotes = [
  "Trust the process.env",
  "Beast code. – Marshawn Lynch",
  "DRY. I'll only say it once.",
  "Less YouTube loading, more coding",
  "Highlights can wait",
];

// select primary of YouTube homepage and remove from DOM
let primary = $("#primary");
let primaryParent = primary.parent();
if (primary) primary.remove();

// add div container to primary page area
primaryParent.append("<div id='primaryDiv'></div>");
let primaryDiv = $("#primaryDiv");

// get random image from unsplash API
$.ajax({
  method: "GET",
  url: "https://picsum.photos/list",
  success: (res) => addImageAndHeader(res),
  error: (err) => console.log(err),
});

// function that adds image and header to primary section of YouTube homepage
let addImageAndHeader = (data) => {
  primaryDiv.prepend("<img id='motivationalPoster'>");
  $("#motivationalPoster").attr({
    src: `https://unsplash.it/1200/800?image=${
      data[Math.floor(Math.random() * data.length)].id
    }`,
    alt: "motivational poster",
  });
  primaryDiv.prepend("<h1></h1>").addClass("beautText");
  $("h1").text(
    inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)]
  );
};

$("#motivationalPoster").click(() => {
  console.log("firing");
  // $get("https://picsum.photos/list", (res) => {
  //   $(e.currentTarget).attr({
  //     src: `https://unsplash.it/1200/800?image=${
  //       res[Math.floor(Math.random() * res.length)].id
  //     }`,
  //   });
  // });
});
