/* =========================================================
   Ughy Kinga · Nail Trainer — site.js
   Nincs egér-követő effekt (custom cursor / magnetic CTA).
   ========================================================= */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- loader ---------- */
  var loader = document.getElementById('loader');
  function hideLoader() {
    if (!loader) return;
    var first = !sessionStorage.getItem('uk_seen');
    sessionStorage.setItem('uk_seen', '1');
    setTimeout(function () { loader.classList.add('off'); }, first ? 900 : 180);
  }
  window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, 2600); // biztosíték

  /* ---------- Lenis smooth scroll ---------- */
  var lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new window.Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 0.95 });
    (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })();
  }

  /* ---------- fejléc állapot ---------- */
  var hdr = document.getElementById('hdr');
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (hdr) hdr.classList.toggle('scrolled', y > 40);
    // parallax hero
    var bg = document.querySelector('.hero-bg');
    if (bg && !reduce && y < window.innerHeight * 1.2) {
      bg.style.transform = 'translate3d(0,' + (y * 0.14) + 'px,0)';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobil menü ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger) {
    var scrim = document.createElement('div');
    scrim.className = 'nav-scrim';
    document.body.appendChild(scrim);

    function closeMenu() { document.body.classList.remove('menu-open'); }
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      document.body.classList.toggle('menu-open');
    });
    scrim.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
    if (nav) nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    // ha visszaszélesedik az ablak, ne maradjon nyitva
    window.addEventListener('resize', function () { if (window.innerWidth > 860) closeMenu(); });
  }

  /* ---------- nav: irányhelyes arany aláhúzás + egeret követő fénypont ----------
     Csak egérrel vezérelt eszközön fut. Nem mozgatja a linket (nincs magnetic effekt),
     csak az aláhúzás iránya és a fénypont követi a kurzort. */
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduce) {
    document.querySelectorAll('#nav a:not(.drawer-login)').forEach(function (a) {
      function side(e) {
        var r = a.getBoundingClientRect();
        return { pos: e.clientX - r.left, from: (e.clientX - r.left) < r.width / 2 ? 'left' : 'right' };
      }
      a.addEventListener('mouseenter', function (e) {
        var s = side(e);
        a.style.setProperty('--org', s.from);
        a.style.setProperty('--mx', s.pos + 'px');
        a.classList.add('hov');
      });
      a.addEventListener('mousemove', function (e) {
        a.style.setProperty('--mx', side(e).pos + 'px');
      });
      a.addEventListener('mouseleave', function (e) {
        a.style.setProperty('--org', side(e).from);
        a.classList.remove('hov');
      });
    });
  }

  /* ---------- reveal on scroll ---------- */
  var rv = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    rv.forEach(function (el) { io.observe(el); });
  } else {
    rv.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- counter-up ---------- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = parseInt(el.getAttribute('data-count'), 10) || 0;
        if (reduce) { el.textContent = fmt(target); cio.unobserve(el); return; }
        var start = performance.now(), dur = 1400;
        (function tick(now) {
          var p = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        })(start);
        cio.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }
  function fmt(n) { return n >= 1000 ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : String(n); }

  /* ---------- galéria szűrő + lightbox ---------- */
  var filters = document.querySelectorAll('.filters button');
  if (filters.length) {
    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filters.forEach(function (b) { b.classList.remove('on'); });
        btn.classList.add('on');
        var f = btn.getAttribute('data-f');
        document.querySelectorAll('.gal figure').forEach(function (fig) {
          var match = f === 'all' || fig.getAttribute('data-k') === f;
          fig.classList.toggle('hide', !match);
        });
      });
    });
  }
  var lb = document.getElementById('lightbox');
  if (lb) {
    var lbImg = lb.querySelector('img');
    document.querySelectorAll('.gal figure').forEach(function (fig) {
      fig.addEventListener('click', function () {
        var img = fig.querySelector('img');
        if (!img) return;
        lbImg.src = img.getAttribute('src');
        lb.classList.add('on');
        if (lenis) lenis.stop();
      });
    });
    function closeLb() { lb.classList.remove('on'); if (lenis) lenis.start(); }
    lb.addEventListener('click', closeLb);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
  }

  /* ---------- kurzus-oldal: modul-lista ---------- */
  document.querySelectorAll('[data-lesson]').forEach(function (row) {
    row.addEventListener('click', function () {
      if (row.classList.contains('free')) return;
      row.classList.add('nudge');
      setTimeout(function () { row.classList.remove('nudge'); }, 500);
    });
  });

  /* ---------- űrlap (demó) ---------- */
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = f.querySelector('.form-ok');
      if (ok) { ok.hidden = false; f.querySelectorAll('input,textarea,select,button').forEach(function (i) { i.disabled = true; }); }
    });
  });
})();
