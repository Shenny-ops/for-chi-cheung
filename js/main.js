/* THE CONTACT SHEET — renders gallery & notes from js/data.js */
(function () {
  'use strict';
  var data = window.CONTACT_SHEET || { photos: [], messages: [] };
  var photos = data.photos || [];
  var messages = data.messages || [];
  var pad = function (n) { return String(n).padStart(2, '0'); };

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---------- Counts ---------- */
  document.getElementById('frame-count').textContent = pad(photos.length) + ' EXPOSURES';
  document.getElementById('note-count').textContent = pad(messages.length) + ' NOTES';
  document.getElementById('stats').textContent =
    messages.length + ' people · ' + photos.length + ' photos · Countless memories';

  /* ---------- Gallery ---------- */
  var frames = document.getElementById('frames');
  photos.forEach(function (p, i) {
    var fig = el('figure', 'frame reveal');
    var head = el('div', 'frame-head mono');
    head.appendChild(el('span', null, 'FRAME ' + pad(i + 1)));
    head.appendChild(el('span', null, p.exif || ''));

    var btn = el('button', 'frame-btn');
    btn.type = 'button';
    btn.setAttribute('aria-label', '放大檢視 FRAME ' + pad(i + 1) + (p.title ? '：' + p.title : ''));
    var img = el('img');
    img.src = p.src;
    img.alt = p.alt || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    btn.appendChild(img);
    btn.addEventListener('click', function () { openLightbox(i, btn); });

    fig.appendChild(head);
    fig.appendChild(btn);
    if (p.title) fig.appendChild(el('figcaption', null, p.title));
    frames.appendChild(fig);
  });

  /* ---------- Notes ---------- */
  var list = document.getElementById('note-list');
  messages.forEach(function (m, i) {
    var cls = 'note reveal ' + (m.style || 'line') + (m.large ? ' large' : '');
    var art = el('article', cls);
    var label = el('div', 'note-label mono');
    label.appendChild(el('span', null, 'Nº ' + pad(i + 1)));
    art.appendChild(label);
    var q = el('div', 'note-quote', '“');
    q.setAttribute('aria-hidden', 'true');
    art.appendChild(q);
    art.appendChild(el('p', null, m.text));
    art.appendChild(el('div', 'name', '— ' + m.name));
    list.appendChild(art);
  });

  /* ---------- Reveal on scroll ---------- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var delay = (e.target.dataset.delay || 0);
          setTimeout(function () { e.target.classList.add('in'); }, delay);
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    // 留言柔和逐步顯現：同批進場的稍微錯開
    document.querySelectorAll('#note-list .note').forEach(function (n, i) {
      n.dataset.delay = (i % 3) * 120;
    });
    items.forEach(function (n) { io.observe(n); });
  } else {
    items.forEach(function (n) { n.classList.add('in'); });
  }

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lb-img');
  var lbNo = document.getElementById('lb-no');
  var lbTitle = document.getElementById('lb-title');
  var current = 0;
  var returnFocus = null;

  function show(i) {
    current = (i + photos.length) % photos.length;
    var p = photos[current];
    lbImg.src = p.src;
    lbImg.alt = p.alt || '';
    lbNo.textContent = 'FRAME ' + pad(current + 1) + ' / ' + pad(photos.length);
    lbTitle.textContent = p.title;
  }
  function openLightbox(i, trigger) {
    returnFocus = trigger;
    show(i);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('lb-close').focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    document.body.style.overflow = '';
    if (returnFocus) returnFocus.focus();
  }

  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', function () { show(current - 1); });
  document.getElementById('lb-next').addEventListener('click', function () { show(current + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
  // 手機左右滑動切換
  var sx = null;
  lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (sx == null) return;
    var dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    sx = null;
  });
})();
