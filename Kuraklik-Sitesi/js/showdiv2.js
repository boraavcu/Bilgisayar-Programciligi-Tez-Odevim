function showDiv2(divNumber2) {
    // Görüntülenecek olan div'in id'si
    var divToShow2 = "div" + divNumber2;
  
    // Tüm div'leri gizle
    document.getElementById("div10").style.display = "none";
    document.getElementById("div11").style.display = "none";
    document.getElementById("div12").style.display = "none";
    document.getElementById("div13").style.display = "none";
    document.getElementById("div14").style.display = "none";
    document.getElementById("div15").style.display = "none";
    document.getElementById("div16").style.display = "none";
    document.getElementById("div17").style.display = "none";
  
    // Belirtilen div'i göster
    document.getElementById(divToShow2).style.display = "block";
    
    // Tüm span'ların .selected sınıfını kaldır
    var allSpans = document.querySelectorAll('.btn2');
    for (var x = 0; x < allSpans.length; x++) {
    allSpans[x].classList.remove('selected');
    }
    // Tıklanan span'a .selected sınıfını ekle
    event.target.classList.add('selected');      
  }