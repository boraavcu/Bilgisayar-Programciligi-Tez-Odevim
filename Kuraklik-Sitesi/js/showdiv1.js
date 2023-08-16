function showDiv(divNumber) {
    // Görüntülenecek olan div'in id'si
    var divToShow = "div" + divNumber;
  
    // Tüm div'leri gizle
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
    document.getElementById("div8").style.display = "none";
  
    // Belirtilen div'i göster
    document.getElementById(divToShow).style.display = "block";
    
    // Tüm span'ların .selected sınıfını kaldır
    var allSpans = document.querySelectorAll('.btn1');
    for (var i = 0; i < allSpans.length; i++) {
    allSpans[i].classList.remove('selected');
    }
    // Tıklanan span'a .selected sınıfını ekle
    event.target.classList.add('selected');      
  }