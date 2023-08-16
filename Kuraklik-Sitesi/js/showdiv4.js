function showDiv4(divNumber4) {
    // Görüntülenecek olan div'in id'si
    var divToShow4 = "div" + divNumber4;
  
    // Tüm div'leri gizle
    document.getElementById("div30").style.display = "none";
    document.getElementById("div31").style.display = "none";
    document.getElementById("div32").style.display = "none";
    document.getElementById("div33").style.display = "none";
    document.getElementById("div34").style.display = "none";
    document.getElementById("div35").style.display = "none";
    document.getElementById("div36").style.display = "none";
    document.getElementById("div37").style.display = "none";
  
    // Belirtilen div'i göster
    document.getElementById(divToShow4).style.display = "block";
    
    // Tüm span'ların .selected sınıfını kaldır
    var allSpans = document.querySelectorAll('.btn4');
    for (var j = 0; j < allSpans.length; j++) {
    allSpans[j].classList.remove('selected');
    }
    // Tıklanan span'a .selected sınıfını ekle
    event.target.classList.add('selected');      
  }