const nav = document.querySelectorAll('.nav'); 
const titre = document.querySelector('h2');

const TL1 = new TimelineMax({paused: true});


TL1
.from(titre, 1, {y: -100, opacity: 0})
.staggerFrom(allItems, 1, {y: -50, opacity: 0}, 0.2, '-=1')

TL1.play();