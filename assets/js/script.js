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

function validateInput(inputElement) {
  console.log({ input: inputElement.value });
  if (!inputElement.value) {
    inputElement.setCustomValidity("Veuillez remplir ce champ.");
  } else {
    inputElement.setCustomValidity("");
  }
}
function validateEmail(emailElement) {
  const emailValue = emailElement.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    emailElement.setCustomValidity(
      "Veuillez entrer une adresse e-mail valide."
    );
  } else {
    emailElement.setCustomValidity("");
  }
}
