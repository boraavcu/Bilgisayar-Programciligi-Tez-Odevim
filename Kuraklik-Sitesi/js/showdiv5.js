function showDiv5(divNumber) {
    // Görüntülenecek olan div'in id'si
    var divToShow = "div" + divNumber;
  
    // Tüm div'leri gizle
    document.getElementById("div50").style.display = "none";
    document.getElementById("div51").style.display = "none";
    document.getElementById("div52").style.display = "none";
    document.getElementById("div53").style.display = "none";
    document.getElementById("div54").style.display = "none";
    document.getElementById("div55").style.display = "none";
    document.getElementById("div56").style.display = "none";
    document.getElementById("div57").style.display = "none";
    document.getElementById("div58").style.display = "none";
    document.getElementById("div59").style.display = "none";
    document.getElementById("div60").style.display = "none";

    // Belirtilen div'i göster
    document.getElementById(divToShow).style.display = "block";
    
    // Tüm span'ların .selected sınıfını kaldır
    var allSpans = document.querySelectorAll('.btn5');
    for (var a = 0; a < allSpans.length; a++) {
    allSpans[a].classList.remove('selected');
    }
    // Tıklanan span'a .selected sınıfını ekle
    event.target.classList.add('selected');      
  }