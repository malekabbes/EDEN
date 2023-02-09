// Check if the user has scrolled more than 50px
window.onwheel = function () {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.querySelector("#navbar").classList.add("scroll");
  } else {
    document.querySelector("#navbar").classList.remove("scroll");
  }
};

function initMap() {
  var location = { lat: 36.82231, lng: 10.19238 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: location,
  });
}
