const navbar = document.querySelectorAll('.nav');
const title = document.querySelector('.titre1');
const capsule = document.querySelectorAll('.agence')
const img = document.querySelector('img');

const TL1 = new TimelineMax({paused: true});


TL1

.staggerFrom(navbar, 0.5, {y: -50, opacity: 0}, 0.2)
.from(title, 2, {opacity: 0}) 
.staggerFrom(capsule, 1, {x: -100, opacity: 0}, 0.2, '-=1')
.from(img, 2, {opacity:0}, '-=0.8')

//'-=2.5')



TL1.play(); 