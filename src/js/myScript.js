

const layers = document.getElementsByClassName("valorImageMainMoving");

document.body.onpointermove = ({clientX, clientY}) => {
  const w = getWidth(), h = getHeight();
  const vx = clientX / w - 0.5;
  const vy = clientY / h - 0.5;
  const offset = 50;

  const dx = vx * offset;
  const dy = vy * offset;

  for (const el of layers) {
    el.animate(
      { transform: `translate(${dx}px, ${dy}px)` },
      { duration: 500, fill: "forwards", easing: "ease-out" }
    );
  }
};


function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}
/*
const el = document.getElementById('profileImage');
document.addEventListener('pointermove', e => {
  const r = el.getBoundingClientRect();
  const cx = r.left + r.width/2, cy = r.top + r.height/2;
  const dx = (e.clientX - cx) / r.width, dy = (e.clientY - cy) / r.height;
  el.style.setProperty('--ry', `${dx * 6}deg`);
  el.style.setProperty('--rx', `${-dy * 6}deg`);
});
*/
