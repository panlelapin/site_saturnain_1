(function () {
  'use strict';
  var toggle = document.getElementById('theme');
  function updateTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Activer le thème clair' : 'Activer le thème sombre');
    toggle.textContent = dark ? '☀' : '☾';
  }
  var stored;
  try { stored = localStorage.getItem('saturnain-theme'); } catch (e) { /* Navigation privée : préférence non persistée. */ }
  updateTheme(stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
  toggle.addEventListener('click', function () {
    var dark = document.documentElement.getAttribute('data-theme') !== 'dark';
    updateTheme(dark);
    try { localStorage.setItem('saturnain-theme', dark ? 'dark' : 'light'); } catch (e) { /* Le thème reste fonctionnel sans stockage. */ }
  });
  var form = document.getElementById('gift-form');
  if (!form) return;
  var sender = document.getElementById('sender');
  var recipient = document.getElementById('recipient');
  var care = document.getElementById('care');
  // Six mois calendaires ; ramener au dernier jour si le mois cible est plus court.
  var today = new Date();
  var expiry = new Date(today.getFullYear(), today.getMonth() + 6, 1);
  var lastDay = new Date(expiry.getFullYear(), expiry.getMonth() + 1, 0).getDate();
  expiry.setDate(Math.min(today.getDate(), lastDay));
  var expiryLabel = document.getElementById('preview-expiry');
  expiryLabel.textContent = expiry.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  expiryLabel.setAttribute('datetime', expiry.getFullYear() + '-' + String(expiry.getMonth() + 1).padStart(2, '0') + '-' + String(expiry.getDate()).padStart(2, '0'));
  function preview() {
    document.getElementById('preview-to').textContent = recipient.value.trim() || 'Une personne qui compte';
    document.getElementById('preview-from').textContent = sender.value.trim() || 'Vous';
    document.getElementById('preview-care').textContent = care.options[care.selectedIndex].text;
  }
  form.addEventListener('input', preview);
  form.addEventListener('change', preview);
  preview();
}());
