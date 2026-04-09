// ── Nav scroll raise + Back-to-top ──────────────────────────────────────────
(function () {
  var nav = document.getElementById('nav');
  var btt = document.getElementById('btt');
  if (nav || btt) {
    window.addEventListener('scroll', function () {
      if (nav) nav.classList.toggle('raised', window.scrollY > 8);
      if (btt) btt.classList.toggle('visible', window.scrollY > 400);
    });
  }
})();

// ── Mobile burger menu ───────────────────────────────────────────────────────
(function () {
  var burger = document.getElementById('burger');
  var mob = document.getElementById('mobNav');
  if (!burger || !mob) return;
  burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
  });
  mob.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      burger.classList.remove('open');
      mob.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

// ── Diagram tabs (project pages that have #diagrams) ────────────────────────
(function () {
  var tabs = document.querySelectorAll('.dtab');
  if (!tabs.length) return;
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      document.querySelectorAll('.dtab').forEach(function (x) { x.classList.remove('active'); });
      document.querySelectorAll('.diag-panel').forEach(function (x) { x.classList.remove('active'); });
      t.classList.add('active');
      var panel = document.getElementById(t.dataset.panel);
      if (panel) panel.classList.add('active');
    });
  });
})();

// ── Lightbox ─────────────────────────────────────────────────────────────────
function openLb(wrap) {
  var img = wrap.querySelector('img');
  var cap = wrap.querySelector('.diag-caption span');
  var lbImg = document.getElementById('lb-img');
  var lbLabel = document.getElementById('lb-label');
  var lb = document.getElementById('lightbox');
  if (!lb || !img) return;
  lbImg.src = img.src;
  if (lbLabel) lbLabel.textContent = cap ? cap.textContent : '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLb(e) {
  if (e && e.target && e.target.id === 'lb-img') return;
  var lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}
