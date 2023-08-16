function showDiv3(divNumber3) {
    // Görüntülenecek olan div'in id'si
    var divToShow3 = "div" + divNumber3;
  
    // Tüm div'leri gizle
    document.getElementById("div20").style.display = "none";
    document.getElementById("div21").style.display = "none";
    document.getElementById("div22").style.display = "none";
    document.getElementById("div23").style.display = "none";
    document.getElementById("div24").style.display = "none";
    document.getElementById("div25").style.display = "none";
    document.getElementById("div26").style.display = "none";

  
    // Belirtilen div'i göster
    document.getElementById(divToShow3).style.display = "block";
    
    // Tüm span'ların .selected sınıfını kaldır
    var allSpans = document.querySelectorAll('.btn3');
    for (var y = 0; y < allSpans.length; y++) {
    allSpans[y].classList.remove('selected');
    }
    // Tıklanan span'a .selected sınıfını ekle
    event.target.classList.add('selected');      
  }