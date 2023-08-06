var map = L.map("mapid").setView([36.82231, 10.19238], 8);
var marker = L.marker([36.82231, 10.19238]).addTo(map);
marker
  .bindPopup(
    '<img src="assets/img/logo.svg" alt="logo eden" class="img_popup" /><h6 class="eden">EDEN - Assistance Funéraire</h6><p>Immeuble Pacha Centre -  bureau C1, 75 avenue Kheireddine Pacha</p> '
  )
  .openPopup();

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; Made by  <a href="https://www.malekabbes.com/">EDEN</a>  ',
}).addTo(map);
