const container = document.querySelector('.container');
const card = document.querySelector('.card');

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const description = document.querySelector('.description');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase');

// animation event
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
})


// animation in
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';

  //popout
  title.style.transform = 'translateZ(150px)';
  sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
  description.style.transform = 'translateZ(125px)';
  sizes.style.transform = 'translateZ(100px)';
  purchase.style.transform = 'translateZ(75px)';
})


// animation out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all .5s ease';
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;

  //popback
  title.style.transform = 'translateZ(0px)';
  sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
  description.style.transform = 'translateZ(0px)';
  sizes.style.transform = 'translateZ(0px)';
  purchase.style.transform = 'translateZ(0px)';
})
