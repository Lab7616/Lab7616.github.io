// Allow visitors to hide the moving background, including on small screens.
const toggle = document.querySelector('.animation-toggle');
if (toggle) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let hidden = reduceMotion.matches;
  function update() {
    document.body.classList.toggle('animation-hidden', hidden);
    document.body.classList.toggle('animation-shown', !hidden);
    toggle.textContent = hidden ? 'Show animation' : 'Hide animation';
  }
  toggle.hidden = false;
  update();
  toggle.addEventListener('click', () => { hidden = !hidden; update(); });
  reduceMotion.addEventListener('change', event => { hidden = event.matches; update(); });
}
