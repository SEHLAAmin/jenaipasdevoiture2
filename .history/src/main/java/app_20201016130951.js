const titre = document.querySelectorAll('.nav');

const TL1 = new TimelineMax({paused: true});


TL1
.staggerFrom(allItems, 1, {x: -100, opacity: 0})


TL1.play(); 