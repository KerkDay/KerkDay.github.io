// Functions for KerkDay.com
var content = document.querySelector("#content");
var contentOverlay = document.querySelector("#contentOverlay");
function scrollShadow() {
  var dFromBottom = content.scrollHeight - (content.scrollTop + content.clientHeight);
  if( dFromBottom >= 50) {
    contentOverlay.style.opacity = 1;
  } else {
    contentOverlay.style.opacity = 0;
  }
}

scrollShadow();
content.addEventListener('scroll', scrollShadow);
