/* 
Chrome productivity extension that makes you think twice about slacking off on YouTube
*/

// select primary content of YouTube homepage and remove from DOM
const primary = document.getElementById("primary");
primary.parentNode.removeChild(primary);
