const theTitle = document.querySelector('h1');

theTitle.addEventListener('mouseover', function(){
  theTitle.innerHTML = "check out script.js to add interactions";
  console.log("script.js is in the same folder as this page's index.html file");
})

theTitle.addEventListener('mouseout', function(){
  theTitle.innerHTML = "CGK DESIGN TEMPLATE";
  console.log("just moused out");
})
