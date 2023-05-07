const cards = Array.from(document.querySelectorAll('.card'));
const middleX = cards[0].clientWidth / 2;
const middleY = cards[0].clientHeight / 2;

for (const card of cards) {
  card.addEventListener('mousemove', (e) => {
    const fromcenterX = middleX - (e.clientX - card.offsetLeft);
    const fromcenterY = middleY - (e.clientY - card.offsetTop);
    card.style.setProperty('--rx', `${fromcenterY / 20}deg`);
    card.style.setProperty('--ry', `-${fromcenterX / 20}deg`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rx', '0');
    card.style.setProperty('--ry', '0');
    card.style.setProperty('--duration', '600ms');
  });
}
