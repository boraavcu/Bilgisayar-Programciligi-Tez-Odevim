function showInfo(city) {
    // İlgili ilin bilgi divini göster
    var infoDiv = document.getElementById("info-" + city);
    infoDiv.classList.add("active");

    // Tüm butonların bulunduğu divi gizle
    var buttonContainer = document.querySelector(".button-container");
    buttonContainer.style.display = "none";
  }
  function goBack() {
    // Tüm il bilgi divlerini gizle
    var infoDivs = document.querySelectorAll(".info-container");
    for (var i = 0; i < infoDivs.length; i++) {
      infoDivs[i].classList.remove("active");
    }
    // Tüm butonları göster
    var buttonContainer = document.querySelector(".button-container");
    buttonContainer.style.display = "block";

    // Tüm il butonlarını göster
    var illerButtons = document.querySelectorAll(".iller");
    for (var i = 0; i < illerButtons.length; i++) {
      illerButtons[i].style.display = "inline-block";
    }
  }