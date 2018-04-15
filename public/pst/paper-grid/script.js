var theWorker = "butt boy"

console.log(theWorker + " is working");

var masthead = document.querySelector('#masthead');
var motto = document.querySelector('#motto');
var headline = document.querySelector('#secondstory');

motto.addEventListener('mouseover', function(){
  masthead.innerHTML = "<h1>Butt Boy has taken control</h1>"
})

headline.addEventListener('mouseover', function() {
  headline.innerHTML = '<h3>Announcing the Peabody School Times</h3><h4 class="byline">by Butt Boy</h4><p>Hi! I am Butt Boy the editor of the Peabody school times. This is the first issue so it will be getting more exiting as it goes on. As I am writing this we do need more stories so we are hiring more reporters. We also need more comics for the comics page. We also need somebody to write a horoscope. So BUTT BOY HAS TAKEN CONTROL!!!!!!!!! . We also might do a couple fudraisers so we are looking for people that could particapate in those. </p><p>Best, Butt Boy</p>'
})

motto.addEventListener('mouseout', function(){
  masthead.innerHTML = "<h1>The Peabody School Times</h1>"
})

headline.addEventListener('mouseout', function() {
  headline.innerHTML = '<h3>Announcing the Peabody School Times</h3><h4 class="byline">by Conrad Kuzmick</h4><p>Hi! I am Conrad the editor of the Peabody school times. This is the first issue so it will be getting more exiting as it goes on. As I am writing this we do need more stories so we are hiring more reporters. We also need more comics for the comics page. We also need somebody to write a horoscope. So in all we are hiring many positions. We also might do a couple fundraisers so we are looking for people that could particapate in those.</p><p>Best, Conrad</p>'
})
