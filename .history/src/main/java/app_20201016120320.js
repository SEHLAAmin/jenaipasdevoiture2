const titre = document.querySelector('.unique');

const TL1 = new TimelineMax({paused: true});


TL1
.from(titre, 1, {x: -100, opacity: 0})
//.staggerFrom(h2, 1, {y: -50, opacity: 0}, 0.2, '-=1')

TL1.play(); 